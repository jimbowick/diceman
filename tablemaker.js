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
        td.appendChild(document.createTextNode(value));
        td2.appendChild(document.createTextNode(key));
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
        var bold = document.createElement("strong");
        var td = document.createElement("td");
        td.appendChild(document.createTextNode(key));
        bold.appendChild(td)
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
var player = {health:"40", attack:"3", moveset:[{movename: "surestrike",dmg:"8"},{movename:"lightstrike",dmg:"4"}]}
    var equipped = {weapon:"sword of ages", armor:"blessed breastplate"}
    ShowTableFromArray(["hi","I like", "food","lots"],"simpletable")
    ShowTableFromObject(equipped,"simpletable")
    ShowTableFromArrayOfObjects(player.moveset,"spacer")
    document.getElementById("wandbut").onclick = function(){ 
        if( !player.moveset.find(mov=>mov.movename=="newmove") ){
            player.moveset.push({movename:"newmove",dmg:"300"})
            var elem = document.getElementById("movestable");
            elem.parentNode.removeChild(elem);
            ShowTableFromArrayOfObjects(player.moveset,"spacer")
        }else{
            document.getElementById("wandbut").innerHTML = "you already got your move!"
        }
     }