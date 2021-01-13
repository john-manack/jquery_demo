'use strict';

// Plain JS version
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Ready');
    const button = document.querySelector("#button");
    button.addEventListener('click', event => {
        // if the button were 'submit', it would re-load the page by default.
        // we want to prevent the re-loading of the page, so we include the line of code below. We included just for example purposes (we don't really need it).
        event.preventDefault();
        alert('CLICKED!!!!')
    })
});

// jQuery Version
$(document).ready(function(){
    console.log("jQuery DOM Ready")
    $('#button2').click(event => {
        event.preventDefault();
        alert('BUTTON 2 CLICKED!!!1!!')
    })
});