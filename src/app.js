document.addEventListener('alpine:init', () => {
    Alpine.data('products', () => ({
        items: [
            {
                "id": 1,
                "name": "Gayo Coffee",
                "img": "asset/product1.jpg",
                "category": "arabica",
                "price": "Rp 100.000",
                "description": "High-quality Arabica coffee from the highlands of Gayo, Aceh, known for its distinctive flavor and smooth aroma."
              },
              {
                "id": 2,
                "name": "Toraja Coffee",
                "img": "asset/product2.jpg",
                "category": "arabica",
                "price": "Rp 120.000",
                "description": "Premium Arabica coffee from South Sulawesi, known for its heavy and rich flavor with hints of chocolate and spices."
              },
              {
                "id": 3,
                "name": "Sidikalang Coffee",
                "img": "asset/product3.jpg",
                "category": "arabica",
                "price": "Rp 110.000",
                "description": "Quality Arabica coffee from Sidikalang, North Sumatra, with a gentle flavor profile and diverse aroma."
              },
              {
                "id": 4,
                "name": "Lampung Coffee",
                "img": "asset/product4.jpg",
                "category": "robusta",
                "price": "Rp 80.000",
                "description": "High-quality Robusta coffee from Lampung, Sumatra, with a strong flavor and low acidity, ideal for black coffee."
              },
              {
                "id": 5,
                "name": "Manggarai Coffee",
                "img": "asset/product5.jpg",
                "category": "robusta",
                "price": "Rp 90.000",
                "description": "Robusta coffee grown in the Manggarai region, Flores, known for its rich flavor and unique aroma."
              },
              {
                "id": 6,
                "name": "Bali Coffee",
                "img": "asset/product6.jpg",
                "category": "robusta",
                "price": "Rp 90.000",
                "description": "Robusta coffee from the island of Bali, known for its strong flavor and bold aroma, suitable for milk coffee."
              },
              {
                "id": 7,
                "name": "Sumatra Luwak Coffee",
                "img": "asset/product7.jpg",
                "category": "luwak",
                "price": "Rp 500.000",
                "description": "Authentic Kopi Luwak from Sumatra, produced through a unique process where coffee beans are fermented by civets, resulting in a delicate and smooth flavor."
              },
              {
                "id": 8,
                "name": "Java Luwak Coffee",
                "img": "asset/product8.jpg",
                "category": "luwak",
                "price": "Rp 550.000",
                "description": "Kopi Luwak from Java, with a rich and complex flavor profile and captivating aroma."
              },
              {
                "id": 9,
                "name": "Bali Luwak Coffee",
                "img": "asset/product9.jpg",
                "category": "luwak",
                "price": "Rp 520.000",
                "description": "Kopi Luwak produced in Bali, offering a smooth flavor with hints of caramel and chocolate."
              }
        ]
    }));
})