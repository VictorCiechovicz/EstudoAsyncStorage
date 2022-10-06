import { db } from "./SQLite";

//esta funcao faz um query e cria uma tabela toda a vez que for chamada
 export function criaTabela(){
  db.transaction((transaction)=>{

    transaction.executeSql("CREATE TABLE IF NOT EXISTS " + "Notas " +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);")
  })
}