"use client"

interface ContentList {
    category: string;
    title: string;
    author: string;
    date: string;
    excerpt: string;
    image: string;
}

interface ContentListProps {
    contentlists: ContentList[]
}

const ContentLists = ({contentlists}: ContentListProps) => {
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">The Latest</h2>
      <div className="container mx-auto px-4 max-w-6xl">
        {contentlists.map((article, index) => (
          <div key={index} className="mb-12 pb-12 border-b">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <span className="text-green-500 font-semibold text-sm mb-2 block">
                  {article.category}
                </span>
                <h2 className="text-3xl font-bold mb-3">{article.title}</h2>
                <p className="text-gray-600 mb-4">
                  {article.author}
                  <br />
                  {article.date}
                </p>
                <p className="text-gray-700">{article.excerpt}</p>
              </div>
              <div>
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContentLists;
