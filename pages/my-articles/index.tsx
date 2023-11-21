import Article from "@/components/Article";
import Button from "@/components/Button";
import NavBar from "@/components/Navbar";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

const MyArticlesPage: NextPage = () => {
  const router = useRouter();
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
        <title>My Articles| Noobium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar hasSearchInput={false} />
      <div className="w-[720px] mx-auto py-24">
        <div className="mb-16 flex items-center justify-between">
          <p className="font-sans font-bold text-slate-900 text-5xl">
            My Articles
          </p>
          <Link href="/my-articles/create">
            <Button type="button" size="large">
              Write an Article
            </Button>
          </Link>
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
            hasOptions
          />
        ))}
      </div>
    </div>
  );
};

export default MyArticlesPage;
