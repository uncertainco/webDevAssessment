function createName(first,last){
    return `${first} ${last}`;
}
function askName(){
    do{
    var first = prompt();
    var last = prompt();
    var fullName = createName(first,last);
    }while(fullName!=="Bob Jones");
    return "Your name is "+fullName;
    //alert("Your name is "+fullName);
}
let user = document.getElementById("asker");
user.onclick = function() {fun()};
function fun() {
  user.innerHTML = askName();
}