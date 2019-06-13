//podsumowanie adult children


function printPrice() {
	var movie = document.getElementById("movie").value;
	var name = document.getElementById("textbox").value;
	var Cquantity = document.getElementById("Cquantity").value * 1;
	var Aquantity = document.getElementById("Aquantity").value * 1;
	var total = 0;
	var sentence = "";
	var price = document.getElementById('Ctickets').value * Cquantity;

	sentence += name + "<br>Wybrano " + Cquantity + " ulgowy bilet(ów) na \"";
	sentence += movie + "\" za ";
	sentence += price + 'zł ';
	total += price;

	price = document.getElementById('Atickets').value * Aquantity;
	sentence += "<br>oraz " + Aquantity + " Normalny bilet(ów) na \"";
	sentence += movie + "\" za ";
	sentence += price + 'zł <br>';
	total += price;

	sentence += "<br>";
	sentence += 'Całkowity koszt: ' + total + 'zl';
	document.getElementById("inserts").innerHTML = sentence;
}


//wybór siedzeń

for (let j = 0 + 1; j < 10; j++) {
	let para_parent = document.createElement("div2");
	for (let i = 0 + 1; i < 10; i++) {
		let para = document.createElement("span");
		let node = document.createElement('img');
		node.width = 40;
		node.height = 40;
		node.src = "images/zielone.png"
		para.appendChild(node);
		para_parent.appendChild(para);
	}
	var element = document.getElementById("div1");
	element.appendChild(para_parent);
}

var sum = 0;
var elements = document.querySelectorAll('div2 span');
elements.forEach(function (element) {
	element.addEventListener('click', function () {
		if (element.style.background == 'red') {
			element.style.background = 'none';
			sum = sum - 8;
			document.getElementById("cena").innerHTML = sum
		} else {
			element.style.background = 'red';
			sum = sum + 8;
			document.getElementById("cena").innerHTML = sum + "zł" + "<br/>" + "<br/>" + "Wybrałeś miejsca? Zapraszamy poniżej do podsumowania zamówienia :)";
		}
	});
});