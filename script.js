document.getElementById('btnfetch').addEventListener('click', async () => {
  // Hämta JSON data från service
  let resp = await fetch('/data')

  // Konvertera resp-payload till JS struktur (i detta fall en lista)
  let data = await resp.json()

  // Skapa en HTML table komponent
  let table = document.createElement('table')

  // --------------------------
  // Deta har lagts till för att skapa Header rad i table
  // --------------------------
  // Skapa headers för öersta raden
  let headerRow = document.createElement('tr')
  // Skapa en ForIn loop för det första objektet i listan, för att hämta attribut-namn för header
  for (let attr in data[0]) {
    let tableHead = document.createElement('th')
    tableHead.innerText = attr
    headerRow.appendChild(tableHead)
  }
  table.appendChild(headerRow)
  // --------------------------

  // Skapa en ForEach loop
  data.forEach((person) => {
    // Skapa en TR komponent
    let tr = document.createElement('tr')

    // Skapa en ForIn loop för att gå igenom varje attribut i Person
    for (let attr in person) {
      // Skapa en TD komponent
      let td = document.createElement('td')
      // Fll den med data
      td.innerText = person[attr]
      // td.innerText = person['name']
      tr.appendChild(td)
    }

    // Placera den färdiga raden i Table
    table.appendChild(tr)
  })

  // Lägg till table i HTML-dokumentet
  document.getElementById('tabeloutput').appendChild(table)
})
