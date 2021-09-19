function playcraps() {
    console.log("craps started");

    var die1 = Math.ceil(Math.random() * 6);
    var die2 = Math.ceil(Math.random() * 6);

    var sum = die1 + die2
    document.getElementById("die1Dis").innerHTML = die1 // random roll of dice
    document.getElementById("die2Dis").innerHTML = die2 //random role of dice 
    document.getElementById("sumDis").innerHTML = sum

    if (sum == 7 || sum == 11)
      {  document.getElementById("resultDis").innerHTML = "Craps-you lose" //This is a document that will display Craps-you lose if the dice land on 7 or 11
    }
    else if (die1 == die2 && die1 % 2 == 0) //if both of the dice land on the same number
    {
        document.getElementById("resultDis").innerHTML = "Doubles, you win!" // this is the document that displays Doubles you win
    }
    else { document.getElementById("resultDis").innerHTML = "You neither won nor lost.  Please play again"; } //If neither the doubles or 7/11 


}
