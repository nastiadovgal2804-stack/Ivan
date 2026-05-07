document.querySelectorAll('.dot').forEach((dot, index) => {
    dot.addEventListener('click', function() {
        // Видаляємо клас active у всіх
        document.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
        // Додаємо поточному
        this.classList.add('active');
        
        // Тут можна додати логіку зміни зображення або тексту
        console.log("Зміна слайда на: " + (index + 1));
    });
});

// Логіка для карток товарів
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        // Можна додати додаткові ефекти при наведенні
        card.style.transform = 'translateY(-5px)';
        card.style.transition = '0.3s';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });

    // Клік на кнопку "See More"
    const btn = card.querySelector('.btn-see-more');
    if(btn) {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            alert('Opening product details...');
        });
    }
});

// Отримуємо всі елементи категорій
const categoryItems = document.querySelectorAll('.category-item');

categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const categoryName = item.querySelector('.category-label').innerText;
        console.log(`Перехід до категорії: ${categoryName}`);
        
        // Тут можна реалізувати логіку фільтрації або переходу на іншу сторінку
        // window.location.href = `/catalog/${categoryName.toLowerCase().replace(' ', '-')}`;
    });
});

document.querySelector('.subscribe-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = this.querySelector('input').value;
    
    if (email) {
        alert(`Дякуємо за підписку! Лист відправлено на: ${email}`);
        this.reset();
    } else {
        alert('Будь ласка, введіть ваш email.');
    }
});