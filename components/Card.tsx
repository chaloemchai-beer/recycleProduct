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

export default async function Card() {
  const posts = await fetchBlogs();

  return (
    <div className="bg-white py-24 sm:py-32 relative isolate overflow-hidden h-screen" id="blog">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            บทความของพวกเรา
          </h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            บทความให้ความรู้ และคลิปการสอนต่าง ๆ
          </p>
        </div>
        <div className="bg-black p-4 text-white mt-10 sm:w-32 text-center max-sm:mx-0 lg:mx-0 md:mx-0">
          <Link href="blog">เข้าสู่บทความ</Link>
        </div>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post: any) => (
            <article
              key={post.id}
              className="flex max-w-xl flex-col items-start justify-between"
            >
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.id} className="text-gray-500">
                  {post.id}
                </time>
                <Link
                  href={`blog/${post.id}`}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.type}
                </Link>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`blog/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                  {post.description}
                </p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                <Image
                  alt=""
                  src={post.author.imageUrl}
                  className="h-10 w-10 rounded-full bg-gray-50"
                  width={300}
                  height={300}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <Link href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </Link>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div> */}
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
