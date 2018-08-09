class tablemaker{
    
    constructor(moveset,equipped){}

    ShowTableFromArray(dataToShow,insertTableBefore){
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

    ShowTableFromObject(){
        var table = document.createElement("table");
        table.id = "objecttable"
        table.border = 1;
        Object.entries(equipped).forEach(
        ([key, value]) => {
            var tr = document.createElement("tr");
            var td = document.createElement("td");
            var td2 = document.createElement("td");
            var bold = document.createElement("b");
            td.appendChild(document.createTextNode(value));
            bold.appendChild(document.createTextNode(key));
            td2.appendChild(bold);
            tr.appendChild(td2);
            tr.appendChild(td);
            table.appendChild(tr);
        });
        document.body.insertBefore(table,document.getElementById("spacer2"))
    }

    ShowTableFromArrayOfObjects(){
        var table = document.createElement("table");
        table.id = "movestable"
        table.border = 1;
        var htr = document.createElement("tr");
        Object.entries(moveset[0]).forEach(([key, value]) => {
            var bold = document.createElement("b");
            bold.appendChild(document.createTextNode(key));
            var anothertd = document.createElement("td");
            anothertd.appendChild(bold);
            htr.appendChild(anothertd);
        });
        table.appendChild(htr)
        for(var i = 0; i < moveset.length; i++) {
            var tr = document.createElement("tr");
            Object.entries(moveset[i]).forEach(([key, value]) => {        
                    var td = document.createElement("td");
                    td.appendChild(document.createTextNode(value));
                    tr.appendChild(td);
            });
            table.appendChild(tr);
        }
        document.body.insertBefore(table,document.getElementById("spacer1"))
    }
}