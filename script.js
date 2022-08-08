let result = document.getElementById('result');
let screen = document.getElementById('screen')
let input_form = document.getElementById('input_form')

input_form.addEventListener("submit", function (event){
    event.preventDefault()

    if(screen.value >= 70 && screen.value <= 100){
        result.innerHTML = "Excelent";
        // console.log("its within the range");
    }
    if(screen.value >= 60 && screen.value <= 69){
        result.innerHTML = "very good"
    }
    if(screen.value >= 50 && screen.value <= 59){
        result.innerHTML = "credit"
    }
    if(screen.value >= 40 && screen.value <= 49){
        result.innerHTML = "pass"
    }
    if(screen.value < 40){
        result.innerHTML = "fail"
    }
} )