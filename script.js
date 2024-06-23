
function getPrice(elementId) {
    const priceElement = document.getElementById(elementId);
    const priceText = priceElement.innerHTML.replace(' руб.', '');
    return +priceText;
}

function setDiscountedPrice(elementId, priceElementId, discountedPrice) {
    const priceElement = document.getElementById(priceElementId);
    priceElement.style.display = 'none';

    const discountedPriceElement = document.getElementById(elementId);
    discountedPriceElement.innerHTML = Math.round(discountedPrice) + ' руб.';
    discountedPriceElement.style.display = 'block';
}


function calculateTotal() {
    const price1 = getPrice('price1');
    const price2 = getPrice('price2');
    const price3 = getPrice('price3');
    const price4 = getPrice('price4');

    const total = price1 + price2 + price3 + price4;
    return total;
}


function displayTotal(total) {
    const totalPriceElement = document.getElementById('total-price');
    totalPriceElement.innerHTML = total + ' руб.';
}


function applyCoupon() {
    const price1 = getPrice('price1');
    const price2 = getPrice('price2');
    const price3 = getPrice('price3');
    const price4 = getPrice('price4');

    const discountedPrice1 = price1 * 0.8;
    const discountedPrice2 = price2 * 0.8;
    const discountedPrice3 = price3 * 0.8;
    const discountedPrice4 = price4 * 0.8;

    setDiscountedPrice('discounted-price1', 'price1', discountedPrice1);
    setDiscountedPrice('discounted-price2', 'price2', discountedPrice2);
    setDiscountedPrice('discounted-price3', 'price3', discountedPrice3);
    setDiscountedPrice('discounted-price4', 'price4', discountedPrice4);

    const total = calculateTotal();
    const discountedTotal = total * 0.8;
    displayTotal(Math.round(discountedTotal));
}

document.getElementById('apply-coupon').addEventListener('click', applyCoupon);


document.addEventListener('DOMContentLoaded', () => {
    const total = calculateTotal();
    displayTotal(total);
});
