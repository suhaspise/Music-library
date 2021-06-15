   // SELECTING ALL TEXT ELEMENTS
   var username = document.forms['vform']['username'];
   var email = document.forms['vform']['email'];
   var password = document.forms['vform']['password'];
   var password_confirm = document.forms['vform']['password_confirm'];
   // SELECTING ALL ERROR DISPLAY ELEMENTS
   var name_error = document.getElementById('name_error');
   var email_error = document.getElementById('email_error');
   var password_error = document.getElementById('password_error');
   // SETTING ALL EVENT LISTENERS
   username.addEventListener('blur', nameVerify, true);
   email.addEventListener('blur', emailVerify, true);
   password.addEventListener('blur', passwordVerify, true);

   // validation function
   function Validate() {
     // validate username
     if (username.value == "") {
       username.style.border = "1px solid red";
       document.getElementById('username_div').style.color = "red";
       name_error.textContent = "Username is required";
       username.focus();
       return false;
     }
     // validate username
     if (username.value.length < 3) {
       username.style.border = "1px solid red";
       document.getElementById('username_div').style.color = "red";
       name_error.textContent = "Username must be at least 3 characters";
       username.focus();
       return false;
     }
     // validate email
     if (email.value == "") {
       email.style.border = "1px solid red";
       document.getElementById('email_div').style.color = "red";
       email_error.textContent = "Email is required";
       email.focus();
       return false;
     }

     // validate password
     if (password.value == "") {
       password.style.border = "1px solid red";
       document.getElementById("password_div").style.color = "red"
       document.getElementById('pass_confirm_div').style.color = "red";
       password_confirm.style.border = "1px solid red";
       password_error.textContent = "Password is required";
       password.focus();
       return false;
     }
     // validate password length
     if (password.value.length <8) {
        password.style.border = "1px solid red";
        document.getElementById('pass_confirm_div').style.color = "red";
        password_confirm.style.border = "1px solid red";
        password_error.innerHTML = "At list 8 value required";
        return false;
      }
     // check if the two passwords match
     if (password.value != password_confirm.value) {
       password.style.border = "1px solid red";
       document.getElementById('pass_confirm_div').style.color = "red";
       password_confirm.style.border = "1px solid red";
       password_error.innerHTML = "The two passwords do not match";
       return false;
     }
     // check Terms & Privacy
     if (document.getElementById("check").checked == false){
       document.getElementById("checkbox_error").innerHTML = "Please accept Terms & Privacy";
       return false;
     }
    }
    
   // event handler functions
   function nameVerify() {
     if (username.value != "") {
      username.style.border = "1px solid #5e6e66";
      document.getElementById('username_div').style.color = "#5e6e66";
      name_error.innerHTML = "";
      return true;
     }
   }
   function emailVerify() {
     if (email.value != "") {
         email.style.border = "1px solid #5e6e66";
         document.getElementById('email_div').style.color = "#5e6e66";
         email_error.innerHTML = "";
         return true;
     }
   }
   function passwordVerify() {
     if (password.value != "") {
         password.style.border = "1px solid #5e6e66";
         document.getElementById('pass_confirm_div').style.color = "#5e6e66";
         document.getElementById('password_div').style.color = "#5e6e66";
         password_error.innerHTML = "";
         return true;
     }
     if (password.value === password_confirm.value) {
         password.style.border = "1px solid #5e6e66";
         document.getElementById('pass_confirm_div').style.color = "#5e6e66";
         password_error.innerHTML = "";
         return true;
     }
   }

   // show password
function showPasswd() {
  var x = document.getElementById("psw");
  var y = document.getElementById("psw-repeat")
  if (x.type === "password" || y.type === "password") {
    x.type = "text";
    y.type = "text";
  } else {
    x.type = "password";
    y.type = "password";
  }
}


