// $.get() and $.post are jQuery shortcuts for AJAX requests

// $.get(url, callback)
$.get('/todos', function(data) {
    console.log(data);
});


$('form').submit(function(e) {
    // preventing the default behaviour of the event
    e.preventDefault();
    
    var formData = $(this).serialize();
    // $.post(url, data)
    $.post('/todos',formData , function(data) {
    	
    });
});

$('form').submit(function(e) {
//     // preventing the default behaviour of the event
    e.preventDefault();
    
    var formData = $(this).serialize();
    var formAction = $(this).attr('action');	
    $.ajax({		
    	url: formAction,
    	type: 'PUT',
    	data: formData,
    	success: function (data) {
    		console.log(data);
    	}
    })
});


$('form').submit(function(e) {
    // preventing the default behaviour of the event
    e.preventDefault();
    
    var formAction = $(this).attr('action');	
    $.ajax({		
    	url: formAction,
    	type: 'DELETE',
    	success: function (data) {
    		console.log(data);
    	}
    })
});	