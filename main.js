const baseURL = 'https://ci-swapi.herokuapp.com/api/';

function getData(type, cb){   
    var xhr = new XMLHttpRequest();

    xhr.open('GET', baseURL + type + '/');
    xhr.send();

    xhr.onreadystatechange = function(){
        if (this.readyState == 4 && this.status == 200){
        cb(JSON.parse(this.responseText));  
        }
    };
}

function getTableHeaders(obj){
    var tableHeaders = [];

    Object.keys(obj).forEach(function(key){
        tableHeaders.push(`<td>${key}</td>`);  
    });

    return `<tr>${tableHeaders}</tr>`;
}

function writeToDocument(type){
    var tableRows = [];
    var el = document.getElementById('data');  
    el.innerHTML = '';

    getData(type, function(data){  
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){  // A For Loop
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();  // see text block 2 below, but code doesn't work for me when I run it: TypeError: rowData.subString is not a function
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);  // Added a template literal here with the hmtl code for a Table Row - see text block 1 below
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`;

    });
}

/*
Now that we have some data displayed, we can start cleaning it up.
First thing that we need to do is to have everything appearing on a separate row.
And I omitted to do that in the last video.
So let's just put in a <tr> opening and a </tr> closing tag there when we're pushing on to our tableRows array.
*/

/*
The other thing that we need to do to get it displaying nicely is to truncate, or shorten, the information that's been inserted into our <td> element.
It means that it'll take up less space on the screen, and we won't have to keep scrolling out to the side.
We're not too worried about presentation, but we really just want to learn how to display this JSON data.
So I've created a new variable called rowData, which is going to be set to the value of the key.
And we're going to make sure that that's a string.
Then I'm going to create a new variable called truncatedData, which is going to be equal to a substring of our rowData.
And we're just going to take from the 0 to the 15th character.
So that will just take the first 15 characters from our rowData.
And now I can update my template literal here to show truncated data instead of rowData.
*/

/*

*/

/*

*/

/* 

*/