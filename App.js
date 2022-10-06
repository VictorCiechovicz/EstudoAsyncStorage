import { FlatList, SafeAreaView, StatusBar, StyleSheet } from "react-native"
import NotaEditor from "./src/componentes/NotaEditor"
import { Nota } from "./src/componentes/Nota"
import { useEffect, useState } from "react"
import { buscaNotas, criaTabela } from "./src/servicos/Notas"

export default function App() {
   const [notaSelecionada, setNotaSelecionada] = useState({})
  const [notas, setNotas] = useState([])
    
  
  async function mostraNotas() {
    const todasNotas = await buscaNotas()
    setNotas(todasNotas)
    console.log(todasNotas)
  }
    useEffect(() => {
    criaTabela()
    mostraNotas()
  }, [])
  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        renderItem={(nota) => <Nota {...nota} setNotaSelecionada={setNotaSelecionada}/>}
        keyExtractor={nota => nota.id}/>
      <NotaEditor mostraNotas={mostraNotas} notaSelecionada={notaSelecionada} setNotaSelecionada={setNotaSelecionada}/>
      <StatusBar/>
    </SafeAreaView>
  )
}
// Nota.js
import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
export function Nota({item, setNotaSelecionada}) {
  const categorias = {Pessoal: "#FF924F", Outros: "#00911F", Trabalho: "#2F71EB"}
  const estilos = styleFunction(categorias[item.categoria])

  return (
    <TouchableOpacity style={estilos.cartao} onPress={() => setNotaSelecionada(item)}>
      <Text style={estilos.titulo}>{item.titulo}</Text>
      <Text style={estilos.categoria}>{item.categoria}</Text>
      <Text style={estilos.texto} numberOfLines={5}>{item.texto}</Text>
    </TouchableOpacity>
  )
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
})
