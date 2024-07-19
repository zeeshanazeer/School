function getUsers(){
    var users = localStorage.getItem("users");

    if(users){
        users= JSON.parse(users);
    }
    else{
        users=[];
    } 

    return users;
}

function register(){
    var name = document.getElementById("r-name");
    var roll = document.getElementById("r-roll");
    var email = document.getElementById("r-email");
    var password = document.getElementById("r-password");
    var users = getUsers();

    var user ={
        name: name.value,
        roll: roll.value,
        email: email.value,
        password: password.value
    }

    users.push(user);

    localStorage.setItem("users",JSON.stringify(users));

    name.value = "";
    roll.value = "";
    email.value ="";
    password.value ="";

    // console.log(name.value, email.value, password.value)

}

function login(){
    var roll = document.getElementById("l-roll");
    var email = document.getElementById("l-email");
    var password = document.getElementById("l-password");
    var users = getUsers(); 
    var isValid = false;

    for(var i=0; i<users.length; i++){
        if(email.value === users[i].email && password.value === users[i].password && roll.value === users[i].roll){
            isValid = true;
            break;
        }
    }
    if(isValid){
        alert("User login successfully");
    }
    else{
        alert("Email or password is Invalid");
    }
    
}





// function from(){
//     var template=document.getElementsById("cards");
//     var title=document.getElementById("title");
//     var comment=document.getElementById("comment");
//     var date=document.getElementById("date");

//     // template +=0;
//     // template +=0;
//     // template +=0;

//     template = title;
//     template = comment;
//     template = date;

//     document.write(`<h3>${template}</h3>`)

// }


