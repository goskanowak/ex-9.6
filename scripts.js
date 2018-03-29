
var button = document.getElementById('add');
var list = document.getElementById('list');

add.addEventListener('click', function() {
    var element = document.createElement('li');
    element.innerHTML = 'item';
    
    // lenght
    // getElementsByTagName oraz właściwości length, aby dowiedzieć się, ile elementów ma lista ma w danym momencie.



    var number = document.getElementsByTagName('list');
    
    list.appendChild(element);
    }
);



