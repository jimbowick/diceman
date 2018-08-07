function ShowTable(dataToShow,insertTableBefore){
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
