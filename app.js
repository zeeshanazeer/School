

// Function to retrieve users from localStorage
// Function to retrieve users from localStorage
function getUsers() {
    var users = localStorage.getItem("users");

    if (users) {
        users = JSON.parse(users);
    } else {
        users = [];
    }

    return users;
}

// Function to register a new user
function register() {
    var name = document.getElementById("r-name").value.trim();
    var roll = document.getElementById("r-roll").value.trim();
    var email = document.getElementById("r-email").value.trim();
    var password = document.getElementById("r-password").value.trim();

    // Validate inputs
    if (!name || !roll || !email || !password) {
        alert("Please fill in all fields.");
        return;
    }

    // Get existing users from localStorage
    var users = getUsers();

    // Check if user with the same email or roll number already exists
    var existingUser = users.find(function(user) {
        return user.email === email || user.roll === roll;
    });

    if (existingUser) {
        alert("User with the same email or roll number already exists.");
        return;
    }

    // Create new user object
    var newUser = {
        name: name,
        roll: roll,
        email: email,
        password: password
    };

    // Add new user to the array
    users.push(newUser);

    // Save updated users array back to localStorage
    localStorage.setItem("users", JSON.stringify(users));

    // Clear input fields after registration
    document.getElementById("r-name").value = "";
    document.getElementById("r-roll").value = "";
    document.getElementById("r-email").value = "";
    document.getElementById("r-password").value = "";

    alert("User registered successfully.");
}

// Function to handle user login
function login() {
    var roll = document.getElementById("l-roll").value.trim();
    var email = document.getElementById("l-email").value.trim();
    var password = document.getElementById("l-password").value.trim();

    // Get existing users from localStorage
    var users = getUsers();

    // Check if there's a user with the provided credentials
    var loggedInUser = users.find(function(user) {
        return user.email === email && user.password === password && user.roll === roll;
    });

    if (loggedInUser) {
        // Get current date and time
        var now = new Date();
        var currentDate = now.toLocaleDateString();
        var currentTime = now.toLocaleTimeString();

        alert("User logged in successfully.");

        // Update attendance sheet with login status and current date/time
        var attendanceTable = document.getElementById("attendance-sheet");
        var newRow = attendanceTable.insertRow();

        var cell1 = newRow.insertCell(0);
        cell1.textContent = loggedInUser.name;

        var cell2 = newRow.insertCell(1);
        cell2.textContent = loggedInUser.roll;

        var cell3 = newRow.insertCell(2);
        cell3.textContent = loggedInUser.email;

        var cell4 = newRow.insertCell(3);
        cell4.textContent = currentDate + " " + currentTime; // Displaying date and time
    } else {
        alert("Email, roll number, or password is incorrect.");
    }
}







// // Function to retrieve users from localStorage
// function getUsers() {
//     var users = localStorage.getItem("users");

//     if (users) {
//         users = JSON.parse(users);
//     } else {
//         users = [];
//     }

//     return users;
// }

// // Function to register a new user
// function register() {
//     var name = document.getElementById("r-name").value.trim();
//     var roll = document.getElementById("r-roll").value.trim();
//     var email = document.getElementById("r-email").value.trim();
//     var password = document.getElementById("r-password").value.trim();

//     // Validate inputs
//     if (!name || !roll || !email || !password) {
//         alert("Please fill in all fields.");
//         return;
//     }

//     // Get existing users from localStorage
//     var users = getUsers();

//     // Check if user with the same email or roll number already exists
//     var existingUser = users.find(function(user) {
//         return user.email === email || user.roll === roll;
//     });

//     if (existingUser) {
//         alert("User with the same email or roll number already exists.");
//         return;
//     }

//     // Create new user object
//     var newUser = {
//         name: name,
//         roll: roll,
//         email: email,
//         password: password
//     };

//     // Add new user to the array
//     users.push(newUser);

//     // Save updated users array back to localStorage
//     localStorage.setItem("users", JSON.stringify(users));

//     // Clear input fields after registration
//     document.getElementById("r-name").value = "";
//     document.getElementById("r-roll").value = "";
//     document.getElementById("r-email").value = "";
//     document.getElementById("r-password").value = "";

//     alert("User registered successfully.");
// }

// // Function to handle user login
// function login() {
//     var roll = document.getElementById("l-roll").value.trim();
//     var email = document.getElementById("l-email").value.trim();
//     var password = document.getElementById("l-password").value.trim();

//     // Get existing users from localStorage
//     var users = getUsers();

//     // Check if there's a user with the provided credentials
//     var isValid = users.some(function(user) {
//         return user.email === email && user.password === password && user.roll === roll;
//     });

//     if (isValid) {
//         alert("User logged in successfully.");
//     } else {
//         alert("Email, roll number, or password is incorrect.");
//     }
// }







// function getUsers(){
//     var users = localStorage.getItem("users");

//     if(users){
//         users= JSON.parse(users);
//     }
//     else{
//         users=[];
//     } 

//     return users;
// }

// function register(){
//     var name = document.getElementById("r-name");
//     var roll = document.getElementById("r-roll");
//     var email = document.getElementById("r-email");
//     var password = document.getElementById("r-password");
//     var users = getUsers();

//     var user ={
//         name: name.value,
//         roll: roll.value,
//         email: email.value,
//         password: password.value
//     }

//     users.push(user);

//     localStorage.setItem("users",JSON.stringify(users));

//     name.value = "";
//     roll.value = "";
//     email.value ="";
//     password.value ="";

//     // console.log(name.value, email.value, password.value)

// }

// function login(){
//     var roll = document.getElementById("l-roll");
//     var email = document.getElementById("l-email");
//     var password = document.getElementById("l-password");
//     var users = getUsers(); 
//     var isValid = false;

//     for(var i=0; i<users.length; i++){
//         if(email.value === users[i].email && password.value === users[i].password && roll.value === users[i].roll){
//             isValid = true;
//             break;
//         }
//     }
//     if(isValid){
//         alert("User login successfully");
//     }
//     else{
//         alert("Email or password is Invalid");
//     }
    
// }





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


