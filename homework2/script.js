
firstName = prompt("What is your name?").trim();
lastName = prompt("What is your last name?").trim();
fullName = `${firstName}  ${ lastName}`
email = prompt("Write e-mail");

if(email.indexOf(`@`) ==-1) {
    alert (`not valid email <b>${email}</b> (symbol @ not exist)`);
} else if (!email.indexOf(`@`)) {
    alert (`not valid email <b>${email}</b> (symbol @ find in first place)`);
} else if (email.indexOf(`@`) === email.length-1) {
    alert (`not valid email <b>${email}</b> (symbol @ find in last place)`);
} else {
    document.write (email)
}




yearBirth = (prompt("what is your birth date?"));
birthToNum = parseInt(yearBirth);
today = new Date();
todayYear = today.getFullYear();
age = todayYear - birthToNum;

document.write(`
<p>Info about me:</p>
<ul>
<li>Full name: ${fullName}</li>
<li>E-mail: ${email}</li>
<li>Age: ${age}</li>
</ul>`);


