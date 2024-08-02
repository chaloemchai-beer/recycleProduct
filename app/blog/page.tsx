const TechBlogHomepage = () => {
  const mainArticle = {
    title:
      "Okta lays off 400 employees — almost exactly a year after last staff cuts",
    author: "Carly Page",
    image:
      "https://images.pexels.com/photos/1563356/pexels-photo-1563356.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  };

  const sideArticles = [
    {
      category: "Apps",
      title:
        "Apple Vision Pro to launch with over 600 apps and games optimized for the new headset",
      author: "Sarah Perez",
    },
    {
      category: "Venture",
      title:
        "Three San Francisco supervisors receive threats following YC President Garry Tan's tweet",
      author: "Christine Hall",
    },
    {
      category: "Hardware",
      title: "Apple Vision Pro: Day One",
      author: "Brian Heater",
    },
    {
      category: "TC+ Work",
      title: "5 ways construction tech founders can win in 2024",
      author: "Michelle Moon",
    },
  ];

  const articles = [
    {
      category: "Tech",
      title: "Latest in Tech",
      author: "John Doe",
      date: "July 19, 2024",
      excerpt: "This is a brief summary of the latest in tech...",
      image: "https://via.placeholder.com/150",
    },
    // Add more articles as needed
  ];

  return (
    <div className="container mx-auto px-4">
      <main className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <h1 className="text-3xl font-bold mb-4">{mainArticle.title}</h1>
          <p className="text-gray-600 mb-4">{mainArticle.author}</p>
          <img
            src={mainArticle.image}
            alt="Okta building"
            className="w-full h-64 object-cover mb-4"
          />
        </div>
        <div className="space-y-6">
          {sideArticles.map((article, index) => (
            <div key={index}>
              <span className="text-green-500 font-semibold">
                {article.category}
              </span>
              <h2 className="text-xl font-bold mb-2">{article.title}</h2>
              <p className="text-gray-600">{article.author}</p>
            </div>
          ))}
        </div>
      </main>

      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-4">The Latest</h2>
        <div className="container mx-auto px-4 max-w-6xl">
          {articles.map((article, index) => (
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

      <footer className="mt-16 pt-8 border-t text-sm text-gray-600">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">About</h3>
            <ul className="space-y-2">
              <li>TechCrunch</li>
              <li>Staff</li>
              <li>Contact Us</li>
              <li>Advertise</li>
              <li>Crunchboard Jobs</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
              <li>TechCrunch+ Terms</li>
              <li>RSS Terms of Use</li>
              <li>Privacy Dashboard</li>
              <li>Code of Conduct</li>
              <li>About Our Ads</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Trending Tech Topics</h3>
            <ul className="space-y-2">
              <li>Okta Layoffs</li>
              <li>Apple Vision Pro</li>
              <li>Tesla Lawsuit</li>
              <li>Social Media Senate Hearing</li>
              <li>Shopify AI Image Generator</li>
              <li>Tech Layoffs</li>
              <li>ChatGPT</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-4">Follow Us</h3>
            <ul className="space-y-2">
              <li>Facebook</li>
              <li>X</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Mastodon</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center">
          <p>
            &copy; 2024 Yahoo. All rights reserved. Powered by WordPress VIP.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default TechBlogHomepage;
