document.addEventListener("DOMContentLoaded", function() {
  var ol = document.querySelector("ol");
  var stuff = ["apples", "bears", "catamarans", "discos", "emus", "fungi"]

  for (var i = 0; i < stuff.length; i++) {
    var li = document.createElement("li");
    li.innerText = stuff[i];
    ol.appendChild(li);
  }
});
