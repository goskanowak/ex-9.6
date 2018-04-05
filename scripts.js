
var button = document.getElementById('add');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var element = document.createElement('li'),
        elementsLength = document.getElementsByTagName('li'); 
    
    element.innerHTML = 'item ' + elementsLength.length;
    
    console.log(elementsLength);
          
    list.appendChild(element);
});
