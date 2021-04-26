var xhr = new XMLHttpRequest();
var data;

xhr.open('GET', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

function setData(jsonData){
    data = jsonData;
    // console.log(data);  
    // this doesn't solve the problem, now all the code for the site needs to be enclosed in this "setData" function instead of the "onreadystatechange" function
}

xhr.onreadystatechange = function(){
    console.log(this.readyState);
    if (this.readyState == 4 && this.status == 200){
       setData(JSON.parse(this.responseText));
    }
};

setTimeout(function(){  // The setTimeout function takes two parameters i.e. in this case a function with a console log and a timeout of 500ms
    console.log(data);  // this give the object data time to be loaded before console.log(data); is run, otherwise it may return nothing if the object data hasn't yet loaded.
}, 500);