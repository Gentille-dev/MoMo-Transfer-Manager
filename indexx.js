
const loginArea = document.getElementById('login-id'),
    dashboard = document.getElementById('dashboard'),
    deposit = document.getElementById('deposit'),
    withdraw = document.getElementById('withdraw'),
    balance = document.getElementById('balance'),
    depositInput = document.getElementById('input-deposit'),
    withdrawInput = document.getElementById('input-withdraw'),
    depositBtn = document.getElementById('deposit-btn'),
    withdrawBtn = document.getElementById('withdraw-btn'),
    submitBtn = document.getElementById('submit-btn'),
    senderName= document.getElementById('sender-name');
    result = document.getElementById('justify-result')


submitBtn.addEventListener('click', () => {
    loginArea.style.display = 'none';})
    dashboard.classList.remove('d-none');

depositBtn.addEventListener('click', () => {
    const value = depositInput.value;
    const senderValue= senderName.value;
    console.log(senderValue);
    const depositValue = Number(deposit.innerText) + Number(value);
    const balanceValue = Number(balance.innerText) + Number(value);
    
    deposit.innerText = depositValue;
    balance.innerText = balanceValue;
    deposit.setAttribute('value' , 'senderName');
    senderName.innerHTML =  senderName.value;
    
    depositInput.value = '';
})

withdrawBtn.addEventListener('click', () => {
    const value = withdrawInput.value;

    if (Number(value) == 0) {
        alert("Please reload your Balance");
    }
    else if (Number(value) > Number(balance.innerText)) {
        alert("Insufficient Balance")
    }
    else {
        const balanceValue = Number(balance.innerText) - Number(value);
        const withdrawValue = Number(withdraw.innerText) + Number(value);
        withdraw.innerText = withdrawValue;
        balance.innerText = balanceValue;
        withdrawInput.value = '';

    }
})



