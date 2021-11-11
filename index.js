const TICKET_PRICE = 5000;
const AGE_LIMIT = 65;
const CODE_PROMO1 = 'PROMO1';
const CODE_PROMO2 = 'PROMO2';
const MAX_QUANTITY_TICKETS = 3;

const age = document.getElementById('age');
const quantity = document.getElementById('quantity');
const code = document.getElementById('code');
const btn = document.getElementById('btn');

const typeDiscountElement = document.getElementById('type-discount');
const subtotalElement = document.getElementById('subtotal');
const discountPercentElement = document.getElementById('discount-percent');
const discountCodeElement = document.getElementById('discount-code');
const totalElement = document.getElementById('total');


const calculate = () => {

    let total = 0;
    let subtotal = TICKET_PRICE * quantity.value;
    let totalDiscount = 0;
    let additionalDiscount = 0;
    let typeDiscountCode = '';
    let typeDiscount = 'Sin descuento';

    if (!quantity.value) {
        alert('Cantidad no puede ir vacia');
        return 
    }

    if (code.value !== '') {
        if ((code.value !== CODE_PROMO1) && (code.value !== CODE_PROMO2)) {
            alert('Código Promocional Inválido');
            return 
        }
    }  

    if (quantity.value >= MAX_QUANTITY_TICKETS) {
        totalDiscount = TICKET_PRICE * 0.1 * quantity.value;
        typeDiscount = 'Descuento por cantidad de boletas mayor a ' + MAX_QUANTITY_TICKETS;
    }
    
    if (age.value >= AGE_LIMIT) {
        totalDiscount = TICKET_PRICE * 0.3 * quantity.value;
        typeDiscount = 'Descuento por edad mayor a ' + AGE_LIMIT;
    }
    
    if (code.value === CODE_PROMO1)  {
        additionalDiscount = 2000;
        typeDiscountCode = 'Descuento por código ' + CODE_PROMO1;
    }
    
    if ((code.value === CODE_PROMO2) && (quantity.value >= 2)) {
        additionalDiscount = 1000;
        typeDiscountCode = 'Descuento por código ' + CODE_PROMO2;
    }
    
    total = subtotal - totalDiscount - additionalDiscount;
    
    const separator = !!additionalDiscount ? ' - ' : '';

    typeDiscountElement.innerText = typeDiscount + separator + typeDiscountCode;
    subtotalElement.innerText = subtotal;
    discountPercentElement.innerText = totalDiscount;
    discountCodeElement.innerText = additionalDiscount;
    totalElement.innerText = total;
    
};

const transformText = () => {
    code.value = code.value.toUpperCase();
};

code.addEventListener('keyup', transformText);
btn.addEventListener('click', calculate);
