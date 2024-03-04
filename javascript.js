var test = document.getElementById('list');
console.log(test);

var li = document.createElement('li');
var text = document.createElement('p');
var image1 = document.createElement('img');
var prix1 = document.createElement('b');
image1.src = "img/Blender.jpg";
image1.style.width = '200px'
prix1.innerText = '(15€)'
li.textContent = "Article 1";
text.textContent = "Blender SylverCrest ";
test.appendChild(li);
test.appendChild(text);
text.appendChild(prix1);
test.appendChild(image1);

var li = document.createElement('li');
var text = document.createElement('p');
var image1 = document.createElement('img');
var prix1 = document.createElement('b');
image1.src = "img/Tableau.jpg";
image1.style.width = '200px'
prix1.innerText = '(Gratuit)'
li.textContent = "Article 2";
text.textContent = "Tableau blanc avec coté noir + 2 dictionnaires ";
test.appendChild(li);
test.appendChild(text);
text.appendChild(prix1);
test.appendChild(image1);