function createCard(parentId, cardId, cardClass, title, content) {
    // Fix 1: Corrected method call for getElementById
    let parentElement = document.getElementById(parentId); // Previously, it was assigned incorrectly without parentheses

    let card = document.createElement('div');
    card.setAttribute('id', cardId);
    card.setAttribute('class', cardClass);

    let cardTitle = document.createElement('h2');
    cardTitle.innerText = title;
    card.appendChild(cardTitle);

    let cardContent = document.createElement('p');
    cardContent.innerText = content;

    // Fix 2: Append cardContent to card instead of overwriting the card variable
    card.appendChild(cardContent); // Previously, the variable "card" was reassigned to "cardContent", causing the div to be lost

    // Fix 3: Append card to the parentElement correctly
    parentElement.appendChild(card); // Previously, parentElement was incorrectly assigned, so this line caused an error
}

createCard('blogPreviews', 'post1', 'card', 'How to Bake Sourdough', 'A step-by-step guide to baking your own sourdough bread at home. Learn how to create your own starter, knead the dough, and bake to perfection.');

createCard('blogPreviews', 'post2', 'card', 'Gardening 101', 'Discover the joy of gardening with our easy beginner\'s guide. Learn everything from choosing the right plants, preparing the soil, to maintaining your garden.');