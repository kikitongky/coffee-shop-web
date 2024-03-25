document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Gayo Coffee",
        img: "asset/product1.jpg",
        category: "arabica",
        price: 100000,
        description:
          "High-quality Arabica coffee from the highlands of Gayo, Aceh, known for its distinctive flavor and smooth aroma.",
      },
      {
        id: 2,
        name: "Toraja Coffee",
        img: "asset/product2.jpg",
        category: "arabica",
        price: 120000,
        description:
          "Premium Arabica coffee from South Sulawesi, known for its heavy and rich flavor with hints of chocolate and spices.",
      },
      {
        id: 3,
        name: "Sidikalang Coffee",
        img: "asset/product3.jpg",
        category: "arabica",
        price: 110000,
        description:
          "Quality Arabica coffee from Sidikalang, North Sumatra, with a gentle flavor profile and diverse aroma.",
      },
      {
        id: 4,
        name: "Lampung Coffee",
        img: "asset/product4.jpg",
        category: "robusta",
        price: 80000,
        description:
          "High-quality Robusta coffee from Lampung, Sumatra, with a strong flavor and low acidity, ideal for black coffee.",
      },
      {
        id: 5,
        name: "Manggarai Coffee",
        img: "asset/product5.jpg",
        category: "robusta",
        price: 90000,
        description:
          "Robusta coffee grown in the Manggarai region, Flores, known for its rich flavor and unique aroma.",
      },
      {
        id: 6,
        name: "Bali Coffee",
        img: "asset/product6.jpg",
        category: "robusta",
        price: 90000,
        description:
          "Robusta coffee from the island of Bali, known for its strong flavor and bold aroma, suitable for milk coffee.",
      },
      {
        id: 7,
        name: "Sumatra Luwak Coffee",
        img: "asset/product7.jpg",
        category: "luwak",
        price: 500000,
        description:
          "Authentic Kopi Luwak from Sumatra, produced through a unique process where coffee beans are fermented by civets, resulting in a delicate and smooth flavor.",
      },
      {
        id: 8,
        name: "Java Luwak Coffee",
        img: "asset/product8.jpg",
        category: "luwak",
        price: 550000,
        description:
          "Kopi Luwak from Java, with a rich and complex flavor profile and captivating aroma.",
      },
      {
        id: 9,
        name: "Bali Luwak Coffee",
        img: "asset/product9.jpg",
        category: "luwak",
        price: 520000,
        description:
          "Kopi Luwak produced in Bali, offering a smooth flavor with hints of caramel and chocolate.",
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,

    add(newItem) {
      const cartItem = this.items.find((item) => item.id === newItem.id);

      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        this.items = this.items.map((item) => {
          if (item.id !== newItem.id) {
            return item;
          } else {
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }

      console.log(this.total);
    },
    remove(id) {
      const cartItem = this.items.find((item) => item.id === id);

      if (cartItem.quantity > 1) {
        this.items = this.items.map((item) => {
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

const rupiah = (number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
