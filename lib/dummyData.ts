import { Product } from "@/types/product";

type Category = { name: string; products: Product[] | { name: string }[] };

export const categories: Category[] = [
  {
    name: "cars",
    products: [
      { name: "car1" },
      { name: "car2" },
      { name: "car3" },
      { name: "car4" },
    ],
  },
  {
    name: "wheels",
    products: [
      { name: "wheel" },
      { name: "wheel" },
      { name: "wheel" },
      { name: "wheel" },
    ],
  },
  {
    name: "engines",
    products: [
      { name: "engines1" },
      { name: "engines2" },
      { name: "engines3" },
      { name: "engines4" },
    ],
  },
  {
    name: "phones",
    products: [
      { name: "iPhone 13" },
      { name: "Samsung Galaxy S21" },
      { name: "Google Pixel 6" },
      { name: "OnePlus 9" },
    ],
  },
  {
    name: "laptops",
    products: [
      { name: "MacBook Air" },
      { name: "Dell XPS 13" },
      { name: "HP Spectre x360" },
      { name: "Lenovo ThinkPad X1 Carbon" },
    ],
  },
  {
    name: "headphones",
    products: [
      { name: "Sony WH-1000XM4" },
      { name: "AirPods Pro" },
      { name: "Bose QuietComfort 35 II" },
      { name: "Sennheiser HD 660 S" },
    ],
  },
  {
    name: "cameras",
    products: [
      { name: "Canon EOS R5" },
      { name: "Sony Alpha 7 III" },
      { name: "Nikon Z6 II" },
      { name: "Fujifilm X-T4" },
    ],
  },
];

export const dummyPromotions = [
  {
    name: "promotion 1+1",
    message: "free laptop for evert usb",
    product: "inset usb product here",
    details: "/details",
  },
  {
    name: "Back-to-School Sale",
    message: "Buy a laptop, get 50% off on any backpack!",
    product: "Laptop",
    details: "/details",
  },
  {
    name: "Tech Bundle Deal",
    message: "Purchase a smartphone and a tablet together, and save $100!",
    product: "Smartphone and Tablet",
    details: "/details",
  },
  {
    name: "Gaming Bonanza",
    message: "Buy any gaming console, get a free game of your choice!",
    product: "Gaming Console",
    details: "/details",
  },
  {
    name: "Audio Upgrade",
    message:
      "Upgrade your headphones and get a 20% discount on any audio accessory.",
    product: "Headphones",
    details: "/details",
  },
];

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Laptop",
    about: "Powerful laptop with high-performance features.",
    price: 999,
    category: "Electronics",
    promotions: [
      {
        name: "Back-to-School Sale",
        message: "Buy a laptop, get 50% off on any backpack!",
        product: "Laptop",
      },
      {
        name: "Tech Bundle Deal",
        message: "Purchase a laptop and a tablet together, and save $100!",
        product: "Laptop and Tablet",
      },
    ],
  },
  {
    id: "2",
    name: "Smartphone",
    about: "Latest smartphone with advanced features.",
    price: 699,
    category: "Electronics",
    promotions: [
      {
        name: "Phone Accessories Bundle",
        message: "Buy a smartphone, get 20% off on any phone accessories!",
        product: "Smartphone",
      },
    ],
  },
  {
    id: "3",
    name: "Headphones",
    about: "Premium noise-canceling headphones for an immersive experience.",
    price: 199,
    category: "Electronics",
    promotions: [
      {
        name: "Audio Upgrade",
        message:
          "Upgrade your headphones and get a 20% discount on any audio accessory.",
        product: "Headphones",
      },
    ],
  },
  {
    id: "4",
    name: "Tablet",
    about: "Sleek and lightweight tablet for on-the-go productivity.",
    price: 299,
    category: "Electronics",
    promotions: [
      {
        name: "Tech Bundle Deal",
        message: "Purchase a laptop and a tablet together, and save $100!",
        product: "Laptop and Tablet",
      },
      {
        name: "Tablet Accessories Combo",
        message: "Buy a tablet, get 15% off on any tablet accessories!",
        product: "Tablet",
      },
    ],
  },
  {
    id: "5",
    name: "Gaming Console",
    about: "Next-gen gaming console for an immersive gaming experience.",
    price: 499,
    category: "Gaming",
    promotions: [
      {
        name: "Gaming Bonanza",
        message: "Buy any gaming console, get a free game of your choice!",
        product: "Gaming Console",
      },
    ],
  },
  {
    id: "6",
    name: "Camera",
    about: "Professional-grade camera for capturing stunning moments.",
    price: 799,
    category: "Photography",
    promotions: [
      {
        name: "Photography Bundle",
        message:
          "Buy a camera, get a 10% discount on any photography accessory!",
        product: "Camera",
      },
    ],
  },
  {
    id: "7",
    name: "Wireless Earbuds",
    about: "Compact and wireless earbuds for an enjoyable audio experience.",
    price: 129,
    category: "Electronics",
    promotions: [
      {
        name: "Audio Upgrade",
        message:
          "Upgrade your earbuds and get a 20% discount on any audio accessory.",
        product: "Wireless Earbuds",
      },
    ],
  },
  {
    id: "8",
    name: "Fitness Tracker",
    about: "Track your fitness goals with this advanced fitness tracker.",
    price: 79,
    category: "Fitness",
    promotions: [
      {
        name: "Healthy Lifestyle Bundle",
        message: "Buy a fitness tracker, get 15% off on any fitness accessory!",
        product: "Fitness Tracker",
      },
    ],
  },
  {
    id: "9",
    name: "External Hard Drive",
    about: "High-capacity external hard drive for secure data storage.",
    price: 129,
    category: "Electronics",
    promotions: [
      {
        name: "Storage Combo Deal",
        message:
          "Purchase a laptop and an external hard drive together, and save $50!",
        product: "Laptop and External Hard Drive",
      },
    ],
  },
  {
    id: "10",
    name: "Smartwatch",
    about:
      "Stay connected with notifications and fitness tracking on this smartwatch.",
    price: 199,
    category: "Wearables",
    promotions: [
      {
        name: "Tech Essentials Bundle",
        message: "Buy a smartwatch, get 10% off on any tech accessory!",
        product: "Smartwatch",
      },
    ],
  },
];
