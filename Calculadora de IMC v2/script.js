let altura;
altura = document.getElementById("js-altura");
let peso;
peso = document.getElementById("js-peso");
let btn;
btn = document.querySelector(".btn__calcular");
const btnAviso = document.querySelector(".btn__aviso");
const btnApagar = document.querySelector('.js-apagar');
const imc = document.getElementById("js-imc");
const grauDopeso = document.querySelector(".grau__peso");
const divAviso = document.querySelector(".aviso.active");
const sexm = document.getElementById('sexm')
const sexf = document.getElementById('sexf')
document.addEventListener("keydown", function (event) {
    var i = altura.value.length;
    if (i === 1) altura.value = altura.value + ".";
});
document.addEventListener("keydown", function (event) {
    var i = peso.value.length;
    if (i === 2) peso.value = peso.value + ".";
});

btn.addEventListener('click', () => {
    let alturaEl = altura.value,
        pesoEl = peso.value;
    let result = (imc.innerHTML = parseFloat(
        pesoEl / (alturaEl * alturaEl)
    ).toFixed(2));
    let tabelas = document.querySelectorAll(".tb__item");
    let divResult = document.querySelector(".resultado");
    divResult.classList.add("active");
    if (result <= 18.5) {
        tabelas[0].classList.add("result");
        tabelas[0].style.animation = 'reveal 1s';
        tabelas[1].classList.remove("result");
        tabelas[2].classList.remove("result");
        tabelas[3].classList.remove("result");
        tabelas[4].classList.remove("result");
        grauDopeso.innerHTML = "ABAIXO DO PESO";
    } else if (result > 18.5 && result < 25) {
        tabelas[1].classList.add("result");
        tabelas[1].style.animation = 'reveal 1s';
        tabelas[0].classList.remove("result");
        tabelas[2].classList.remove("result");
        tabelas[3].classList.remove("result");
        tabelas[4].classList.remove("result");
        grauDopeso.innerHTML = "PESO NORMAL";
    } else if (result >= 25 && result < 30) {
        tabelas[2].classList.add("result");
        tabelas[2].style.animation = 'reveal 1s';
        tabelas[0].classList.remove("result");
        tabelas[1].classList.remove("result");
        tabelas[3].classList.remove("result");
        tabelas[4].classList.remove("result");
        grauDopeso.innerHTML = "SOBREPESO";
    } else if (result >= 30 && result < 40) {
        tabelas[3].classList.add("result");
        tabelas[3].style.animation = 'reveal 1s';
        tabelas[0].classList.remove("result");
        tabelas[1].classList.remove("result");
        tabelas[2].classList.remove("result");
        tabelas[4].classList.remove("result");
        grauDopeso.innerHTML = "OBESIDADE";
    } else if (result > 40) {
        tabelas[4].classList.add("result");
        tabelas[4].style.animation = 'reveal 1s';
        tabelas[0].classList.remove("result");
        tabelas[1].classList.remove("result");
        tabelas[2].classList.remove("result");
        tabelas[3].classList.remove("result");
        grauDopeso.innerHTML = "OBESIDADE GRAVE";
    }
    let PesoIdeal;
    PesoIdeal = document.getElementById("js-peso__ideal");
    if (sexm.checked == true) {
        let calc1 = parseFloat(alturaEl * alturaEl).toFixed(2);
        let calc2 = parseFloat(22.5 * calc1).toFixed(2);
        let imcGenero = document.getElementById('js-genero')
        imcGenero.innerHTML = 'MASCULINO'
        PesoIdeal.innerHTML = calc2 + ' kg';
    } else if (sexf.checked == true) {
        let calc1 = parseFloat(alturaEl * alturaEl).toFixed(2);
        let calc2 = parseFloat(21 * calc1).toFixed(2);
        let imcGenero = document.getElementById('js-genero')
        imcGenero.innerHTML = 'FEMININO'
        PesoIdeal.innerHTML = calc2 + ' kg';
    }

    btnApagar.addEventListener('click', () => {
        sexm.checked = false;
        sexf.checked = false;
        altura.value = '';
        peso.value = '';
    })
})

btnAviso.addEventListener("click", () => {
    divAviso.classList.remove("active");
});
