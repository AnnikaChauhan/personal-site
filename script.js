// document.getElementById('mrPrj').style.display = 'none';

// button variable declarations

const prjO = document.getElementById('prjO');
const prjX = document.getElementById('prjX');

const abtO = document.getElementById('abtO');
const abtX = document.getElementById('abtX');

const cntctO = document.getElementById('cntctO');
const cntctX = document.getElementById('cntctX');

prjO.onclick = function() {
    //console.log('hello');
    prjO.style.display = 'none';
    prjX.style.display = 'initial';
    document.getElementById('mrPrj').style.display = 'initial';
}

prjX.onclick = function() {
    prjO.style.display = 'initial';
    prjX.style.display = 'none';
    document.getElementById('mrPrj').style.display = 'none';
}

abtO.onclick = function() {
    //console.log('hello');
    abtO.style.display = 'none';
    abtX.style.display = 'initial';
    document.getElementById('mrAbt').style.display = 'initial';
}

abtX.onclick = function() {
    abtO.style.display = 'initial';
    abtX.style.display = 'none';
    document.getElementById('mrAbt').style.display = 'none';
}

cntctO.onclick = function() {
    //console.log('hello');
    cntctO.style.display = 'none';
    cntctX.style.display = 'initial';
    document.getElementById('mrCntct').style.display = 'initial';
}

cntctX.onclick = function() {
    cntctO.style.display = 'initial';
    cntctX.style.display = 'none';
    document.getElementById('mrCntct').style.display = 'none';
}

// style sheet swap
const light = document.getElementById('lightsheet');
const dark = document.getElementById('darksheet');

light.onclick = function() {
    document.getElementById('pagestyle').setAttribute('href','main_light.css');
}

dark.onclick = function() {
    document.getElementById('pagestyle').setAttribute('href','main_dark.css');
}