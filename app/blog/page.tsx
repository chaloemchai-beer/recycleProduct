import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const fetchBlogs = async () => {
  try {
    const response = axios.get(`${process.env.NEXT_PUBLIC_MOVIE_API}/api/movies`);
    return (await response).data;
  } catch (error) {
    console.log("error", error);
    return [];
  }
};

export default async function page() {
  const blogs = await fetchBlogs();

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Popular</h2>
      <div className="container mx-auto px-4 max-w-6xl">
        {blogs.map((article: any) => (
          <div key={article.id} className="mb-12 pb-12 border-b">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <span className="text-green-500 font-semibold text-sm mb-2 block">
                  {article.category}
                </span>
                <Link href={`blog/${article.id}`}>
                <h2 className="text-3xl font-bold mb-3">{article.title}</h2>
                </Link>
                <p className="text-gray-600 mb-4">
                  {article.rating}
                  <br />
                  {article.viewCount}
                </p>
                <p className="text-gray-700">{article.description}</p>
              </div>
              <div>
                <Image
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
