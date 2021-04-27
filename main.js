// const baseURL = 'https://ci-swapi.herokuapp.com/api/';  // remove this line

function getData(url, cb){   // change type to url
    var xhr = new XMLHttpRequest();

    xhr.open('GET', url);  // change baseURL to url and remove: + type + '/'
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

function generatePaginationButtons(next, prev){
    if (next && prev){           
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev){
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (!next && prev){
        return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
}

function writeToDocument(url){  // change type to url
    var tableRows = [];
    var el = document.getElementById('data');  

    getData(url, function(data){  // change type to url
        var pagination;
        if (data.next || data.previous){
            pagination = generatePaginationButtons(data.next, data.previous)
        }
        data = data.results;
        var tableHeaders = getTableHeaders(data[0]);

        data.forEach(function(item){  // A For Loop
            var dataRow = [];

            Object.keys(item).forEach(function(key){
                var rowData = item[key].toString();  
                var truncatedData = rowData.substring(0, 15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);  
        });
        
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`;

    });
}

/*

*/

/*

*/

/*

*/

/*

*/

/* 

*/