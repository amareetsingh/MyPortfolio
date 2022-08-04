const typing= document.querySelector(".typing");
var typed = new Typed(typing,{
    strings:["","Web Designer","Web Developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
});


// nav toggle 

const NavToggle = document.querySelector(".nav-toggler");
const Aside = document.querySelector(".aside");



NavToggle.addEventListener("click", ()=>{
asideSectionTogglerBtn();
});

function asideSectionTogglerBtn(){
    Aside.classList.toggle("open");
    NavToggle.classList.toggle("open");

}


function sendEmail(){
    Email.send({
        Host : "smtp.gmail.com",
        Username : "amarjeetsingh94620@gmail.com",
        Password : "I@Coder#",
        To : 'amarjeetsingh637757@gmail.com',
        From : document.getElementById("email").value,
        Subject :document.getElementById("subject").value,
        Body : `Name: ${document.getElementById("Name").value}
         <br> Email: ${document.getElementById("email").value}
         <br> Massage ${document.getElementById("Massage").value}`
    }).then(
      message => alert("Massage send Succesfully")
    );
}