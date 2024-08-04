import axios from "axios";

interface Movie {
  id: string;
  image: string;
  backgroundImage: string;
  rating: number;
  description: string;
  title: string;
  type: string;
  category: string;
  posterImage: string;
  viewCount: number;
}

const fetchBlog = async (id: string): Promise<Movie | null> => {
  try {
    const response = await axios.get<Movie[]>(`${process.env.NEXT_PUBLIC_MOVIE_API}/api/movies?id=${id}`);
    const movies = response.data;
    return movies.length > 0 ? movies[0] : null;
  } catch (error) {
    console.error("Error fetching blog:", error);
    return null;
  }
};

export default async function Page({ params }: { params: { id: string } }) {
  const blog = await fetchBlog(params.id);
  
  if (!blog) {
    return <div>ไม่พบข้อมูลภาพยนตร์</div>;
  }
  
  return (
    <div>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>Rating: {blog.rating}</p>
      <p>Category: {blog.category}</p>
      <p>View Count: {blog.viewCount}</p>
      <img src={blog.posterImage} alt={blog.title} />
    </div>
  );
}