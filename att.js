function attendence(){
    let roll = document.getElementById("l-roll");
    let name = document.getElementById("r-name");
    let cours = document.getElementById("l-cours");
    let email = document.getElementById("l-email");
    let col = document.getElementById("col");

    col += roll.value;
    col += name.value;
    col += cours.value;
    col += email.value;

    console.log(col);

}