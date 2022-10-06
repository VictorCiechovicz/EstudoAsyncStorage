import { db } from './SQLite'

//esta funcao faz um query e cria uma tabela toda a vez que for chamada
export function criaTabela() {
  db.transaction(transaction => {
    transaction.executeSql(
      'CREATE TABLE IF NOT EXISTS ' +
        'Notas ' +
        '(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, categoria TEXT, texto TEXT);'
    )
  })
}

export async function adicionaNota(nota) {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        'INSERT INTO Notas(titulo, categoria, texto) VALUES (?, ?, ?);',
        [nota.titulo, nota.categoria, nota.texto],
        () => {
          resolve('Nota adicionada com sucesso.')
        }
      )
    })
  })
}

export async function buscaNotas() {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        'SELECT * FROM Notas;',
        [],
        (transaction, resultados) => {
          resolve(resultados.rows._array)
        }
      )
    })
  })
}

export async function atualizaNota(nota) {
  return new Promise(resolve => {
    db.transaction(transaction => {
      transaction.executeSql(
        'UPDATE Notas SET titulo = ?, categoria = ?, texto = ? WHERE id = ?;',
        [nota.titulo, nota.categoria, nota.texto, nota.id],
        () => {
          resolve('Nota atualizada com sucesso.')
        }
      )
    })
  })
}
