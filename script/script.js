//creare le celle della tabella

const cells = 76

const createCells = function (cells) {
  const tableDiv = document.getElementById('tabellone') //recupero il div dove va messa la tabella
  for (let i = 1; i <= cells; i++) {
    const cellDiv = document.createElement('div') // creo div vuoto
    cellDiv.classList.add('cell') //aggiungo la classe 'cell'
    const cellValue = document.createElement('h3') //creo il numero da inserire nella cella
    cellValue.innerText = i

    cellDiv.appendChild(cellValue)
    tableDiv.appendChild(cellDiv)
  }
}

createCells(cells)

//estrazione di un numero random dal bottone
// evidenziare il numero selezionto dopo il click del bottone
const estratto = []

const extract = function () {
  const random = Math.floor(Math.random() * 77) //numero random
  estratto.push(random)
  const all = document.querySelectorAll('.cell')
  all.forEach((cell) => {
    if (parseInt(cell.innerText) === random) {
      cell.style.backgroundColor = 'yellow'
    }
  })
}

const button = document.getElementById('btn')
button.addEventListener('click', extract) //aggiunge evento al bottone
