document.getElementById("clear").addEventListener("click", function () {
  document.getElementById("mail").value = "";
  document.getElementById("pass").value = "";
});
document.getElementById("submit").addEventListener("click", function () {
  if (document.getElementById("mail").value == "") {
    alert("Please enter your email");
  } else if (
    document.getElementById("mail").value.includes("@gmail.com") == false
  ) {
    alert("Please enter a valid email");
  } else if (document.getElementById("pass").value == "") {
    alert("Please enter your password");
  } 
  else {
    if (document.getElementById("mail").value == "sayemazizchy@gmail.com" && document.getElementById("pass").value == "09876") {
        window.location.href = "balance.html";
        alert("Log in seccessful");
    } 
    else alert("Login Failed");
  }
});
