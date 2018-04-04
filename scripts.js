
var button = document.getElementById('add');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var element = document.createElement('li');
        
    element.innerHTML = 'item';
    
      var elementLength = document.getElementsByTagName('li');
        elementLength.length;
        console.log(elementLength);
          
    list.appendChild(element);
    }
);
