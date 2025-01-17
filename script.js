// const pounds = [11, 21, 16];
// const avg = pounds.reduce((total, amount, index, array) => {
//     total += amount;
//     console.log({ total });
//     if (index === array.length - 1) {
//         console.log({ total });
//         console.log(array.length);
//         return total / array.length;
//     } else {
//         return total;
//     }
// }, 0);
// console.log(avg);

document.addEventListener("DOMContentLoaded", () => {
    const colorBox = document.getElementById("color-box");
    const changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        const r2 = Math.ceil(Math.random() * 255);
        const g2 = Math.ceil(Math.random() * 255);
        const b2 = Math.ceil(Math.random() * 255);
        return `linear-gradient(90deg, rgb(${r},${g},${b}) 0%, rgb(${r2},${g2},${b2}) 100%)`;
    }

    changeColorBtn.addEventListener("click", () => {
        const randomColor = getRandomColor();
        console.log(randomColor);
        colorBox.style.background = randomColor;
    });
});
