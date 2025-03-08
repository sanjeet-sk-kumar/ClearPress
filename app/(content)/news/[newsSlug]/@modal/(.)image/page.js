"use client";
import { DUMMY_NEWS } from "@/dummy-news";
import { notFound, useRouter  } from "next/navigation";

const InterceptedImagePage = ({ params }) => {
  const router = useRouter()
  const { newsSlug } = params;
  const news = DUMMY_NEWS.find((news) => news.slug === newsSlug);
  if (!news) {
    notFound();
  }
  return (
    <>
      <div className="modal-backdrop" onClick={router.back} />
      <dialog className="modal" open>
        <div className="fullscreen-image">
          <img src={`/images/news/${news.image}`} alt={news.title} />
        </div>
      </dialog>
    </>
  );
};

export default InterceptedImagePage;
