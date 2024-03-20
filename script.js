document.getElementById("createCardBtn").addEventListener("click", function() {
    var cardContainer = document.getElementById("cardContainer");
    
    var card = document.createElement("div");
    card.className = "card";

    // Добавляем изображение
    var image = document.createElement("img");
    image.src = "bicycle.jpg"; // Путь к изображению товара
    image.alt = "Изображение товара";
    card.appendChild(image);

    // Добавляем цену товара
    var price = document.createElement("p");
    price.textContent = "999 ₽";
    card.appendChild(price);
    
    // Добавляем название товара
    var title = document.createElement("h2");
    title.textContent = "POP TRAIDING COMPANY";
    card.appendChild(title);

    // Добавляем кнопку "Подробнее"
    var detailsBtn = document.createElement("button");
    detailsBtn.className = "details-btn";
    detailsBtn.textContent = "Подробнее";
    card.appendChild(detailsBtn);

    cardContainer.appendChild(card);
});
