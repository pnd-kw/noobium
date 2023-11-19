import Article from "@/components/Article";
import Category from "@/components/Category";
import NavBar from "@/components/Navbar";
import { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  const categories = [...Array(10)].map((_, index) => {
    return {
      id: index + 1,
      slug: "technology",
      label: "Technology",
    };
  });
  const articles = [...Array(4)].map((_, index) => {
    return {
      id: index + 1,
      title: "How to Learn Redux",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Egestas etiam morbi varius sapien. Eu arcu morbi tortor rhoncus. Donec pellentesque diam orci enim, nibh diam. Nulla id ut risus quisque felis tristique metus...",
      slug: "how-to-learn-redux",
      thumbnail: "/images/dummy-article-thumbnail.png",
      category: "Technology",
      date: "2022-09-20 16:00:00",
      author: {
        name: "John Doe",
        photo: "/images/dummy-avatar.png",
      },
    };
  });
  return (
    <div>
      <Head>
        <title>Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar />
      <div className="w-[720px] mx-auto py-24">
        <div className="mb-16">
          <p className="font-sans text-slate-900 text-sm mb-4">Your Categories</p>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Category key={category.id} label={category.label} />
            ))}
          </div>
        </div>
        {articles.map((article) => (
          <Article
            key={article.id}
            title={article.title}
            content={article.content}
            url={`/articles/${article.slug}`}
            thumbnail={article.thumbnail}
            category={article.category}
            date={article.date}
            author={article.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
