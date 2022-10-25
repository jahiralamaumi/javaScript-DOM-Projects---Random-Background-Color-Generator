const colors = ['green', 'red', 'blue', 'cyan'];
const btn = document.getElementById('btn');
const colorName = document.querySelector('.color');
btn.addEventListener('click', () =>{
    const randomNumber = getRandomNumber();
    document.body.style.background = colors[randomNumber];
    colorName.textContent = colors[randomNumber];
})

const getRandomNumber = () => Math.floor(Math.random() * 4);
