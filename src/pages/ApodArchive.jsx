import { useEffect, useState } from "react";
import { fetchRecentApods } from "../services/nasaApi";


function getDateDaysAgo(days) {
  const d = new Date();
  d.setDate(d.getDate() - days);

  return d.toISOString().split("T")[0];
}

function ArchiveCard({ item, onClick }) {
  return (
    <div className="bg-spaceCard rounded-md overflow-hidden cursor-pointer hover:shadow-lg transition"
      onClick={() => onClick(item)}>
      <img src={item.url} alt={item.title}
        loading="lazy" className="w-full h-48 object-cover transition-opacity duration-500"/>

      <div className="p-4">
        <h3 className="text-md font-medium leading-tight mb-1">
          {item.title}
        </h3>

        <div className="text-sm text-muted">
          {item.date}
        </div>
        <div className="text-sm text-muted">
          © {item.copyright || "NASA"}
        </div>

      </div>
    </div>
  );
}

export default function ApodArchive() {
  const PAGE_SIZE = 10;

  const [archive, setArchive] = useState([]);
  const [offset, setOffset] = useState(1);
  const [archiveLoading, setArchiveLoading] = useState(false);

  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    setArchiveLoading(true);

    const start = getDateDaysAgo(offset + PAGE_SIZE - 1);
    const end = getDateDaysAgo(offset);

    fetchRecentApods(start, end)
      .then((data) => {
        const images = data
          .filter(item => item.media_type === "image")
          .reverse();

        setArchive(prev => [...prev, ...images]);
        setArchiveLoading(false);
      })
      .catch(() => setArchiveLoading(false));
  }, [offset]);


  useEffect(() => {
    if (modalItem) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [modalItem]);


  return (
    <div>
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-semibold mb-4">
          Explore APOD Archive
        </h1>
        <p className="text-muted">
          Browse historical Astronomy Pictures of the Day.
        </p>

        <div className="max-w-6xl mx-auto mt-4">

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {archive.map((item) => (
              <ArchiveCard key={item.date} item={item} onClick={setModalItem} />
            ))}
          </div>


          <div className="flex justify-center mt-10">
            <button
              onClick={() => setOffset(prev => prev + PAGE_SIZE)}
              disabled={archiveLoading}
              className="px-6 py-2 border border-white/10 rounded-lg text-sm text-white hover:border-[var(--accent)] transition disabled:opacity-50">
              {archiveLoading ? "Loading…" : "Load more"}
            </button>
          </div>
        </div>
      </section>


      {modalItem && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalItem(null)}>
          <div
            className="bg-spaceModal rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto no-scrollbar relative p-8"
            onClick={(e) => e.stopPropagation()}>
            <img
              src={modalItem.url}
              alt={modalItem.title}
              className="w-full rounded-xl border border-white/10 mb-4 mt-2" />
            <h2 className="text-2xl font-semibold mb-2">{modalItem.title}</h2>

            <p className="text-sm text-muted">{modalItem.date}</p>
            <div className="text-sm text-muted">
              © {modalItem.copyright || "NASA"}
            </div>
            <p className="mt-4 text-muted">{modalItem.explanation}</p>
            <button
              onClick={() => setModalItem(null)}
              className="absolute top-3 right-3 pr-2 text-white text-2xl hover:text-accent">
              &times;
            </button>
          </div>
        </div>
      )
      }


    </div >
  );
}
