function terimainput(){
var x=document.forms['biodata']['npm'].value;
var y=document.forms['biodata']['nama'].value;
var z=document.forms['biodata']['tgllahir'].value;
 
if(x==null || x=="")
{
  document.getElementById("val_npm").innerHTML="<font color='red'><b>* Harap Isi Kolom NPM Dengan Benar</b></font>";

  if(y==null || y=="") {
  document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";   
  } else {
  document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";
  }
} else {
 
document.getElementById("val_npm").innerHTML="<font color='purple'>* Benar</font>";

if(y==null || y=="") {
  document.getElementById("val_nama").innerHTML="<font color='red'><b>* Harap Isi Kolom NAMA Dengan Benar</b></font>";   
  } else {
 
    document.getElementById("val_nama").innerHTML="<font color='purple'>* Benar</font>";

    var tabel = document.getElementById("tabelinput");
    var row = tabel.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    cell1.innerHTML = x;
    cell2.innerHTML = y;
    cell3.innerHTML = z;
  }
}
}