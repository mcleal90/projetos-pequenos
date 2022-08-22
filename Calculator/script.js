// -TODO
// Hide operations and create two different vars when operation is clicked(OldNum, NewNum) 
// Disallow . from being entered multiple times

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    if (numero === '0' ) {
        document.getElementById('resultado').innerHTML = num;
    } else {
        document.getElementById('resultado').innerHTML = numero + num;
    }
}

function clean() {
    document.getElementById('resultado').innerHTML = "0";
}


function equals() {
    var resultado = document.getElementById('resultado').innerHTML;
    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    }
}

// -UNUSED
// function back() {
//     var resultado = document.getElementById('resultado').innerHTML;
//     if (resultado != "0") {
//         document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
//     }
// }