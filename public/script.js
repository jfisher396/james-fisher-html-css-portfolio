

const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
});


//grabs the user inputs from the form and sends them to the email route
$("#form").on('submit', function(e){
    e.preventDefault();
        
    let newEmail = {
        name: $("#name").val().trim(),
        subject: $("#subject").val().trim(),
        company: $("#company").val().trim(),
        email: $("#email").val().trim(),
        message: $("#message").val().trim()
    }
    //renders an alert stating that email was sent successfully
    $.post("/contact", newEmail)
        .then(function(data){
            
            $("#name").val("")
            $("#subject").val("")
            $("#company").val("")
            $("#email").val("")
            $("#message").val("")

            if(data) {
                $("#email-alert").text("Email Sent Successfully").addClass("email-success").fadeOut(5000)
            } 
        })
        
});

