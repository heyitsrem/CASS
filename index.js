function myFunction() {
    var x = document.getElementById("id_password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
function changeIcon() {
  var x = document.getElementById("myDIV");
  if (x.innerHTML === "<i class=\"fa-solid fa-eye\" style=\"cursor: pointer; margin-left: 390px; margin-top: -20px;\" onclick=\"myFunction()\"></i>") {
    x.innerHTML = "<i class=\"fa-solid fa-eye-slash\" style=\"cursor: pointer; margin-left: 390px; margin-top: -20px;\" onclick=\"myFunction()\"></i>";
  } else {
    x.innerHTML = "<i class=\"fa-solid fa-eye\" style=\"cursor: pointer; margin-left: 390px; margin-top: -20px;\" onclick=\"myFunction()\"></i>";
  }
}