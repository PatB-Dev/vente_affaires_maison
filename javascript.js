var test = document.getElementById('list');
console.log(test);

var li = document.createElement('li');
var text = document.createElement('p');
var image1 = document.createElement('img');
image1.src = "img/lapin.jpeg"
li.textContent = "Article 1";
text.textContent = "Description 1";
test.appendChild(li);
test.appendChild(text);
test.appendChild(image1);

var li = document.createElement('li');
var text = document.createElement('p');
li.textContent = "Article 2";
text.textContent = "Description 2";
test.appendChild(li);
test.appendChild(text);

var li = document.createElement('li');
var text = document.createElement('p');
li.textContent = "Article 3";
text.textContent = "Description 3";
test.appendChild(li);
test.appendChild(text);