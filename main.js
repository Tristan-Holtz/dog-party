var h1 = document.querySelector("#name_to_change");
var button = document.querySelector("#name_button");

button.addEventListener('click', function() {
  var dogName = document.querySelector("#new_name").value;
  h1.innertext = dogName;
});
