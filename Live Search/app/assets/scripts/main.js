function loadAJAX() {
    // declare request, with fallback for IE xml
    const request = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');
    const async = true;
    const method = 'GET';
    const data = 'data.json'; // or data.xml

    //create request  with GET method, data.txt file source, and async true (false is generally bad idea)
    request.open(method, data, async);

    request.onreadystatechange = function () {
        if (request.status === 200 && request.readyState === 4) {

            console.log(request);
            let items = JSON.parse(request.responseText);
            console.log(items);

            var output = '<ul>';

            for (var key in items) {
                if (items.hasOwnProperty(key)) {
                    output += '<li>' + items[key].name + '</li>';
                }
            }
            output += '</ul>';

            // var list = document.getElementsByTagName('li');
            // for (var index = 0; index < list.length; index++) {
            //     list[index].innerHTML = request.responseText;        
            // }
            document.getElementById('par').innerHTML = output;

        }
    }
    request.send();
}

$('#load').on('click', function (e) { 
    console.log(e);
    loadAJAX();
 })