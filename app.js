document.addEventListener("DOMContentLoaded", function() {
  var ol = document.querySelector("ol");

  for (var i = 1; i < 6; i++) {
    var li = document.createElement("li");
    li.innerText = "This is list item number " + i + ".";
    ol.appendChild(li);
  }
});
