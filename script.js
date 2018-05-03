var user=[
  {username:"jean", password:"123"},
  {username:"jeanne", password:"456"},
  {username:"michael", password:"789"},
  {username:"george", password:"987"}
]




function envoi() {
  var questionUser=document.getElementById("login").value
    , questionPassword=document.getElementById("password").value
    console.log(questionUser);
    console.log(questionPassword);
  for(i=0; i<user.length; i++){
    if(questionUser===user[i].username && questionPassword===user[i].password){
      console.log("nok");
      return true;
    }
  }
  return false;
}
