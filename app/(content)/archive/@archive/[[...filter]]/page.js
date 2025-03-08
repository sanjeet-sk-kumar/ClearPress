import NewsList from "@/components/news-list";
import React from "react";
import { getAvailableNewsMonths, getNewsForYear, getNewsForYearAndMonth } from "@/lib/news";
import Link from "next/link";
import { getAvailableNewsYears } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const filter = params.filter;

  const seletedYear = filter?.[0];
  const seletedMonth = filter?.[1];

  let news = [];
  let links=getAvailableNewsYears();
  if (seletedYear && !seletedMonth) {
    news = getNewsForYear(seletedYear);
    links = getAvailableNewsMonths(seletedYear);
  }
  if(seletedMonth && seletedMonth){
    news = getNewsForYearAndMonth(seletedYear, seletedMonth);
    links=[];
  }
  console.log(seletedYear, news);
  let newsContent = <p>No news found for the selected year</p>;
  if (news.length > 0) {
    newsContent = <NewsList news={news} />;
  }

  if(seletedYear && !getAvailableNewsYears().includes(+seletedYear) || seletedMonth && !getAvailableNewsMonths(seletedYear).includes(+seletedMonth)){
    throw new Error("Invalid filter")
  }

  return (
    <>
      <header id="archive-header">
        <nav>
          <ul>
            {links.map((link) => {
                const href = seletedYear ? `/archive/${seletedYear}/${link}` : `/archive/${link}`;

              return <li key={link}>
                <Link href={href}>{link}</Link>
              </li>
            })}
          </ul>
        </nav>
      </header>
      {newsContent}
    </>
  );
};

export default FilteredNewsPage;
