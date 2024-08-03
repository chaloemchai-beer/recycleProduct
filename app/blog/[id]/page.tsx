const TechBlogHomepage = () => {
  const mainArticle = {
    title:
      "Okta lays off 400 employees — almost exactly a year after last staff cuts",
    author: "Carly Page",
    image:
      "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  return (
    <div className="container">
      <main>
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{mainArticle.title}</h1>
          <p className="text-gray-600 mb-4">{mainArticle.author}</p>
          <img
            src={mainArticle.image}
            alt="Okta building"
            className="w-full h-64 object-cover mb-4"
          />
        </div>
      </main>
    </div>
  );
};

export default TechBlogHomepage;
