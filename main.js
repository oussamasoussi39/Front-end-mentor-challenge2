
const checkbox = document.getElementsByTagName('input')[0];

const box = document.getElementById('front__page-overlay');

checkbox.addEventListener('click', function handleClick() {
  if (checkbox.checked &&(screen.width < 900)) {
    box.style.display = 'none';
  } else {
    box.style.display = 'block';
  }
});
console.log(screen.width)
