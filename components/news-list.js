import React from "react";
import Link from "next/link";
import Image from "next/image";

const NewsList = ({ news }) => {
  return (
    <ul className="news-list">
      {news.map((item) => (
        <li key={item.id}>
          <Link href={`/news/${item.slug}`}>
            <img src={`/images/news/${item.image}`} alt={item.title} fill />
            <span>{item.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NewsList;
