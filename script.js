
function listAllItems(){  
    for (i=0; i<=localStorage.length-1; i++)  
    {  
        key = localStorage.key(i);  
       array[i]= (localStorage.getItem(key));

         alert(localStorage.getItem(key));
    }  
}
var array= [];
function test()
{
var abc = document.getElementById("inp").value;

if (abc == "ajax" || abc == "Ajax" || abc == "AJAX")     
 {
document.getElementById("myTextarea").innerHTML = localStorage.getItem("AJAX");
}

else if (abc == "json" || abc == "Json" || abc == "JSON")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("JSON");
}

else if (abc == "API" || abc =="Api" || abc =="api")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("API");
}else if (abc == "BDD" || abc == "Bdd" || abc =="bdd")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("BDD");
}

else if (abc == "MEAN" || abc =="Mean" || abc =="mean")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("MEAN");
}

else if (abc == "TDD" || abc =="Tdd" || abc =="tdd")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("TDD");
}

else if (abc == "VCS" || abc =="Vcs" || abc =="vcs")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("VCS");

}else if (abc == "XHR" || abc =="Xhr" || abc =="xhr")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("XHR");

}else if (abc == "XML" || abc =="XML" || abc =="xml")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("XML");
}
else if (abc == "")
{
document.getElementById("myTextarea").innerHTML = "Please enter a word first! ";}
else
{
document.getElementById("myTextarea").innerHTML = "This Word is not available in the dictionary";
   document.getElementById('inp').value = "";

}
}