function inquiryFunction() {
    let usersName = document.getElementById("fname").value;
    let reply = document.getElementById("reply");

    if (usersName !="") {
        reply.innerHTML = `Hi ${usersName}! My name is Grace, a multidisciplinary artist who likes to break rules time to time. Sorry my site's not ready yet but I'm open to connect! Reach out to me at hello@123.com & we'll go from there. Thanks!` ;
    }
    else
        {
            reply.innerHTML= `<img src= 'spongebob.gif' alt = 'What is yo name son?'>`;
        }
}
