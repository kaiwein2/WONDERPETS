// Handle menu tabs for both guest and logged-in versions
const menuTabs = document.querySelectorAll('.menu-tab');
const menuItems = document.getElementById('menu-items');

// Static menu data for HTML version
const staticMenuData = {
    signature: [
        {
            id: '1',
            name: 'Golden Truffle Risotto',
            description: 'A decadent blend of velvety rice, truffle, and gourmet finishes.',
            price: '2850.00',
            image: 'truffle-risotto.png'
        },
        {
            id: '2',
            name: 'Celestial Duck Confit',
            description: 'A perfectly slow-cooked duck with crispy skin and a rich, tender interior.',
            price: '3200.00',
            image: 'duck-confit.png'
        },
        {
            id: '3',
            name: 'Skyline Wagyu Steak',
            description: 'Tender Wagyu beef with rich marbling and exceptional flavor.',
            price: '4500.00',
            image: '../wagyu-steak.png'
        },
        {
            id: '4',
            name: 'Sautéed Seafood Platter',
            description: 'Fresh seafood, expertly prepared for any occasion.',
            price: '3800.00',
            image: '../seafood-platter.png'
        }
    ],
    starters: [
        {
            id: '5',
            name: 'Celestial Appetizer',
            description: 'A heavenly start to your dining experience with premium ingredients.',
            price: '850.00',
            image: 'celestial.png'
        },
        {
            id: '6',
            name: 'Garden Fresh Salad',
            description: 'Crisp greens with seasonal vegetables and house dressing.',
            price: '650.00',
            image: '../avatar1.png'
        }
    ],
    desserts: [
        {
            id: '7',
            name: 'Chocolate Delight',
            description: 'Rich chocolate dessert with layers of indulgence.',
            price: '450.00',
            image: '../avatar2.png'
        },
        {
            id: '8',
            name: 'Vanilla Dream',
            description: 'Creamy vanilla dessert with fresh berries.',
            price: '380.00',
            image: '../avatar3.png'
        }
    ],
    cocktails: [
        {
            id: '9',
            name: 'Signature Cocktail',
            description: 'Our house special blend with premium spirits.',
            price: '580.00',
            image: '../avatar4.png'
        },
        {
            id: '10',
            name: 'Classic Martini',
            description: 'Perfectly crafted martini with your choice of gin or vodka.',
            price: '520.00',
            image: '../avatar5.png'
        }
    ],
    wines: [
        {
            id: '11',
            name: 'Premium Red Wine',
            description: 'Full-bodied red wine from our exclusive collection.',
            price: '1200.00',
            image: '../logo1.png'
        },
        {
            id: '12',
            name: 'Champagne Selection',
            description: 'Celebrate with our finest champagne selection.',
            price: '2800.00',
            image: '../logo2.png'
        }
    ]
};

// Function to load menu items based on the category (static version)
function loadMenu(category) {
    if (!menuItems) return;
    
    // Clear previous menu items
    menuItems.innerHTML = '<div class="loading">Loading menu items...</div>';

    // Simulate loading delay for better UX
    setTimeout(() => {
        const data = staticMenuData[category] || [];
        
        if (data.length === 0) {
            menuItems.innerHTML = '<div class="no-items-message"><p>No items available in this category.</p><p>Please select another category or check back later.</p></div>';
            return;
        }

        menuItems.innerHTML = ''; // Clear loading message
        data.forEach(item => {
            const menuCard = document.createElement('div');
            menuCard.classList.add('menu-item');
            menuCard.innerHTML = `
                <img src="images/${item.image}" alt="${item.name}" onerror="this.src='images/placeholder.png'" />
                <div class="menu-item-content">
                    <h3>${item.name}</h3>
                    <p class="description">${item.description}</p>
                    <span class="price">₱${parseFloat(item.price).toFixed(2)}</span>
                    <button class="order-btn" onclick="orderItem('${item.id}', '${item.name}')">Order Now</button>
                </div>
            `;
            menuItems.appendChild(menuCard);
        });
    }, 300);
}

// Event listener for menu category tabs
menuTabs.forEach(tab => {
    tab.addEventListener('click', function() {
        const category = this.getAttribute('data-category');

        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));

        // Add active class to clicked tab
        this.classList.add('active');

        // Load menu items for the selected category
        loadMenu(category);
        
        // Update URL without page reload
        const url = new URL(window.location);
        url.searchParams.set('category', category);
        window.history.pushState({}, '', url);
    });
});

// Function to handle service booking
function bookService(serviceId, serviceName) {
    // Store service info in session storage for booking
    sessionStorage.setItem('selectedService', JSON.stringify({
        id: serviceId,
        name: serviceName
    }));
    
    // Always redirect to reservation.html for HTML version
    window.location.href = "reservation.html";
}

// Auto-load content on page load
document.addEventListener('DOMContentLoaded', function() {
    // Check if we have menu tabs and load default category
    if (menuTabs.length > 0 && menuItems) {
        const defaultMenuTab = document.querySelector('.menu-tab.active');
        if (defaultMenuTab) {
            const category = defaultMenuTab.getAttribute('data-category');
            loadMenu(category);
        } else {
            // If no active tab, load signature dishes by default
            loadMenu('signature');
        }
    }
});

// Function to handle ordering items
function orderItem(itemId, itemName) {
    // Store item info in session storage for reservation
    sessionStorage.setItem('selectedMenuItem', JSON.stringify({
        id: itemId,
        name: itemName
    }));
    
    // Always redirect to reservation.html for HTML version
    window.location.href = "reservation.html";
}

// Backward compatibility function for old service booking
function bookService(serviceId, serviceName) {
    orderItem(serviceId, serviceName);
}
