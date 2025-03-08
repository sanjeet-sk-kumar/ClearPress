import React from "react";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

const NewsDetailsPage = ({ params }) => {
  const newsSlug = params.newsSlug;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!news) {
    notFound();
  }
  console.log("NEWS============", news)
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
