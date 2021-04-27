const baseURL = 'https://ci-swapi.herokuapp.com/api/';

function getData(type, cb){   // cb stands for 'call back'
    var xhr = new XMLHttpRequest();

    xhr.open('GET', baseURL + type + '/');
    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        cb(JSON.parse(this.responseText));  // So what this basically means is that when our script gets to this point, it's going to run the function that we passed in to getData as an argument.
        }
    };
}

    /*    function writeToDocument(type){
            getData(type, function(data){
                // console.dir(data);  // Print the contents of the object to a directory within the console window    
                data = data.results;

                data.forEach(function(item){  // A For Loop
                    // document.getElementById('data').innerHTML = item.name;  // Now that we have this unpacked into JSON format, we can just do "item.name".
                                                                            // = will over-write the previous data, I need to do a "+=".
                    document.getElementById('data').innerHTML += '<p>' + item.name + '</p>';  // But this list contents of each button in one long list
                })
                
            });
        }
    */

function writeToDocument(type){
    var el = document.getElementById('data');  // el short for element but cant use element as a variable name as it is a reserved word.
    el.innerHTML = '';
    getData(type, function(data){  
        data = data.results;

        data.forEach(function(item){  // A For Loop
            el.innerHTML += '<p>' + item.name + '</p>';
        })
        
    });
}