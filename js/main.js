// Load and render products
async function loadProducts() {
    try {
        const response = await fetch('data/products.json');
        const data = await response.json();
        renderProducts(data.categories[0].products);
        renderFeatures(data.features);
    } catch (error) {
        console.error('Error loading products:', error);
        const productsContainer = document.getElementById('products-container');
        if (productsContainer) {
            productsContainer.innerHTML = `
                <div class="col-span-full text-center text-red-600">
                    <p>Произошла ошибка при загрузке товаров. Пожалуйста, попробуйте позже.</p>
                </div>
            `;
        }
    }
}

function formatPrice(price) {
    return new Intl.NumberFormat('ru-RU').format(price);
}

function renderProducts(products) {
    const productsContainer = document.getElementById('products-container');
    if (!productsContainer) return;

    productsContainer.innerHTML = products.map(product => `
        <div class="bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
            <div class="relative">
                <img class="w-full h-64 object-cover" src="${product.image}" alt="${product.name}">
                ${product.isDiscounted ? `
                    <div class="absolute top-4 right-4 bg-red-500 text-white px-4 py-1 rounded-full">
                        -${product.discount}%
                    </div>
                ` : ''}
            </div>
            <div class="p-6">
                <p class="font-semibold text-lg mb-2">${product.name}</p>
                <p class="text-gray-600 mb-4">${product.description}</p>
                <div class="space-y-2 mb-4">
                    ${product.features.map(feature => `
                        <div class="flex items-center">
                            <svg class="w-4 h-4 text-forest-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            <span class="text-sm text-gray-600">${feature}</span>
                        </div>
                    `).join('')}
                </div>
                <ul class="space-y-3 mb-6">
                    ${product.options.map(option => `
                        <li class="flex justify-between items-center">
                            <span>${option.name}</span>
                            <div class="text-right">
                                <span class="font-semibold">${formatPrice(option.price)} ₽</span>
                                ${option.oldPrice ? `
                                    <span class="text-sm text-gray-400 line-through ml-2">${formatPrice(option.oldPrice)} ₽</span>
                                ` : ''}
                            </div>
                        </li>
                    `).join('')}
                </ul>
                <button onclick="showModal(${JSON.stringify(product).replace(/"/g, '&quot;')})"
                   class="block text-center bg-forest-600 text-white py-3 rounded-lg hover:bg-forest-700 transition duration-300 w-full">
                    Заказать
                </button>
            </div>
        </div>
    `).join('');
}

function renderFeatures(features) {
    const featuresContainer = document.getElementById('features-container');
    if (!featuresContainer) return;

    featuresContainer.innerHTML = features.map(feature => `
        <div class="flex flex-col items-center text-center">
            <div class="w-24 h-24 bg-forest-50 rounded-full flex items-center justify-center mb-4">
                ${getFeatureIcon(feature.icon)}
            </div>
            <p class="font-semibold text-lg mb-2">${feature.title}</p>
            <p class="text-gray-600">${feature.description}</p>
        </div>
    `).join('');
}

function getFeatureIcon(iconName) {
    const icons = {
        quality: `<svg class="w-12 h-12 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
        </svg>`,
        delivery: `<svg class="w-12 h-12 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>`,
        price: `<svg class="w-12 h-12 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>`,
        eco: `<svg class="w-12 h-12 text-forest-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
        </svg>`
    };
    return icons[iconName] || icons.quality;
}

function initializeModal() {
    const modal = document.createElement('div');
    modal.id = 'orderModal';
    modal.className = 'fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center z-50';
    modal.innerHTML = `
        <div class="bg-white rounded-lg p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <div class="flex justify-between items-center mb-6">
                <h2 class="text-2xl font-bold text-gray-800">Калькулятор заказа</h2>
                <button id="closeModal" class="text-gray-500 hover:text-gray-700">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="space-y-6">
                    <div>
                        <label class="block text-sm font-medium text-gray-700 mb-2">Количество кубов</label>
                        <input type="number" id="volume" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-forest-500" min="1">
                    </div>
                    <div class="bg-gray-50 p-4 rounded-lg">
                        <h3 class="font-semibold mb-2">Расчет стоимости:</h3>
                        <p id="calculatedPrice" class="text-2xl font-bold text-forest-600">0 ₽</p>
                    </div>
                </div>
                
                <div class="space-y-6">
                    <div>
                        <h3 class="font-semibold mb-4">Наш адрес:</h3>
                        <p id="address" class="text-gray-600 mb-2"></p>
                        <p id="workingHours" class="text-gray-600"></p>
                    </div>
                    <div id="map" class="h-64 rounded-lg"></div>
                </div>
            </div>
            
            <div class="mt-8 flex justify-end space-x-4">
                <button id="submitOrder" class="bg-forest-600 text-white px-6 py-2 rounded-lg hover:bg-forest-700 transition duration-300">
                    Оформить заказ
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(modal);

    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`;
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);

    document.getElementById('closeModal').addEventListener('click', () => {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });

    const volumeInput = document.getElementById('volume');
    const calculatedPrice = document.getElementById('calculatedPrice');

    volumeInput.addEventListener('input', calculatePrice);

    document.getElementById('submitOrder').addEventListener('click', () => {
        alert('Спасибо за заказ! Мы свяжемся с вами в ближайшее время.');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
    });
}

function showModal(productData) {
    const modal = document.getElementById('orderModal');
    modal.classList.remove('hidden');
    modal.classList.add('flex');

    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            document.getElementById('address').textContent = data.contact.address;
            document.getElementById('workingHours').textContent = data.contact.workingHours;

            if (window.marker && window.map) {
                window.marker.setPosition({
                    lat: data.contact.coordinates.lat,
                    lng: data.contact.coordinates.lng
                });
                window.map.setCenter({
                    lat: data.contact.coordinates.lat,
                    lng: data.contact.coordinates.lng
                });
            }
        });
}

function calculatePrice() {
    const volume = parseFloat(document.getElementById('volume').value) || 0;

    const pricePerCubicMeter = 3000; // Base price per m³

    const totalPrice = volume * pricePerCubicMeter;
    document.getElementById('calculatedPrice').textContent = `${formatPrice(totalPrice)} ₽`;
}

function initMap() {
    fetch('data/products.json')
        .then(response => response.json())
        .then(data => {
            const coordinates = {
                lat: data.contact.coordinates.lat,
                lng: data.contact.coordinates.lng
            };

            window.map = new google.maps.Map(document.getElementById('map'), {
                center: coordinates,
                zoom: 15
            });

            window.marker = new google.maps.Marker({
                position: coordinates,
                map: window.map,
                title: 'Наш магазин'
            });
        });
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
    initializeModal();
});
