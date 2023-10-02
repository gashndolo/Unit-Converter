/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const buttonEl = document.getElementById("convert")

buttonEl.addEventListener("click", function() {
    const unit = document.getElementById("unit").value
    let lengthEl = document.getElementById("length")
    let volumeEl = document.getElementById("volume")
    let massEl = document.getElementById("mass")
    lengthEl.textContent = ""
    volumeEl.textContent = ""
    massEl.textContent = ""
    lengthEl.textContent += `${unit} meters = ${(Number(unit) * 3.281).toFixed(3)} feet | ${unit} feet = ${(Number(unit) / 3.281).toFixed(3)} meters`
    volumeEl.textContent += `${unit} liters = ${(Number(unit) * 0.264).toFixed(3)} gallons | ${unit} gallons = ${(Number(unit) / 0.264).toFixed(3)} liters`
    massEl.textContent += `${unit} kilos = ${(Number(unit) * 2.204).toFixed(3)} pounds | ${unit} pounds = ${(Number(unit) / 2.204).toFixed(3)} kilos`
    console.log(unit)
    
})