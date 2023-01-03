let inputEL = document.getElementById("unit")
let btnConvert = document.getElementById("convert")
let calLength = document.getElementById("length")
let calVolume = document.getElementById("volume")
let calMass = document.getElementById("mass")

let kilogram = 2.204

btnConvert.addEventListener("click", function(){
    renderLength()
    renderVolume()
    renderMass()
})

function renderLength(){
    let outputFeet = inputEL.value * 3.281
    let outputMeter = inputEL.value * 0.304
    calLength.textContent = inputEL.value + " meters = " + outputFeet.toFixed(3) + " feets | " +
    inputEL.value + " feet = " + outputMeter.toFixed(3) + " meters" 
}

function renderVolume(){
    let outputGallon = inputEL.value * 0.264
    let outputLiter = inputEL.value * 3.785
    calVolume.textContent = inputEL.value + " liters = " + outputGallon.toFixed(3) + " galllons | " +
    inputEL.value + " gallons = " + outputLiter.toFixed(3) + " liters"
}

function renderMass(){
    let outputPound = inputEL.value * 2.204
    let outputKilo = inputEL.value / 2.204
    calMass.textContent = inputEL.value + " kilos = " + outputPound.toFixed(3) + " pounds | " +
    inputEL.value + " pounds = " + outputKilo.toFixed(3) + " kilos"
}
