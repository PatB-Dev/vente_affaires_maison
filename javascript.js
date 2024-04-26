var ulList = document.getElementById('list');

var li = document.createElement('li');
var text = document.createElement('p');
var image1 = document.createElement('img');
var prix1 = document.createElement('b');
image1.src = "img/telescope.jpg";
image1.style.width = '500px'
prix1.innerText = '(10€)'
text.textContent = "Telescope + kit ";
ulList.appendChild(li);
li.appendChild(text);
text.appendChild(prix1);
li.appendChild(image1);

var li = document.createElement('li');
var text = document.createElement('p');
var image1 = document.createElement('img');
var prix1 = document.createElement('b');
image1.src = "img/kit_ciseaux.jpg";
image1.style.width = '300px'
prix1.innerText = '150€'
text.textContent = "Kit ciseaux Exthand ";
ulList.appendChild(li);
li.appendChild(text);
text.appendChild(prix1);
li.appendChild(image1);
