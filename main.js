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
    if (this.readyState == 4 && this.status == 200){
       setData(JSON.parse(this.responseText));
    }
};