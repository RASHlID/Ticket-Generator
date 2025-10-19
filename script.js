console.log('Script loaded');

const ticket = document.querySelector('.ticket');


const movieTitle = ticket.querySelector('h1')?.textContent.trim() || '';

const details = Array.from(ticket.querySelectorAll('.details p'));
const time   = details[0]?.textContent.trim() || '';
const date   = details[1]?.textContent.trim() || '';
const seat   = details[2]?.textContent.trim() || '';
const cinema = details[3]?.textContent.trim() || '';

const price = ticket.querySelector('.price p')?.textContent.trim() || '';


const payload = [
  'Ticket',
  `Movie: ${movieTitle}`,
  `Cinema: ${cinema}`,
  `Date: ${date}`,
  `Time: ${time}`,
  `Seat: ${seat}`,
  `Price: ${price}`,
].join('\n');


const params = new URLSearchParams({
  size: '200x200',   
  color: '000000',   
  bgcolor: 'dcd9a6', 
  ecc: 'Q',          
  data: payload,     
});

const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?${params.toString()}`;


const qrImg = document.getElementById('qr-code');
qrImg.src = qrUrl;
qrImg.alt = 'Ticket QR code';

console.log('qrUrl:', qrUrl);
console.log('qr set line reached');
