function ShowTableFromArray(dataToShow,insertTableBefore){
    var table = document.createElement("table");
    for(var i = 0; i < dataToShow.length; i++) {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(dataToShow[i]));
        tr.appendChild(td);
        table.appendChild(tr);
    }
    document.body.insertBefore(table,document.getElementById(insertTableBefore))
}

function ShowTableFromObject(dataToShow,insertTableBefore){
    var table = document.createElement("table");
    table.border = 1;
    Object.entries(dataToShow).forEach(
    ([key, value]) => {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        var td2 = document.createElement("td");
        td.appendChild(document.createTextNode(value));
        td2.appendChild(document.createTextNode(key));
        tr.appendChild(td2);
        tr.appendChild(td);
        table.appendChild(tr);
    });
    document.body.insertBefore(table,document.getElementById(insertTableBefore))
}
