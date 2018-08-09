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
    table.id = "objecttable"
    table.border = 1;
    Object.entries(dataToShow).forEach(
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
    document.body.insertBefore(table,document.getElementById(insertTableBefore))
}

function ShowTableFromArrayOfObjects(dataToShow,insertTableBefore){
    var table = document.createElement("table");
    table.id = "movestable"
    table.border = 1;
    var htr = document.createElement("tr");
    
    Object.entries(dataToShow[0]).forEach(([key, value]) => {
        var bold = document.createElement("b");
        bold.appendChild(document.createTextNode(key));
        var anothertd = document.createElement("td");
        anothertd.appendChild(bold);
        htr.appendChild(anothertd);
    });
   
    table.appendChild(htr)
    for(var i = 0; i < dataToShow.length; i++) {
        var tr = document.createElement("tr");
        Object.entries(dataToShow[i]).forEach(([key, value]) => {        
                var td = document.createElement("td");
                td.appendChild(document.createTextNode(value));
                tr.appendChild(td);
        });
        table.appendChild(tr);
    }
    document.body.insertBefore(table,document.getElementById(insertTableBefore))
}

function GiveItemIfDontHave(item){
    if(!moveset.find(mov=>mov.movename==item.movename)){
        moveset.push(item)
        var elem = document.getElementById("movestable");
        elem.parentNode.removeChild(elem);
        ShowTableFromArrayOfObjects(moveset,"spacer1")
    }else{
        alert("you already got your move!");
    }
}

var moveset = [ {movename:"surestrike", damage:8}, {movename:"lightstrike", damage:4} ]
var equipped = {weapon:"sword of ages", armor:"blessed breastplate", health:100}
// ShowTableFromArray(["hi","I like", "food","lots"],"simpletable")
ShowTableFromObject(equipped,"spacer2")
ShowTableFromArrayOfObjects(moveset,"spacer1")
document.getElementById("wandbut").onclick = function(){ 
    GiveItemIfDontHave({movename:"newmove",damage:"300"})
}
