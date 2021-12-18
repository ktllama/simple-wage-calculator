const calc = document.getElementById('button').addEventListener('click', calcPay)

function calcPay() {
    let start = document.getElementById("timeStart").value;
    let end = document.getElementById("timeEnd").value;
    const pay = document.getElementById("pay").value;

    const x = start.search(":");
    const startHour = start.slice(0,x);
    console.log(startHour)
    const startMin = start.slice(x+1);
    //console.log(startMin);
    const startDec =  ((startMin*100)/60)/100;
    console.log(startDec);
    const startTime = parseFloat(startHour)+parseFloat(startDec);
    console.log(startTime)



    //const startTime = parseInt((startHour+startDec)/100);
    //need if statement here bc if its right on the hour this is where it mis calculates
    //console.log(startTime);

    const y = end.search(":");
    const endHour = end.slice(0,x); 
    const endMin = end.slice(x+1);
    const endDec =  (endMin*100)/60;
    const endTime = parseInt((endHour+endDec)/100);

   //console.log(startTime);
   //console.log(endTime);

   // const hoursX = (endTime-startTime);
    //console.log(hoursX);

/**
 * !this code works if going from am to pm- need if statement if 2 pms
 */
    //const total = (endTime-startTime)*15;
    //const positiveTotal = Math.round(Math.abs(total));

    //console.log(total);

};

//const minInt = (endMin*100)/60
