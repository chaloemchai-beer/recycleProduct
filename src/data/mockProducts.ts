export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

export const mockProducts: Product[] = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    price: 45,
    image:
      "https://images.unsplash.com/photo-1706765779494-2705542ebe74?q=80&w=1051&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Refurbished Smartphone",
    price: 120,
    image:
      "https://plus.unsplash.com/premium_photo-1680985551009-05107cd2752c?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Wooden Dining Chair",
    price: 30,
    image:
      "https://images.unsplash.com/photo-1505843490538-5133c6c7d0e1?q=80&w=1518&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    title: "Mountain Bike",
    price: 220,
    image:
      "https://plus.unsplash.com/premium_photo-1678718713393-2b88cde9605b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
