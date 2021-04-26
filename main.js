var xhr = new XMLHttpRequest();

xhr.open('GET', 'https://ci-swapi.herokuapp.com/api/');
xhr.send();

xhr.onreadystatechange = function(){
    if (this.readyState == 4 && this.status == 200){
       // document.getElementById('data').innerHTML = this.responseText;  
       // This is the incorrect way to do this as CI API is a "string" formatted to look like a Json Object but it is NOT Json!

       // console.log(typeof(JSON.parse(this.responseText))); 
       // This will dispaly the Type Of Data in the Console window in Dev Tools - Now the type will return: Object

       console.log(JSON.parse(this.responseText));
       // This will display the details of the "Object" in the Console window in Dev Tools.
    }
};