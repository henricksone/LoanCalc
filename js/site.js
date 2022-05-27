// Main
function main(){
    displayResults(calcValues(getValues()));
}

// get the user inputs
function getValues(){
    let loanValues = {};
    loanValues.amount = parseFloat(document.getElementById("famount").value);
    loanValues.term = parseFloat(document.getElementById("fterm").value);
    loanValues.rate = parseFloat(document.getElementById("frate").value);
    return loanValues
}

// calculations
function calcValues(loanValues){
    
    loanValues.tmp = loanValues.amount * (loanValues.rate/1200) 
        / (1-Math.pow(1+loanValues.rate/1200,-loanValues.term));
    return loanValues
}

// display results
function displayResults(loanValues){
    document.getElementById("tmp").innerHTML = `$${(loanValues.tmp).toFixed(2)}`;
    document.getElementById("amt").innerHTML = `$${(loanValues.amount).toFixed(2)}`;
    document.getElementById("int").innerHTML = `$${((loanValues.tmp *loanValues.term)-loanValues.amount).toFixed(2)}`;
    document.getElementById("cst").innerHTML = `$${(loanValues.tmp * loanValues.term).toFixed(2)}`;
    let balance = parseFloat(loanValues.amount);
    let totint = parseFloat(0);
    let resultTable = "";
    for (let i = 1; i <= loanValues.term; i++) {
        let month = i;
        let payment = parseFloat(loanValues.tmp);
        let principle = parseFloat(loanValues.tmp-balance*loanValues.rate/1200);
        let interest = parseFloat(balance*loanValues.rate/1200);
        totint += interest;
        balance = (balance-principle);
        resultTable += `<tr><td>${month}</td><td>${payment.toFixed(2)}</td><td>${principle.toFixed(2)}</td>
                        <td>${interest.toFixed(2)}</td><td>${totint.toFixed(2)}</td><td>${balance.toFixed(2)}</td></tr>`
        
    };
    document.getElementById("resultTable").innerHTML = resultTable;
}