const authenticate = function (userID, pass){
    let username = prompt("Enter your username here: ");
    let password = prompt ("Enter your password here: ");
    let systemResponse = " ";

    if (username == "admin" && password == "secret"){
        alert ("Welcome ADMIN!");
        console.log("Welcome ADMIN")
        systemResponse = "Welcome ADMIN!";
    }
    else {
        alert ("Invalid login credentials. Please try again!");
        console.log("BAD LOGIN CREDENTIALS");
        systemResponse = "BAD LOGIN CREDENTIALS";
    }

    let RefResponse = document.querySelector(".taskRespond");
    RefResponse.innerText = `${systemResponse}`;
    console.log(systemResponse);
    return (systemResponse);
}
let message = authenticate();