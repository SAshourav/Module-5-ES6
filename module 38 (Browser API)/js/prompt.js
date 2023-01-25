const showAlert = () => {
    const num = Math.random()*10;
    if(num < 5){
        alert('Ki khobor dosto!' + num); //alert just gives a popup message, no return value
    }
};

const askSomething = () => {
    const decision = confirm('Tui Ki Manush? sotti bol'); //confirm gives a return t/f
    console.log(decision); //gives a true/false answer value
    if(decision){
        alert("Tahole eibar 500 Bkash Korek Shala!");
    }else{
        console.log("Shala robot! Bhag...");
    }
};

const getUserInfo = () => {
    const value = prompt("tor nam bol eibar..!"); //prompt can take input from user

    if(!!value){
        console.log("tor nam taile ei?" ,value);
    }
}