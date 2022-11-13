// Deposit functionalities
document.getElementById('deposit-btn').addEventListener('click',function(){
    const depositInput= document.getElementById('user-deposit')
    const depositAmountText = depositInput.value
    const depositAmount = parseFloat(depositAmountText)
    // get current deposit
    const depositTotal= document.getElementById('deposit-total')
    const depositTotalText= depositTotal.innerText
    const previousDepositTotal = parseFloat(depositTotalText)
    depositTotal.innerText = previousDepositTotal+depositAmount;

    // update with deposit to total
    const balanceTotal = document.getElementById('balance-total')
    const balanceTotalText =balanceTotal.innerText
    const previousDepositBalance = parseFloat(balanceTotalText)
    balanceTotal.innerText = previousDepositBalance + depositAmount
    
    // Clear input
    depositInput.value='';

})

// Withdraw functionalities
document.getElementById('withdraw-btn').addEventListener('click',function(){
    const withdrawInput = document.getElementById('user-withdraw');
    const withdrawInputText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawInputText);

    // get Current withdraw
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    withdrawTotal.innerText =withdrawAmount+previousWithdrawTotal;

    // update with withdraw to total
    const balanceTotal = document.getElementById('balance-total')
    const previousBalanceTotalText = balanceTotal.innerText
    const previousBalanceTotal = parseFloat(previousBalanceTotalText)
    balanceTotal.innerText = previousBalanceTotal-withdrawAmount

    // Withdraw clear
    withdrawInput.value = '';


})