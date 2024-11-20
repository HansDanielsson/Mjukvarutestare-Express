// Fil för attt hantera Express server
const express = require("express")
const bodyParser = require("body-parser")
const fs = require("fs")

const portNr = 5000
const filePath = "./jsonData.json"

// Konfigurera server med Body-parser
const application = new express()
application.use(bodyParser.json())
application.use(bodyParser.urlencoded({extended: false}))

// Starta upp server
application.listen(portNr, () => {
  console.log(`Nu ligger servern på portNr ${portNr} och lyssnar efter inkommande requests`)
})

// Get-request på root-address för att returnera index.html
application.get("", (req, res) => {
  // Returnera Hello World
  // res.send("Hejsan")
  res.sendfile("./index.html")
})

application.post("/data", (req, res) => {
  // Denna payload innehåller 2 st attribut, name och age
  const data = req.body

  console.log(data)
  // Skriver ut data till konsol
  console.log(data["name"])
  console.log(data["age"])

  // Retunerar meddelande till klient
  res.send(`Hejsan ${data.name}, du är ${data.age} år gammal`)

})
