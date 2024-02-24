document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;

    const newDepositAmount = parseFloat(newDepositAmountString);
    


   


    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;

    const previousDepositTotal = parseFloat(previousDepositTotalString);

   

    const currenDepositTotal = previousDepositTotal + newDepositAmount;
    
    depositTotalElement.innerText = currenDepositTotal;


const balanceTotalElement = document.getElementById('balance-total');

const previousBalanceTotalString = balanceTotalElement.innerText;
const previousBalanceTotal = parseFloat(previousBalanceTotalString);


const currentBalaceTotal = previousBalanceTotal + newDepositAmount;


balanceTotalElement.innerText = currentBalaceTotal;









    
depositField.value = '';

    })

