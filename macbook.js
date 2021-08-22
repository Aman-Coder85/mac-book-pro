// common funtion for all button
function choiceCategory(category, price) {
    let catvalue = document.getElementById(category + '-cost');
    catvalue.innerText = price;
};



// memory 
document.getElementById('memory-1').addEventListener('click', function () {
    choiceCategory('memory', 0)
    calculateTotalPrice();
});

document.getElementById('memory-2').addEventListener('click', function () {
    choiceCategory('memory', 180);
    calculateTotalPrice();
});


// storage
document.getElementById('storage-1').addEventListener('click', function () {
    choiceCategory('storage', 0);
    calculateTotalPrice();
});

document.getElementById('storage-2').addEventListener('click', function () {
    choiceCategory('storage', 100);
    calculateTotalPrice();
});


document.getElementById('storage-3').addEventListener('click', function () {
    choiceCategory('storage', 180);
    calculateTotalPrice();
});

// delivery
document.getElementById('delivery-1').addEventListener('click', function () {
    choiceCategory('delivery', 0);
    calculateTotalPrice();
});

document.getElementById('delivery-2').addEventListener('click', function () {
    choiceCategory('delivery', 20);
    calculateTotalPrice();
});
// function for calculating total
function calculateTotalPrice() {
    let totalPrice = document.getElementById('total-price');
    let totalCost = parseFloat(totalPrice.innerText);
    let baseCost = document.getElementById('base-price');
    let memoryCost = document.getElementById('memory-cost');
    let storageCost = document.getElementById('storage-cost');
    let deliveryCost = document.getElementById('delivery-cost');
    let sumTotal = document.getElementById('sum-total');
    totalCost = parseFloat(baseCost.innerText) + parseFloat(memoryCost.innerText) + parseFloat(storageCost.innerText) + parseFloat(deliveryCost.innerText);
    totalPrice.innerText = totalCost;
    sumTotal.innerText = totalCost;


    return totalCost;
};


// promo button 
document.getElementById('promo-btn').addEventListener('click', function () {
    let promoInput = document.getElementById('promo-input').value;
    let sumTotal = document.getElementById('sum-total');

    if (promoInput == 'stevekaku') {
        sumTotal.innerText = calculateTotalPrice() - (calculateTotalPrice() * 0.2);
    }
    else {
        sumTotal.innerText = calculateTotalPrice();
    }
    document.getElementById('promo-input').value = '';
});











