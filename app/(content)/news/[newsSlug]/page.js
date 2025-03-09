import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getNewsItem } from "@/lib/news";

const NewsDetailsPage = async ({ params }) => {
  const newsSlug = params.newsSlug;
  const news = await getNewsItem(newsSlug);
  if (!news) {
    notFound();
  }
  return (
    <>
      <article className="news-article">
        <header>
          <Link href={`/news/${news.slug}/image`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
          </Link>
          <h1>{news.title}</h1>
          <time dateTime={news.date}>{news.date}</time>
        </header>
        <p>{news.content}</p>
      </article>
    </>
  );
};

export default NewsDetailsPage;
