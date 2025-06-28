export interface Post {
  slug: string;
  title: string;
  content: string;
  date: string;
  image: string;
}

export const mockPosts: Post[] = [
  {
    slug: "sustainable-fashion-tips",
    title: "10 Sustainable Fashion Tips to Refresh Your Wardrobe",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla fermentum tortor vitae venenatis egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus consequat elementum lorem ut feugiat...",
    date: "2025-06-15",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1218&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "electronics-refurbish-guide",
    title: "Guide to Buying Refurbished Electronics Safely",
    content:
      "Praesent tempus, sem sit amet bibendum tristique, metus sem fringilla tellus, non accumsan lacus tortor ut nulla. Integer pretium condimentum turpis, non sagittis nisi pulvinar in...",
    date: "2025-05-30",
    image:
      "https://plus.unsplash.com/premium_photo-1664473953314-9d1dd27c89c4?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    slug: "reuse-furniture-diy",
    title: "DIY Ideas to Upcycle Old Furniture at Home",
    content:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis...",
    date: "2025-05-10",
    image:
      "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1575&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
