
//operacja logowanie

var users = new Array("User1", "User2", "User3");
var passwords = new Array("Kod1", "Kod2", "Kod3");
function sprawdz_haslo(user, pass)
{
  for(var i = 0; i < users.length; i++){
    if((user == users[i]) && (pass == passwords[i]))
      return true;
  }
  return false;
}
function check()
{
  var user = document.form1.user.value;
  var pass = document.form1.pass.value;
  if(!sprawdz_haslo(user, pass)){
      alert('Niepoprawny login lub haslo!');
  }
  else{
    document.location.href = "wybierz.html";
  }
}

//operacja logowanie - koniec
