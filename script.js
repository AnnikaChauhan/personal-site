//use a seperate sheet for about page JS
// narative for the short descriptions on homepage - next stage will be for the descriptors to call from this NOT be hidden in the HTML
const descriptors = {
    experience: "",
    hobbies: "",
    projects: "",
    blog: "",
    about: ""
}

//test link - success
//console.log(descriptors.about);

const pExp = document.getElementById('p_exp');
const npExp = document.getElementById('np_exp');
const miExp = document.getElementById('mi_exp');

const pHob = document.getElementById('p_hob');
const npHob = document.getElementById('np_hob');
const miHob = document.getElementById('mi_hob');

const pPrj = document.getElementById('p_prj');
const npPrj = document.getElementById('np_prj');
const miPrj = document.getElementById('mi_prj');

const pBlg = document.getElementById('p_blg');
const npBlg = document.getElementById('np_blg');
const miBlg = document.getElementById('mi_blg');

const pAbt = document.getElementById('p_abt');
const npAbt = document.getElementById('np_abt');
const miAbt = document.getElementById('mi_abt');


//click events homepage
pExp.onclick = function() {
    //console.log('hello');
    pExp.style.display = 'none';
    npExp.style.display = 'initial';
    document.getElementById('narrativeExp').style.display = 'initial';
    document.getElementById('experience').style.height = 'auto';
}

npExp.onclick = function() {
    //console.log('hello');
    pExp.style.display = 'initial';
    npExp.style.display = 'none';
    document.getElementById('narrativeExp').style.display = 'none';
    document.getElementById('experience').style.height = '130px';
}

pHob.onclick = function() {
    pHob.style.display = 'none';
    npHob.style.display = 'initial';
    document.getElementById('narrativeHob').style.display = 'initial';
    document.getElementById('hobbies').style.height = 'auto';
}

npHob.onclick = function() {
    pHob.style.display = 'initial';
    npHob.style.display = 'none';
    document.getElementById('narrativeHob').style.display = 'none';
    document.getElementById('hobbies').style.height = '130px';
}

pPrj.onclick = function() {
    pPrj.style.display = 'none';
    npPrj.style.display = 'initial';
    document.getElementById('narrativePrj').style.display = 'initial';
    document.getElementById('projects').style.height = 'auto';
}

npPrj.onclick = function() {
    pPrj.style.display = 'initial';
    npPrj.style.display = 'none';
    document.getElementById('narrativePrj').style.display = 'none';
    document.getElementById('projects').style.height = '130px';
}

pBlg.onclick = function() {
    pBlg.style.display = 'none';
    npBlg.style.display = 'initial';
    document.getElementById('narrativeBlg').style.display = 'initial';
    document.getElementById('blog').style.height = 'auto';
}

npBlg.onclick = function() {
    pBlg.style.display = 'initial';
    npBlg.style.display = 'none';
    document.getElementById('narrativeBlg').style.display = 'none';
    document.getElementById('blog').style.height = '130px';
}

pAbt.onclick = function() {
    pAbt.style.display = 'none';
    npAbt.style.display = 'initial';
    document.getElementById('narrativeAbt').style.display = 'initial';
    document.getElementById('about').style.height = 'auto';
}

npAbt.onclick = function() {
    pAbt.style.display = 'initial';
    npAbt.style.display = 'none';
    document.getElementById('narrativeAbt').style.display = 'none';
    document.getElementById('about').style.height = '130px';
}