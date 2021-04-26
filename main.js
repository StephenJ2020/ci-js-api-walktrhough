function getData(cb){   // cb stands for 'call back'
    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://ci-swapi.herokuapp.com/api/');
    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        cb(JSON.parse(this.responseText));  // So what this basically means is that when our script gets to this point, it's going to run the function that we passed in to getData as an argument.
        }
    };
}

// Function
function printDataToConsole(data){
    console.log(data);
}

//  // Argument
//  getData(function(data){
//      console.log(data);
//  });

getData(printDataToConsole);

// So as you can see, callback functions are very useful.
// They get around the problem of having to use timeouts.
// They still allow us full control over our data because they're only invoked when we actually want them to be.

// So in this unit, we've looked at how to speak to our API using JavaScript.
// We've seen how to get our response text back as a string and how to turn it into JSON format.
// We've looked at different readyStates and HTTP status codes.
// And finally, we've seen how to use both timeouts and callback functions to get our data displaying when we want it to.
// Now that we know how to get the data and how to parse it, let's start doing something useful with it.
// We'll have a look at that in our next unit.