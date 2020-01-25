// button variable declarations

const prjPrvw = document.getElementById('prjPrvw');
const prjXprvw = document.getElementById('prjXprvw');
const prjMr = document.getElementById('prjMr');
const prjXmr = document.getElementById('prjXmr');

const abtPrvw = document.getElementById('abtPrvw');
const abtXprvw = document.getElementById('abtXprvw');
const abtMr = document.getElementById('abtMr');
const abtXmr = document.getElementById('abtXmr');

const cntctPrvw = document.getElementById('cntctPrvw');
const cntctXprvw = document.getElementById('cntctXprvw');
const cntctMr = document.getElementById('cntctMr');
const cntctXmr = document.getElementById('cntctXmr');

prjPrvw.onclick = function() {
    //console.log('hello');
    prjPrvw.style.display = 'none';
    prjXprvw.style.display = 'initial';
    document.getElementById('prvwPrj').style.display = 'initial';
}

prjXprvw.onclick = function() {
    //console.log('hello');
    prjPrvw.style.display = 'initial';
    prjXprvw.style.display = 'none';
    document.getElementById('prvwPrj').style.display = 'none';
}

prjMr.onclick = function() {
    //console.log('hello');
    prjMr.style.display = 'none';
    prjXmr.style.display = 'initial';
    document.getElementById('mrPrj').style.display = 'initial';
    //height does not work??
    //document.getElementById('mrPrj').style.height = '100vh';
    //this did not work either
    document.getElementById('mrPrj').style.backgroundColor = 'green';
}

prjXmr.onclick = function() {
    prjMr.style.display = 'initial';
    prjXmr.style.display = 'none';
    document.getElementById('mrPrj').style.display = 'none';
}

abtPrvw.onclick = function() {
    //console.log('hello');
    abtPrvw.style.display = 'none';
    abtXprvw.style.display = 'initial';
    document.getElementById('prvwAbt').style.display = 'initial';
}

abtXprvw.onclick = function() {
    //console.log('hello');
    abtPrvw.style.display = 'initial';
    abtXprvw.style.display = 'none';
    document.getElementById('prvwAbt').style.display = 'none';
}

abtMr.onclick = function() {
    //console.log('hello');
    abtMr.style.display = 'none';
    abtXmr.style.display = 'initial';
    document.getElementById('mrAbt').style.display = 'initial';
}

abtXmr.onclick = function() {
    abtMr.style.display = 'initial';
    abtXmr.style.display = 'none';
    document.getElementById('mrAbt').style.display = 'none';
}

cntctPrvw.onclick = function() {
    //console.log('hello');
    cntctPrvw.style.display = 'none';
    cntctXprvw.style.display = 'initial';
    document.getElementById('prvwCntct').style.display = 'initial';
}

cntctXprvw.onclick = function() {
    //console.log('hello');
    cntctPrvw.style.display = 'initial';
    cntctXprvw.style.display = 'none';
    document.getElementById('prvwCntct').style.display = 'none';
}

cntctMr.onclick = function() {
    //console.log('hello');
    cntctMr.style.display = 'none';
    cntctXmr.style.display = 'initial';
    document.getElementById('mrCntct').style.display = 'initial';
}

cntctXmr.onclick = function() {
    cntctMr.style.display = 'initial';
    cntctXmr.style.display = 'none';
    document.getElementById('mrCntct').style.display = 'none';
}

// style sheet swap
function swapStyleSheet(sheet) {
    document.getElementById("pagestyle").setAttribute("href", sheet);  
}

function initateDark() {
    let style2 = document.getElementById("stylesheet2");
    style2.onclick = swapStyleSheet("main_dark.css");
}

function initateLight() {
    let style1 = document.getElementById("stylesheet1");
    style1.onclick = swapStyleSheet("main_light.css");
}