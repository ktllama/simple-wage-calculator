
//const hours = document.getElementById("moneyCalc").value;

//const moneyOwed = () => alert(15*hours);

//console.log(moneyOwed(hours));

const cal = () =>{
    const hours = document.getElementById("moneyCalc").value;
    const pay = document.getElementById("pay").value;
    const owed = (hours*pay);
    document.getElementById("owed").innerText = owed + "$ please :)";
}