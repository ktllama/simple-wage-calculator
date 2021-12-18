const calc = document.getElementById('button').addEventListener('click', calcPay)

function calcPay() {
    let start = document.getElementById("timeStart").value;
    const end = document.getElementById("timeEnd").value;
    const pay = document.getElementById("pay").value;

    const x = start.search(":");
    start = start.slice(0,x) + start.slice(x+1);

    //const final = ((parseInt(end)-parseInt(start))*parseInt(pay));
    console.log(start)
};

