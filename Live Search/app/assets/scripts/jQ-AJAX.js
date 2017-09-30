$('#search').on('keyup', function (param) { 
    $.getJSON('data.json', function (data) { 
        
        const searchField = $('#search').val();
        let ul = '<ul class="searchresults">';
        const myExp = new RegExp(searchField, 'i');
        // console.log(data);
        // console.log(searchField);

        $.each(data, function (key, val) { 
            if ((val.name.search(myExp) != -1) || (val.bio.search(myExp) != -1)) {
                ul +=   `<li> 
                    <h2>${val.name}</h2>
                    <img src="assets/images/${val.shortname}_tn.jpg" alt="${val.name}"/>
                    <p>${val.bio}</p>
                </li>`
            }
         });
        ul += '</ul>'; 
        $('#update').html(ul);
     });
 });