//mistone1


let calcButton = document.getElementById("calc")

calcButton.addEventListener("click", calcBiletPrice)



function calcBiletPrice() {

    let passengerAge = document.getElementById("passengerAge")

    let passengerName = document.getElementById("nome_cognome")

    let passName = passengerName.value
    document.getElementById("passengerName").innerHTML = passName

    let ageValue = passengerAge.value

    console.log(ageValue);
    
    
    let distanceKm = document.getElementById("distanceKm")
    let distanceKmValue = distanceKm.value

    console.log(distanceKmValue);
    
    let priceForKm = 0.21
    
    let disconut20 = 0.20
    
    let disconut40 = 0.40

    let clacPrice = (distanceKmValue * priceForKm)

    let carrozza = Math.floor(Math.random() * 9) + 1
    let b_cod = Math.floor(Math.random() * 10000) + 1
    if (ageValue === "Minorenne") {

        clacPrice = clacPrice - (clacPrice * disconut20)
        document.getElementById("bilet_type").innerHTML = "Biglietto ridotto 20%"
        document.getElementById("carrozza").innerHTML = carrozza
        document.getElementById("b_cod").innerHTML = b_cod
        document.getElementById("costBilet").innerHTML = `${clacPrice.toFixed(2)} €`
    }else if (ageValue === "Anziano") {
        clacPrice = clacPrice - (clacPrice * disconut40)
        document.getElementById("carrozza").innerHTML = carrozza
        document.getElementById("b_cod").innerHTML = b_cod
        document.getElementById("bilet_type").innerHTML = "Biglietto ridotto 40%"
        document.getElementById("costBilet").innerHTML = `${clacPrice.toFixed(2)} €`
    } else {
        document.getElementById("carrozza").innerHTML = carrozza
        document.getElementById("b_cod").innerHTML = b_cod
        document.getElementById("bilet_type").innerHTML = "Biglietto Standard"
        document.getElementById("costBilet").innerHTML = `${clacPrice.toFixed(2)} €` 
    }

}

let annulla = document.getElementById("annulla")

annulla.addEventListener('click', function() {
    
    location.reload();
})