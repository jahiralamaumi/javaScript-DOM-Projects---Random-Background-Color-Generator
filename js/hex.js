

const hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];



const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let code = "#";
    for(let i=0; i<6; i++){
        
        const randomNumber = getRandomNumber();
        code += hex[randomNumber];
    }
    document.body.style.background = code;
    const colorCode = document.querySelector('.color');
    colorCode.textContent = code;
})

const getRandomNumber = () => Math.floor(Math.random() * hex.length);