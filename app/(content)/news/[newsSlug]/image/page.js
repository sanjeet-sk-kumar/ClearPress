import { getNewsItem } from "@/lib/news";
import { notFound } from "next/navigation";

const ImagePage = async ({ params }) => {
  const { newsSlug } = params;
  const news = await getNewsItem(newsSlug);
  if (!news) {
    notFound();
  }
  return (
    <div className="fullscreen-image">
      <img src={`/images/news/${news.image}`} alt={news.title} />
    </div>
  );
};

export default ImagePage;
