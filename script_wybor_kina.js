
alert('tak sprawdzam czy działa js :)')

//wybor kina radio


var mydb;

function loadJSON(callback) {
  var xobj = new XMLHttpRequest();
  xobj.open('GET', 'https://api.myjson.com/bins/1c49y2', true);
  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == "200") {
      callback(xobj.responseText);
    }
  };
  xobj.send(null);
}

loadJSON(function(response) {
  mydb = JSON.parse(response);
});

function callInfo() {
  var citys = document.getElementsByName('City');
  var select;

  for(var i=0; i<citys.length; i++) 
    if(citys[i].checked){
      select = citys[i].value;
      break;
    }

  for(var i=0; i<mydb.City.length; i++) {
    if(mydb.City[i].miasto == select) {
      select = i;
      break;
    }
  }
      
  var miasto = mydb.City[select].miasto;
  var movies = mydb.City[select].movies;

  document.getElementById('miasto').textContent = miasto;
  document.getElementById('movies').textContent = movies;
}

function setOptions() {
  var container = document.getElementById('choices'),
      base = document.createElement('input'),
      div = document.createElement('div'),
      label = document.createElement('label');
  base.type = 'radio';
  base.name = 'City';
  div.className = 'radio-choice';
  
  console.log(mydb.City.length);
  
  for(var i=0; i<mydb.City.length; i++) {
    var miastoAtual = mydb.City[i].miasto;
    
    base.value = miastoAtual;
    base.id = miastoAtual;
    label.htmlFor = miastoAtual;
    label.innerHTML = '<span><span></span></span>' +miastoAtual;
    
    div.appendChild(base);
    div.appendChild(label);
    
    container.appendChild(div.cloneNode(true));
  }

}

window.onload = function() {
  setTimeout(
    loadJSON(function(response) {
      mydb = JSON.parse(response);
      setOptions();
  }), 1000);
  
}


//wybór filmy wg miast (rozwijane)

document.getElementById("wybor").addEventListener("change",function(){
  var selObj = document.getElementById("wybor");
  var selValue = selObj.options[selObj.selectedIndex].value;
  
  if (selValue == "poznan"){
  document.getElementById("kino_poznan").classList.remove("ukryj");
  document.getElementById("kino_szczecin").classList.add("ukryj");
  document.getElementById("kino_warszawa").classList.add("ukryj")}
	
  if (selValue == "szczecin"){
  document.getElementById("kino_poznan").classList.add("ukryj");
  document.getElementById("kino_warszawa").classList.add("ukryj");
  document.getElementById("kino_szczecin").classList.remove("ukryj")}

	if (selValue == "warszawa"){
   document.getElementById("kino_warszawa").classList.remove("ukryj");
   document.getElementById("kino_poznan").classList.add("ukryj");
   document.getElementById("kino_szczecin").classList.add("ukryj")}
})

