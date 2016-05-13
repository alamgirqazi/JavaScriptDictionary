
function test()
{


var input = document.getElementById("inp").value;
var lowerinput= input.toLowerCase();
if (lowerinput == "ajax")
 {
document.getElementById("myTextarea").innerHTML = localStorage.getItem("AJAX");
}

else if (lowerinput == "json")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("JSON");
}

else if (lowerinput =="api")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("API");
}else if (lowerinput =="bdd")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("BDD");
}
else if (lowerinput == "earn")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("EARN");
}

else if (lowerinput =="mean")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("MEAN");
}

else if (lowerinput =="tdd")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("TDD");
}

else if (lowerinput =="vcs")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("VCS");

}else if (lowerinput =="xhr")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("XHR");

}else if (lowerinput =="xml")
{
document.getElementById("myTextarea").innerHTML = localStorage.getItem("XML");
}
else if (lowerinput == "")
{
document.getElementById("myTextarea").innerHTML = "Please enter a word first! ";}
else
{
document.getElementById("myTextarea").innerHTML = "This Word is not available in the dictionary";
   document.getElementById('inp').value = "";

}
}
