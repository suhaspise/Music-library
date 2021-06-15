function validate()
{
    var usrname = document.getElementById("username").value;
    var password = document.getElementById("password").value;
if (usrname == "admin" && password == "pass123")
{
    return true
}
else{
    document.write("Login Fail!")
    document.write("<a  href='login.html'> try again</a>")
}
}