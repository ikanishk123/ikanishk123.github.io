const form = document.querySelector('form');

function sendEmail() {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "kanishklamba025@gmail.com",
        Password : "91FA6A536AB6203C560A820A85C87F751C75",
        To : 'kanishklamba025@gmail.com',
        From : "you@isp.com",
        Subject : "This is the subject",
        Body : "And this is the body"
    }).then(
      message => alert(message)
    );
}