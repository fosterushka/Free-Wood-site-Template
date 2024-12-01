# Wood Sales Website Template

[DEMO/Демо сайта](https://fosterushka.github.io/Free-Wood-site-Template/)

## 🌲 Project Overview / Обзор проекта

### EN
A modern, responsive website template for wood sales, featuring dynamic product management and an intuitive user interface. Built with vanilla JavaScript, Tailwind CSS, and a JSON-based data structure.

### RU
Современный адаптивный шаблон сайта по продаже дров с динамическим управлением продуктами и интуитивным пользовательским интерфейсом. Разработан с использованием vanilla JavaScript, Tailwind CSS и JSON-структуры данных.

## 🛠 Project Structure / Структура проекта

```
Free-Wood-site-Template/
│
├── index.html          # Main HTML file
├── js/
│   └── main.js         # Main JavaScript logic
├── data/
│   └── products.json   # Product and contact data
└── README.md           # Project documentation
```

## 📝 Editing Data / Редактирование данных

### EN
To modify website content, edit the `data/products.json` file. The JSON structure supports:

- Product Categories
- Product Details
- Contact Information
- Pricing
- Features

### RU
Для изменения содержимого сайта отредактируйте файл `data/products.json`. JSON-структура поддерживает:

- Категории продуктов
- Детали продуктов
- Контактную информацию
- Цены
- Особенности

## 🔧 JSON Structure Guide / Руководство по структуре JSON

### Product Category Example / Пример категории продуктов
```json
{
  "categories": [
    {
      "name": "Березовые дрова",
      "products": [
        {
          "id": 1,
          "name": "Стандартные березовые дрова",
          "description": "Высококачественные березовые дрова",
          "price": 3000,
          "unit": "м³"
        }
      ]
    }
  ]
}
```

### Contact Information / Контактная информация
```json
{
  "contact": {
    "phone": "71111111111",
    "email": "info@example.com",
    "address": "г. Москва, ул. Примерная, 123",
    "coordinates": {
      "lat": 55.779585,
      "lng": 37.591192
    }
  }
}
```

## 🚀 Changelog / История изменений

### 01.12.2024
#### EN
- Added dynamic product rendering
- Implemented responsive design
- Created order calculation modal
- Added SEO meta tags
- Integrated Google Maps location display

#### RU
- Добавлена динамическая визуализация продуктов
- Реализован адаптивный дизайн
- Создан модальный калькулятор заказа
- Добавлены SEO мета-теги
- Интегрирована карта Google с местоположением



#### 05.07.20  
Clean project and make responsive for mobile device 💻 📱 <br> 
Проект почищен, адаптирован под мобильные устройства.
#### 8.02.20 
 Moved to bootstrap WIP

## 🤝 Contribution / Участие

### EN
Feel free to fork, modify, and submit pull requests. Please maintain the existing code style and add appropriate comments.

### RU
Не стесняйтесь форкать, модифицировать и отправлять pull-запросы. Пожалуйста, сохраняйте существующий стиль кода и добавляйте соответствующие комментарии.

## 📄 License / Лицензия

MIT License
