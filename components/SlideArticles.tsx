"use client"

export interface SlideArticle {
    category: string;
    title: string;
    author: string;
  }

interface SideArticleProps  {
    articles: SlideArticle[];
}

const SlideArticles = ({articles}: SideArticleProps ) => {
  return (
    <div className="space-y-6">
          {articles.map((article, index) => {
              return (
                  <div key={index}>
                      <span className="text-green-500 font-semibold">
                          {article.category}
                      </span>
                      <h2 className="text-xl font-bold mb-2">{article.title}</h2>
                      <p className="text-gray-600">{article.author}</p>
                  </div>
              )
          })}
        </div>
  )
}

export default SlideArticles