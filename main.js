//mistone1


let biletPrice = document.getElementById("biletPrice").innerHTML

let priceBilet = calcBiletPrice()
console.log(priceBilet);

function calcBiletPrice() {

    let passengerAge = 10//Number(prompt("Inserisci età del passegero"))

    let distanceKm = 10//Number(prompt("Inserisci età del passegero"))
    
    let priceForKm = 0.21
    
    let disconut20 = 0.20
    
    let disconut40 = 0.40

    let clacPrice = (distanceKm * priceForKm)

    return clacPrice
    
    
}
