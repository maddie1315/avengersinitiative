// https://stackoverflow.com/questions/42180103/how-do-i-make-a-simple-password-page

function checkPswd() {
        var confirmPassword = "assemble";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="index.html";
        }
        else{
            alert("Incorrect Password");
        }
    }
