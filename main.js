var h1 = document.querySelector("#name_to_change");
var button = document.querySelector("#name_button");

button.addEventListener('click', function() {
  var dogName = document.querySelector("#new_name").value;
  h1.innerText = dogName;
});

var how = document.querySelector('#how_button');
var what = document.querySelector('#what_button');
var facts = document.querySelector('#facts_button');
var p1 = document.querySelector('#p1');
var p2 = document.querySelector('#p2');
var p3 = document.querySelector('#p3');

function hideP1() {
  p1.classList.toggle('hidden');
}

function hideP2() {
  p2.classList.toggle('hidden');
}

function hideP3() {
  p3.classList.toggle('hidden');
}

how.addEventListener('click', hideP1);

what.addEventListener('click', hideP2);

facts.addEventListener('click', hideP3);
