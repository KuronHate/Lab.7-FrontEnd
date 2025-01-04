import React from "react"


function Header() {
    return (
        <div>
            <h2 id="element1" onClick={changeColorGetElementById}>
                Горбань Тарас Петрович
            </h2>
            <p id="element2" onClick={changeColorQuerySelector}>
                Дата та місце народження: 01.02.2005, м. Біла Церква
            </p>
        </div>
    )
}
const random = (number) => Math.floor(Math.random() * number);

const randomColor = () => {
    return `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
  };
  

const changeColorGetElementById = () => {
    const element = document.getElementById("element1");
    if (element) {
      element.style.backgroundColor = randomColor();
      element.style.color = randomColor();
    }
  };

const changeColorQuerySelector = () => {
    const element = document.querySelector("#element2");
    if (element) {
      element.style.backgroundColor = randomColor();
      element.style.color = randomColor();
    }
  };

export default Header
