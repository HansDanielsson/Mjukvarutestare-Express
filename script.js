document.getElementById("btnFetch").addEventListener("click", async () => {
  // Hämta JSON data från service
  let resp = await fetch("/data")

  // Konvertera resp-payload till JS struktur (i detta fall en lista)
  let data = await resp.json()

  // Skapa en HTML table komponent
  let table = document.createElement("table")

  // Skapa en ForEach loop
  for (let person in data) {
    // Skapa en TR komponent
    let tr = document.createElement("tr")

    // Skapa en ForIn loop för att gå igenom varje attribut i Person
    for(let attr in person) {
      // Skapa en TD komponent
      let td = document.createElement("td")
      // Fll den med data
      td.innerText = person[attr]
      tr.appendChild(td)
    }

    // Placera den färdiga raden i Table
    table.appendChild(tr)
  }

  // Lägg till table i HTML-dokumentet
  document.getElementById("tableOutput").appendChild(table)
})