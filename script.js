document.getElementById("createCardBtn").addEventListener("click", function() {
    // Создаем элементы для карточки товара
    var cardContainer = document.getElementById("cardContainer");
    var card = document.createElement("div");
    card.className = "card";

    var title = document.createElement("h2");
    title.textContent = "Название товара";

    var description = document.createElement("p");
    description.textContent = "Описание товара";

    var price = document.createElement("p");
    price.textContent = "Цена: $100";

    // Добавляем элементы в карточку товара
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(price);

    // Добавляем карточку товара в контейнер
    cardContainer.appendChild(card);
});
