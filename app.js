window.onload = function() {
    let celcius = document.getElementById("celcius");
    let fahr = document.getElementById("fahrenheit");

    celcius.oninput = function() {
        fahr.value = (celcius.value * 9 / 5) + 32;
    };

    fahr.oninput = function() {
        celcius.value = (fahr.value - 32) * 5 / 9;
    }


}