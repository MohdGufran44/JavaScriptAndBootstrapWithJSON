var key;
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function(){
    if(this.readyState==4 && this.status==200){
        empObje = JSON.parse(this.responseText);
        key=Object.keys(empObje.employees[0]);
        var keyLength=key.length,x=0,v=0;
        for(var i=0;i<empObje.employees.length;i++){
            var tempTr=document.createElement("tr");
            tempTr.setAttribute('id','row'+i);
            var tempValues=Object.values(empObje.employees[v++]);

            var tempTr1=document.createElement("tr");
            tempTr1.setAttribute('id','ro'+i);
            for(var j=0;j<keyLength;j++){
                if(i==0){
                    var tempTh=document.createElement("th");
                    tempTh.setAttribute('id','th'+x++);
                    var thText = document.createTextNode(key[j]);
                    tempTh.appendChild(thText);
                    tempTr.appendChild(tempTh);
                    document.getElementById("th").appendChild(tempTr);

                    tempTr1.setAttribute('onclick','myFun(this)');
                    var tempTd=document.createElement("td");
                    tempTd.setAttribute('id','td'+x++);
                    var tdText = document.createTextNode(tempValues[j]);
                    tempTd.appendChild(tdText);
                    tempTr1.appendChild(tempTd);
                    document.getElementById("tb").appendChild(tempTr1);
                }
                else{
                    tempTr.setAttribute('onclick','myFun(this)');
                    var tempTd=document.createElement("td");
                    tempTd.setAttribute('id','td'+x++);
                    var tdText = document.createTextNode(tempValues[j]);
                    tempTd.appendChild(tdText);
                    tempTr.appendChild(tempTd);
                    document.getElementById("tb").appendChild(tempTr);
                }
            }
        }
    }
}
xmlhttp.open("GET", "employees.json",true);
xmlhttp.send();
//console.log(document.getElementById("div"));

function myFun(id){
    var tab = document.getElementById("et");
    var numRows = tab.rows.length;
    var cells = tab.rows[id.rowIndex].getElementsByTagName('td');
    var it=cells.length
    var empDetails="";
    for (var ic=0;ic<it;ic++) {
            empDetails=empDetails+' '+key[ic]+":      "+cells[ic].innerHTML+'<br>';
    }
    document.getElementById("rdiv").innerHTML=empDetails;
}
