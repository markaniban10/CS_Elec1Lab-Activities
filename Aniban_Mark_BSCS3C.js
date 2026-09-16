// 10 let variables
let customer = "Mark";
let tableNumber = 5;
let orderType = "Dine In";
let quantity1 = 1;
let quantity2 = 2;
let price1 = 120;
let price2 = 50;
let discount = 10;
let total = 0;
let cashier = "Christine";

// 10 const variables
const restaurant = "McDonalds";
const location = "Calbayog City";
const food1 = "Chicken McDo";``
const food2 = "Coca-cola";
const category1 = "Meal";``
const category2 = "Drink";
const tax = 0.12;
const minimumOrder = 100;
const openingTime = "8:00 AM";
const closingTime = "10:00 PM";

// Object literals
const order = {
    customer,
    table: tableNumber,
    type: orderType,
    items: {
        food: food1,
        drink: food2
    }
};

const cashierInfo = {
    name: cashier,
    branch: {
        location
    }
};

// 5 arrow functions
const subtotal = (price, quantity) => price * quantity;
const applyDiscount = amount => amount - discount;
const addTax = amount => amount + amount * tax;
const isValidOrder = amount => amount >= minimumOrder;
const makeLabel = item => item.toUpperCase();

// Arrays
const menu = [food1, food2];
const prices = [price1, price2];

// 3 destructured arrays
const [mainFood, drink] = menu;
const [mainPrice, drinkPrice] = prices;
const [firstCategory, secondCategory] = [category1, category2];

// 3 destructured object literals
const { customer: buyer, type } = order;
const { name: cashierName } = cashierInfo;
const { food, drink: orderedDrink } = order.items;

// 2 arrays using spread operator (...)
const fullMenu = [...menu, "French Fries", "Burger"];
const allPrices = [...prices, 60, 95];

// 2 object literals using spread operator (...)
const updatedOrder = {
    ...order,
    status: "Preparing"
};

const updatedCashier = {
    ...cashierInfo,
    shift: "Morning"
};

// 2 arrays using .map()
const menuLabels = menu.map(item => makeLabel(item));
const discountedPrices = prices.map(price => applyDiscount(price));

// 2 arrays using .filter()
const expensiveItems = prices.filter(price => price > 100);
const affordableItems = prices.filter(price => price <= 100);

// 2 object literals using optional chaining
const branchInfo = {
    location: cashierInfo.branch?.location
};

const customerContact = {
    phone: order.customerInfo?.phone
};

// Calculations
let foodTotal = subtotal(price1, quantity1);
let drinkTotal = subtotal(price2, quantity2);

total = addTax(foodTotal + drinkTotal);

// Template literals
console.log(`Welcome to ${restaurant}!`);
console.log(`Customer: ${customer}`);
console.log(`Table Number: ${tableNumber}`);
console.log(`Order Type: ${orderType}`);
console.log(`Main Food: ${mainFood}`);
console.log(`Drink: ${drink}`);
console.log(`Food Price: ₱${mainPrice}`);
console.log(`Drink Price: ₱${drinkPrice}`);
console.log(`Food Quantity: ${quantity1}`);
console.log(`Drink Quantity: ${quantity2}`);
console.log(`Food Total: ₱${foodTotal}`);
console.log(`Drink Total: ₱${drinkTotal}`);
console.log(`Final Total with Tax: ₱${total}`);
console.log(`Cashier: ${cashierName}`);
console.log(`Branch: ${branchInfo.location}`);
console.log(`Order Status: ${updatedOrder.status}`);
console.log(`Menu: ${menuLabels}`);
console.log(`Discounted Prices: ${discountedPrices}`);
console.log(`Expensive Items: ${expensiveItems}`);
console.log(`Affordable Items: ${affordableItems}`);
console.log(`Valid Order: ${isValidOrder(total)}`);
console.log(`Customer Phone: ${customerContact.phone}`);