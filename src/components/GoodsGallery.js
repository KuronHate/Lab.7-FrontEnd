import React from "react";
import GoodsCard from "./GoodsCard";

function GoodsGallery () {
    return (
      <div style={styles.gallery}>
        {goods.map((item) => (
          <GoodsCard key={item.id} name={item.name} price={item.price} image={item.image} />
        ))}
      </div>
    );
  };
  
  const goods = [
    {
      id: 1,
      name: "Телефон Samsung Galaxy S21",
      price: "25 000 грн",
      image: "https://i.allo.ua/media/catalog/product/cache/3/image/468x468/602f0fa2c1f0d1ba5e241f914e856ff9/import/3666185612157039.jpg",
    },
    {
      id: 2,
      name: "Ноутбук Lenovo IdeaPad",
      price: "30 000 грн",
      image: "https://cdn.comfy.ua/media/catalog/product/l/e/lenovo_ideapad_3_15iau7_82rk012lra_arctic_grey_1__3.jpg",
    },
    {
      id: 3,
      name: "Телевізор LG OLED",
      price: "45 000 грн",
      image: "https://www.lg.com/content/dam/channel/wcms/uk/2024-promotions/euro-screenfills/oled/c44/48/original/OLED48C44LA_450x450_01-v2.jpg",
    },
    {
      id: 4,
      name: "Фітнес-браслет Xiaomi Mi Band",
      price: "1 200 грн",
      image: "https://pcshop.ua/image/cache/webp/catalog/tovar/fitnes-braslet-xiaomi-mi-band-8-pro-gray-bhr8007gl-global-1024x768.webp",
    },
    {
      id: 5,
      name: "Кавоварка Philips",
      price: "10 000 грн",
      image: "https://coffeeone.com.ua/image/cache/catalog/Saeco/042/1-960x720.jpg",
    },
    {
      id: 6,
      name: "Навушники Sony WH-1000XM4",
      price: "12 000 грн",
      image: "https://newtime.ua/upload/2024-08/sony-wh-1000xm4-silver-wh1000xm4s.webp",
    },
  ];

  const styles = {
    gallery: {
      display: "flex",
      flexWrap: "wrap", 
      justifyContent: "center", 
      gap: "20px",
      padding: "20px",
    },
  };

export default GoodsGallery;