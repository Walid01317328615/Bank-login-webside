document.getElementById('but-withdraw').addEventListener('click',function(){
    


    const withdrawField = document.getElementById('withdraw-field');
    const newWithDrawAmountString = withdrawField.value;
    const newWithDrawAmount = parseFloat(newWithDrawAmountString);
 

    const withrawTotalElement = document.getElementById('withdraw-total');
    const previousBalanceTotalString = withrawTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);



    const currentWithrawTotal = previousBalanceTotal + newWithDrawAmount;
    withrawTotalElement.innerText = currentWithrawTotal;


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalStrin = balanceTotalElement.innerText;
    const previousBalanceTotall = parseFloat(previousBalanceTotalStrin);

    

    const newBlanceTotal = previousBalanceTotall - newWithDrawAmount;
    balanceTotalElement.innerText = newBlanceTotal;





withdrawField.value = '';











 
   




})