//mistone1


let calcButton = document.getElementById("calc")

calcButton.addEventListener("click", calcBiletPrice)


function calcBiletPrice() {

    let passengerAge = document.getElementById("passengerAge")

    let ageValue = passengerAge.value

    console.log(ageValue);
    
    
    let distanceKm = document.getElementById("distanceKm")
    let distanceKmValue = distanceKm.value

    console.log(distanceKmValue);
    

    
    let priceForKm = 0.21
    
    let disconut20 = 0.20
    
    let disconut40 = 0.40

    let clacPrice = (distanceKmValue * priceForKm)

    if (ageValue === "Minorenne") {

        clacPrice = clacPrice - (clacPrice * disconut20)
        return document.getElementById("costBilet").innerHTML = clacPrice.toFixed(2)
    }else if (ageValue === "Anziano") {
        clacPrice = clacPrice - (clacPrice * disconut40)
        return document.getElementById("costBilet").innerHTML = clacPrice.toFixed(2)
    } else {
        return document.getElementById("costBilet").innerHTML = clacPrice.toFixed(2)
    }

}

