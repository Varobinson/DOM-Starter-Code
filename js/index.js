const myButton = document.getElementById('clickMe');

const name = document.getElementById('name');
const name1 = document.getElementById('name1');

const adj1 = document.getElementById('adj1');
const adjective1 = document.getElementById('adjective1');

const verb = document.getElementById('verb');
const verb1 = document.getElementById('verb1');

const place = document.getElementById('place');
const place1 = document.getElementById('place1');

const noun = document.getElementById('noun');
const noun1 = document.getElementById('noun1');

const adj2 = document.getElementById('adj2');
const noun2Input = document.getElementById('noun2Input');

myButton.addEventListener('click', function (event) {
  event.preventDefault();

  name.innerHTML = name1.value;

  adj1.innerHTML = adjective1.value;

  verb.innerHTML = verb1.value;

  place.innerHTML = place1.value;

  noun.innerHTML = noun1.value;

  adj2.innerHTML = adjective2.value;

});
