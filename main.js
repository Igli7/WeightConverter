//Varibles
let toggler = document.querySelector('.toggler');
let options = document.querySelectorAll(".option");


//EventListeners for all radio buttons
let inputCheck = document.querySelectorAll('.inputCheck');

for (let i = 0; i < inputCheck.length; i++) {
    inputCheck[i].addEventListener('change', converter, false);
}

//EventListener for input
document.querySelector('.inputNumber').addEventListener('input', converter, false);

function converter() {

    // Variables
    let input = document.querySelector('.inputNumber');
    let kgOutput = document.querySelector('.kgOutput');
    let gOutput = document.querySelector('.gOutput');
    let lbOutput = document.querySelector('.lbOutput');
    let ozOutput = document.querySelector('.ozOutput');
    let kgCard = document.querySelector('.kg');
    let gCard = document.querySelector('.g');
    let lbCard = document.querySelector('.lb');
    let ozCard = document.querySelector('.oz');
    let kgFormula = document.querySelector('.kgFormula');
    let gFormula = document.querySelector('.gFormula');
    let lbFormula = document.querySelector('.lbFormula');
    let ozFormula = document.querySelector('.ozFormula');

    // input Value
    let inputValue = input.value;



    if (document.getElementById('kilograms').checked == true) {

        let kg = inputValue;

        toggler.innerHTML = "Kg";

        options.forEach(function (removeClass) {
            removeClass.classList.remove("moved");
        });

        input.placeholder = 'Enter value of Kg';

        // Cards Output
        kgCard.style.display = 'none';
        gCard.style.display = 'block';
        lbCard.style.display = 'block';
        ozCard.style.display = 'block';

        gOutput.innerHTML = kg * 1000;
        gFormula.innerHTML = `<i>m </i><small>(g)</small> = <i>m </i><small>(kg)</small> x 1000`;

        lbOutput.innerHTML = kg * 2.20462262185;
        lbFormula.innerHTML = `<i>m </i><small>(lb)</small> = <i>m </i><small>(kg)</small> x 2.205`;

        ozOutput.innerHTML = kg * 35.27396195;
        ozFormula.innerHTML = `<i>m </i><small>(oz)</small> = <i>m </i><small>(kg)</small> x 35.274`;

    } else if (document.getElementById('grams').checked == true) {
        let g = inputValue;

        toggler.innerHTML = "g";

        options.forEach(function (removeClass) {
            removeClass.classList.remove("moved");
        });

        input.placeholder = 'Enter value of g';

        // Cards Output
        kgCard.style.display = 'block';
        gCard.style.display = 'none';
        lbCard.style.display = 'block';
        ozCard.style.display = 'block';

        kgOutput.innerHTML = g / 1000;
        kgFormula.innerHTML = `<i>m </i><small>(kg)</small> = <i>m </i><small>(g)</small> / 1000`;

        lbOutput.innerHTML = g / 453.59237;
        lbFormula.innerHTML = `<i>m </i><small>(lb)</small> = <i>m </i><small>(g)</small> / 453.592`;

        ozOutput.innerHTML = g / 28.34952;
        ozFormula.innerHTML = `<i>m </i><small>(oz)</small> = <i>m </i><small>(g)</small> x 28.350`;

    } else if (document.getElementById('pounds').checked == true) {
        let lb = inputValue;

        toggler.innerHTML = "Lb";

        options.forEach(function (removeClass) {
            removeClass.classList.remove("moved");
        });

        input.placeholder = 'Enter value of Lb';

        // Cards Output
        kgCard.style.display = 'block';
        gCard.style.display = 'block';
        lbCard.style.display = 'none';
        ozCard.style.display = 'block';

        kgOutput.innerHTML = lb * 0.45359237;
        kgFormula.innerHTML = `<i>m </i><small>(kg)</small> = <i>m </i><small>(lb)</small> x 0.454`;

        gOutput.innerHTML = lb * 453.59237;
        gFormula.innerHTML = `<i>m </i><small>(g)</small> = <i>m </i><small>(lb)</small> x 453.592`;

        ozOutput.innerHTML = lb * 16;
        ozFormula.innerHTML = `<i>m </i><small>(oz)</small> = <i>m </i><small>(lb)</small> x 16.000`;

    } else if (document.getElementById('ounces').checked == true){
        let oz = inputValue;

        toggler.innerHTML = "Oz";

        options.forEach(function (removeClass) {
            removeClass.classList.remove("moved");
        });

        input.placeholder = 'Enter value of Oz';

        // Cards Output
        kgCard.style.display = 'block';
        gCard.style.display = 'block';
        lbCard.style.display = 'block';
        ozCard.style.display = 'none';

        kgOutput.innerHTML = oz * 0.02834952;
        kgFormula.innerHTML = `<i>m </i><small>(kg)</small> = <i>m </i><small>(oz)</small> x 0.028`;

        gOutput.innerHTML = oz * 28.34952;
        gFormula.innerHTML = `<i>m </i><small>(g)</small> = <i>m </i><small>(oz)</small> x 28.350`;

        lbOutput.innerHTML = oz / 16;
        lbFormula.innerHTML = `<i>m </i><small>(oz)</small> = <i>m </i><small>(oz)</small> / 16.000`;
    }





    // if inputValue is empty hide cards
    if (inputValue != "") {
        let cards = document.querySelectorAll('.card')
        cards.forEach(function (card) {
            card.style.visibility = ('visible');
        });
        document.querySelector('#weightConverter').classList.add('animated')
    } else {
        let cards = document.querySelectorAll('.card')
        cards.forEach(function (card) {
            card.style.visibility = ('hidden');
        });
    }
}

document.getElementById('kilograms').addEventListener('click', function () {
    options.forEach(function (removeClass) {
        removeClass.classList.remove("moved");
    });
})
document.getElementById('grams').addEventListener('click', function () {
    options.forEach(function (removeClass) {
        removeClass.classList.remove("moved");
    });
})
document.getElementById('pounds').addEventListener('click', function () {
    options.forEach(function (removeClass) {
        removeClass.classList.remove("moved");
    });
})
document.getElementById('ounces').addEventListener('click', function () {
    options.forEach(function (removeClass) {
        removeClass.classList.remove("moved");
    });
})




// Toggler
toggler.addEventListener('click', function () {
    if (toggler.classList.contains("moved")) {
        toggler.classList.remove("moved");
        options.forEach(function (removeClass) {
            removeClass.classList.remove("moved");
        });
    } else {
        toggler.classList.add("moved");
        options.forEach(function (addClass) {
            addClass.classList.add("moved");
        });
    }
});


//Restricts input

let invalidChars = [
  "-",
  "+",
  "e",
];

document.querySelector(".inputNumber").addEventListener("keydown", function(e) {
  if (invalidChars.includes(e.key)) {
    e.preventDefault();
  }
});

