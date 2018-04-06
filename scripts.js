
var buttonAdd = document.getElementById('add');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var elementLi = document.createElement('li'),
        numberElements = document.getElementsByTagName('li'); 
    
    elementLi.innerHTML = 'item ' + numberElements.length;
    
    console.log(numberElements);
          
    list.appendChild(elementLi);
});
