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

function writeToDocument(type){
    getData(type, function(data){
        document.getElementById('data').innerHTML = data;
    });
}