new TypeIt('#simpleUsage', {
    strings: 'This is a simple string.',
    speed: 50,
    waitUntilVisible: true
  }).go();

// document.getElementById('aPrj').style.display = 'none';
// document.getElementById('aAbt').style.display = 'none';
// document.getElementById('aCntct').style.display = 'none';

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
    document.getElementById('aPrj').style.display = 'initial';
}

prjX.onclick = function() {
    prjO.style.display = 'initial';
    prjX.style.display = 'none';
    document.getElementById('aPrj').style.display = 'none';
}

abtO.onclick = function() {
    //console.log('hello');
    abtO.style.display = 'none';
    abtX.style.display = 'initial';
    document.getElementById('aAbt').style.display = 'initial';
}

abtX.onclick = function() {
    abtO.style.display = 'initial';
    abtX.style.display = 'none';
    document.getElementById('aAbt').style.display = 'none';
}

cntctO.onclick = function() {
    //console.log('hello');
    cntctO.style.display = 'none';
    cntctX.style.display = 'initial';
    document.getElementById('aCntct').style.display = 'initial';
}

cntctX.onclick = function() {
    cntctO.style.display = 'initial';
    cntctX.style.display = 'none';
    document.getElementById('aCntct').style.display = 'none';
}

// style sheet swap
const light = document.getElementById('lightsheet');
const dark = document.getElementById('darksheet');


// form
const form = document.querySelector('.signup-form');
const username = document.getElementById('username');
const useremail = document.getElementById('useremail');
const message = document.getElementById('message');
const usernames = ['Annika','Rita'];

form.onsubmit = function(e) {
    e.preventDefault();
    // the console log is just for me to test it understands
    console.log(username.value);
    usernames.push(username.value);
    if(message.value === ""){
        document.getElementById('personalisedText').innerHTML = `Hello ${username.value}. Thank you for your interest. I will get back to you at the email address you provided above (${useremail.value}). You did not submit a personal message.`;
        document.getElementById('personalisedText').style.padding = '10px';
    } else {
        document.getElementById('personalisedText').innerHTML = `Hello ${username.value}. Thank you for your interest. I will get back to you at the email address you provided above (${useremail.value}). The message you submitted was: "${message.value}"`;
        document.getElementById('personalisedText').style.padding = '10px';
    }
}



// light.onclick = function() {
//     document.getElementById('pagestyle').setAttribute('href','main_light.css');
// }

// dark.onclick = function() {
//     document.getElementById('pagestyle').setAttribute('href','main_dark.css');
// }