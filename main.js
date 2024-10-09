//mistone1


let biletPrice = document.getElementById("biletPrice").innerHTML

let priceBilet = calcBiletPrice()
console.log(priceBilet);

function calcBiletPrice() {

    let passengerAge = 17//Number(prompt("Inserisci età del passegero"))

    let distanceKm = 10//Number(prompt("Inserisci età del passegero"))
    
    let priceForKm = 0.21
    
    let disconut20 = 0.20
    
    let disconut40 = 0.40

    let clacPrice = (distanceKm * priceForKm)

    if (passengerAge < 18) {

        clacPrice = clacPrice - (clacPrice * disconut20)
        return clacPrice.toFixed(2)
    }else if (passengerAge > 65) {
        clacPrice = clacPrice - (clacPrice * disconut40)
        return clacPrice.toFixed(2)
    } else {
        return clacPrice.toFixed(2)
    }

    
    
    
}
