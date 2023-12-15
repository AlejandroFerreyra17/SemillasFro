document.addEventListener("DOMContentLoaded", () => {
  const addToMainCarButtons = document.getElementsByClassName("add-to-mainCar");
  const MainCarPartsElement = document.getElementById("mainCar-parts");
  const clearMainCarButton = document.getElementById("clear-mainCar");

  const addTomainCar = (price, partName) => {
    const li = document.createElement("li");
    li.innerHTML = `${partName} - $${price} - ${date} <button class="remove-from-mainCar">Eliminar</button>`;
    MainCarPartsElement.appendChild(li);

    updateTotal();

    const removeButtons = document.getElementsByClassName(
      "remove-from-mainCar"
    );
    for (const button of removeButtons) {
      button.addEventListener("click", removeFromMainCar);
    }
  };

  const removeFromMainCar = (event) => {
    const button = event.target;
    const li = button.parentNode;
    MainCarPartsElement.removeChild(li);

    updateTotal();
  };

  const updateTotal = () => {
    const prices = Array.from(
      MainCarPartsElement.getElementsByTagName("li")
    ).map((li) => {
      const priceText = li.innerHTML.match(/\$\d+/);
      return priceText ? parseInt(priceText[0].slice(1)) : 0;
    });
    const total = prices.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );

    clearMainCarButton.innerHTML = `clean ($${total})`;
  };

  const actualDate = () => {
    const actualDate = moment();
    return actualDate.format("DD-MM-YYYY");
  };

  const date = actualDate();

  // Manejo de promesas con Fetch
  async function obtenerDatos() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log("Error al obtener los datos:", error);
    }
  }

  let employed
  obtenerDatos()
    .then((data) => {
     employed = data;
    })
    .catch((error) => {
      console.log("Error:", error);
    });

  for (const button of addToMainCarButtons) {
    button.addEventListener("click", (event) => {
      console.log(employed)
      const price = parseInt(event.target.getAttribute("data-price"));
      const partName = event.target.parentNode.querySelector("h3").innerHTML;
      addTomainCar(price, partName);
    });
  }

  clearMainCarButton.addEventListener("click", () => {
    MainCarPartsElement.innerHTML = "";
    clearMainCarButton.innerHTML = "clean";
  });
});


