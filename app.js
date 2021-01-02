// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', function () {
//     const newColor = makeRandColor();
//     document.body.style.backgroundColor = newColor;
//     h1.innerText = newColor;
// })

// const makeRandColor = () => {
//     const r = Math.floor(Math.random() * 255);
//     const g = Math.floor(Math.random() * 255);
//     const b = Math.floor(Math.random() * 255);
//     return `rgb(${r}, ${g}, ${b})`;
// }

const button = document.querySelector("button");
const h1 = document.querySelector("h1");

const makeRandColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);

  return [r, g, b];
};

button.addEventListener("click", function () {
  const newColor = makeRandColor();
  const channelSum = newColor.reduce((acc, currVal) => acc + currVal);
  document.body.style.backgroundColor = `rgb(${[...newColor]})`;
  if (channelSum < 100) {
    h1.style.color = "#fff";
  } else {
    h1.style.color = "#000";
  }
  h1.innerText = `rgb ${newColor}`;
});
