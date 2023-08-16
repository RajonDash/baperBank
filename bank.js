let totalAmount
document.getElementById("deposit-btn").addEventListener('click', function () {
    const newAmount = document.getElementById('deposit-input').value;
    const preAmount = document.getElementById('deposit-amount').innerText;


    totalAmount = parseFloat(newAmount) + parseFloat(preAmount);
    document.getElementById('deposit-amount').innerText = totalAmount;
    document.getElementById('total-balance').innerText = totalAmount;
    document.getElementById('deposit-input').value = '';
})



document.getElementById('withdraw-btn').addEventListener('click',function(){


    const wnewAmount = document.getElementById('withdraw-input').value;
    const wpreAmount = document.getElementById('withdraw-amount').innerText;


    const wtotalAmount = parseFloat(wnewAmount) + parseFloat(wpreAmount);
    
    if (totalAmount>wnewAmount) {
        const newBalance = totalAmount - wtotalAmount;
        document.getElementById('withdraw-amount').innerText = wtotalAmount;
        document.getElementById('total-balance').innerText = newBalance;
    } else {
        alert("Not enough money");
    }
    
    
    document.getElementById('withdraw-input').value = '';

})
