import { FlatList, SafeAreaView, StatusBar, StyleSheet } from 'react-native'

import { useEffect, useState } from 'react'
import { Nota } from './src/componentes/Nota'
import { criaTabela } from './src/servicos/Notas'

export default function App() {

 // toda a vez que recarregamos nossa aplicacao ele chama a funcao e cria uma tabela 
  useEffect(() => {
    criaTabela()
  }, [])

  const [notas, setNotas] = useState([])

  async function mostraNotas() {
    
    setNotas(todasNotas)
  }

  return (
    <SafeAreaView style={estilos.container}>
      <FlatList
        data={notas}
        keyExtractor={nota => nota[0]}
        renderItem={nota => <Nota {...nota} />}
      />

      <NotaEditor mostraNotas={mostraNotas} />
      <StatusBar />
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'flex-start'
  }
})
