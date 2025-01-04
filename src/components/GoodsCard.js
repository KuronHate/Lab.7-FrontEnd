import React from "react"


function GoodsCard({ name, price, image }) {
    return (
        <div>
            <img src={image} alt={name} style={styles.image} />
            <h3 style={styles.name}>{name}</h3>
            <p style={styles.price}>{price}</p>
        </div>
    )
}

const styles = {
    card: {
      border: "1px solid #ddd",
      borderRadius: "8px",
      padding: "10px",
      textAlign: "center",
      width: "calc(100% / 4 - 20px)", 
      maxWidth: "200px", 
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      flex: "1 1 calc(25% - 20px)", 
    },
    image: {
      width: "300px",
      height:"300px",
      borderRadius: "8px",
    },
    name: {
      fontSize: "16px",
      margin: "10px 0",
    },
    price: {
      fontSize: "14px",
      color: "#888",
    },
  };

export default GoodsCard