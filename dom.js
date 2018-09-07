function addListItem() {
    let list = document.getElementById('grocery-list');
    let item = document.createElement('li');
    item.innerText = "Milk and bread";
    list.appendChild(item);
}

$('#button-id').click(function() {
    let item = '<li class="red">Apples and oranges</li>';
    $('#grocery-list').append(item);
});

$('#style-me').click(function() {
    $('.red').css({
        'color': 'red',
    })
});

$(document).ready(function() {
    $('<div></div>').css({
        'background-color': 'red',
        'height': '100px',
        'width': "100px"
    }).insertAfter('#grocery-list');
});


 
// $('body').append('ul');
// $('ul').append('li');
// $('ul').append('li');

// $('li').css('color', 'blue');

// $(document).ready(function() {
//     $('body').append('div');
//     $('div').css({
//         "background-color": "black",
//         "width": "5em",
//         "height": "5em",
//         "margin": "1em"
//     })

// })