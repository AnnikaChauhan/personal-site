const instance = new  TypeIt('#element', {
    })
    .type('Software Developre')
    .pause(500)
    .delete(1)
    .pause(300)
    .delete(1)
    .pause(400)
    .type('e')
    .pause(100)
    .type('r')
    .go();

// form
const form = document.querySelector('.follow-up');
const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.onsubmit = (e) => {
    e.preventDefault();
    if(message.value === ""){
        document.getElementById('personalisedMessage').innerHTML = `Hello ${name.value}. Thank you for your interest. I will get back to you at the email address you provided above (${email.value}). You did not submit a personal message.`;
        document.getElementById('personalisedText').style.padding = '10px';
    } else {
        document.getElementById('personalisedMessage').innerHTML = `Hello ${name.value}. Thank you for your interest. I will get back to you at the email address you provided above (${email.value}). The message you submitted was: "${message.value}"`;
        document.getElementById('personalisedText').style.padding = '10px';
    }
}
