document.getElementById("buttonBuy").addEventListener("click", function () {
  processPurchase();
});

document
  .getElementById("inputAmount")
  .addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      processPurchase();
    }
  });

function processPurchase() {
  let seed = document.getElementById("inputSeed").value;
  let amount = document.getElementById("inputAmount").value;

  let total = calculateTotal(seed, amount);

  document.getElementById("result").textContent = "The total is: $" + total;

  localStorage.setItem("seed", seed);
  localStorage.setItem("amount", amount);
}

function calculateTotal(seed, amount) {
  let pricePerSeed = 10;
  return pricePerSeed * amount;
}

window.addEventListener("load", function () {
  let seed = localStorage.getItem("seed");
  let amount = localStorage.getItem("amount");

  document.getElementById("inputSeed").value = seed || "";
  document.getElementById("inputAmount").value = amount || "";
});

// Articles:
const articlesData = [
  {
    title: "Cookies",
    content: "Category: cookies",
    image: "../asset/img/catalogue/img-catalogue-1.jpg",
  },

  {
    title: "Pop",
    content: "Category: pop",
    image: "../asset/img/catalogue/img-catalogue-2.jpg",
  },

  {
    title: "sunflower",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-3.jpg",
  },

  {
    title: "White Olives",
    content: "Category: Olives",
    image: "../asset/img/catalogue/img-catalogue-4.jpg",
  },

  {
    title: "Argentine Wine",
    content: "Category: wine",
    image: "../asset/img/catalogue/img-catalogue-5.jpg",
  },

  {
    title: "Chickpeas",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-6.jpg",
  },

  {
    title: "Bread with Seeds",
    content: "Category: bread",
    image: "../asset/img/catalogue/img-catalogue-7.jpg",
  },

  {
    title: "Blueberries",
    content: "Category: fruit",
    image: "../asset/img/catalogue/img-catalogue-8.jpg",
  },

  {
    title: "Corn",
    content: "Category: corn",
    image: "../asset/img/catalogue/img-catalogue-9.jpg",
  },

  {
    title: "Uruguayan Wine",
    content: "category: wine",
    image: "../asset/img/catalogue/img-catalogue-10.jpg",
  },

  {
    title: "Red Bean",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-11.jpg",
  },

  {
    title: "Bean",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-12.jpg",
  },

  {
    title: "Linen",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-13.jpg",
  },

  {
    title: "Moringa",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-14.jpg",
  },

  {
    title: "Chilean Wine",
    content: "Category: wine",
    image: "../asset/img/catalogue/img-catalogue-15.jpg",
  },

  {
    title: "Spanish Wine",
    content: "Category: wine",
    image: "../asset/img/catalogue/img-catalogue-16.jpg",
  },

  {
    title: "Oatmeal",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-17.jpg",
  },

  {
    title: "Poppy",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-18.jpg",
  },

  {
    title: "Walnuts",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-19.jpg",
  },

  {
    title: "Peeled Peanut",
    content: "category: seed",
    image: "../asset/img/catalogue/img-catalogue-20.jpg",
  },

  {
    title: "Natural Cereals",
    content: "Category: cereals",
    image: "../asset/img/catalogue/img-catalogue-21.jpg",
  },

  {
    title: "Morning Coffee",
    content: "Category: coffee",
    image: "../asset/img/catalogue/img-catalogue-22.jpg",
  },

  {
    title: "Fennel",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-23.jpg",
  },

  {
    title: "Papaya",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-24.jpg",
  },

  {
    title: "Fenugreek",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-25.jpg",
  },

  {
    title: "Coffee Grains",
    content: "Category: grains",
    image: "../asset/img/catalogue/img-catalogue-26.jpg",
  },

  {
    title: "Hemp",
    content: "Category: seed",
    image: "../asset/img/catalogue/img-catalogue-27.jpg",
  },

  {
    title: "Rice",
    content: "category: seed",
    image: "../asset/img/catalogue/img-catalogue-28.jpg",
  },
];

const articlesContainer = document.getElementById("articles");

articlesData.forEach((article) => {
  const articleElement = document.createElement("article");
  const titleElement = document.createElement("h2");
  const contentElement = document.createElement("p");
  const imageElement = document.createElement("img");

  titleElement.textContent = article.title;
  contentElement.textContent = article.content;
  imageElement.src = article.image;

  imageElement.style.maxWidth = "30%";

  articleElement.appendChild(imageElement);
  articleElement.appendChild(titleElement);
  articleElement.appendChild(contentElement);

  articlesContainer.appendChild(articleElement);
});

