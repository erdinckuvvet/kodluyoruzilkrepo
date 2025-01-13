const products = [
    { name: "Çanta A", brand: "Marka 1", price: 100, image: "image-url-1" },
    { name: "Çanta B", brand: "Marka 1", price: 150, image: "image-url-2" },
    { name: "Çanta C", brand: "Marka 2", price: 200, image: "image-url-3" },
];

const categories = ["Marka 1", "Marka 2"];

function displayCategories() {
    const categoryList = document.getElementById('categories');
    categories.forEach(category => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.textContent = category;
        a.href = "#";
        li.appendChild(a);
        categoryList.appendChild(li);
    });
}

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const div = document.createElement('div');
        div.className = 'product-item';
        div.innerHTML = `
            <img src="${product.image}" alt="${product.name}" class="product-image">
            <h2>${product.name}</h2>
            <p>Marka: ${product.brand}</p>
            <p>Fiyat: ${product.price} TL</p>
        `;
        productList.appendChild(div);
    });
}

displayCategories();
displayProducts();
