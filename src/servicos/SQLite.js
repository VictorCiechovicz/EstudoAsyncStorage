import * as SQLite from 'expo-sqlite'


//essa funcao faz a conexao com o nosso banco de dados
function abreConexao() {
  const database = SQLite.openDatabase('db.db')
  return database
}

export const db = abreConexao()
