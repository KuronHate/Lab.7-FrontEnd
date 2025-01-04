import React from "react"


function Image() {
    return (
        <div>
            <div className="image-container">
                <a href="https://city-adm.lviv.ua/" target="_blank" rel="noopener noreferrer">
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LvivOldTown1.jpg/1920px-LvivOldTown1.jpg"
                        alt="Зображення м. Львова"
                        width="600"
                    />
                </a>
            </div>
            <div className="button-container">
                <button onClick={handleAdd}>Додати</button>
                <button onClick={handleEnlarge}>Збільшити</button>
                <button onClick={handleShrink}>Зменшити</button>
                <button onClick={handleDelete}>Видалити</button>
            </div>
        </div>
    )
}

function handleAdd () {
    const container = document.querySelector(".image-container");
  
    if (!container.querySelector("a img")) {
      const link = document.createElement("a");
      link.href = "https://city-adm.lviv.ua/";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
  
      const img = document.createElement("img");
      img.src =
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/LvivOldTown1.jpg/1920px-LvivOldTown1.jpg";
      img.alt = "Зображення м. Львова";
      img.width = 600;
  
      link.appendChild(img);
      container.appendChild(link);
    }
  };

function handleEnlarge  () {
    const img = document.querySelector(".image-container img");
    if (img) img.width += 50;
  };

function handleShrink () {
    const img = document.querySelector(".image-container img");
    if (img && img.width > 50) img.width -= 50;
  };

function handleDelete () {
    const img = document.querySelector(".image-container img");
    if (img) img.remove();
  };

export default Image