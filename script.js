const instance = new  TypeIt('#element', {
    })
    .type('Software Developre')
    .pause(500)
    .delete(1)
    .pause(300)
    .delete(1)
    .pause(500)
    .type('e')
    .pause(100)
    .type('r')
    .go();

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