const calc = document.getElementById('button').addEventListener('click', calcPay)

function calcPay() {
    let start = document.getElementById("timeStart").value;
    let end = document.getElementById("timeEnd").value;
    const pay = document.getElementById("pay").value;

    const x = start.search(":");
    const startHour = start.slice(0,x);
    //console.log(startHour)
    const startMin = start.slice(x+1);
    //console.log(startMin);
    const startDec =  ((startMin*100)/60)/100;
    //console.log(startDec);
    const startTime = parseFloat(startHour)+parseFloat(startDec);
    //console.log(startTime)

    const y = end.search(":");
    const endHour = end.slice(0,x); 
    const endMin = end.slice(x+1);
    const endDec =  ((startMin*100)/60)/100;
    //need if statement here if its 00 on the hour- then this not the correct equation
    const endTime = parseInt(endHour)+parseInt(endDec);
    //console.log(endTime);

    const hours = (endTime-startTime);
    //add if statement that if the number is positive its fine, if negative make positive
    //console.log(hours);

    const total = hours*parseFloat(pay);
    console.log(total);


};

