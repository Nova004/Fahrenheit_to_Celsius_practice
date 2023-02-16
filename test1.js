function toCelsius(Celsius){
let value = (Celsius - 32)*5/9
return value.toFixed(2)+" c°"
}

let Celsius = prompt("ใส่ข้อมูล")
alert(toCelsius(Celsius))



function dlsplay(ElementId, value){
 document.getElementById(ElementId).innerHTML = value
}

dlsplay("Celsius",toCelsius(Celsius))
