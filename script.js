let inputfield = document.querySelector('.qr-filled');
let btn = document.querySelector('#btn');
let imgQr = document.querySelector('#qr-img');

btn.addEventListener('click', () => {
    let inputValue = inputfield.value;

    if (!inputValue) {
        alert('Please enter a valid URL or text');
    } else {
        imgQr.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
        imgQr.alt = `QR code for ${inputValue}`;
    }
});
