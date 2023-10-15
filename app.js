const amount = document.getElementById('amount');
const guest = document.getElementById('guest');
const quality = document.getElementById('quality');
const calculatedTip = document.getElementById('calculated_tip')

calculate = () => {
    const tip = ((amount.value * quality.value) / (guest.value)).toFixed(2);
    amount.value = '';
    quality.value = '';
    guest.value = '';
    if(tip === 'NaN'){
        calculatedTip.innerHTML = 'Tip 0php each';
        showTip()
    }
    else{
        calculatedTip.innerHTML = 'Tip ' + tip + ' pesos each';
        showTip()
    }
}
showTip = () =>{
    calculatedTip.className = 'show';
    setTimeout(function(){
        calculatedTip.className = calculatedTip.className.replace('show', '');}, 3000);
}
