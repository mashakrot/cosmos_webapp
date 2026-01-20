import { useEffect, useState, useRef } from "react";
import { fetchApod, fetchRecentApods, extractCredit } from "../services/nasaApi";

import calendar from "/src/assets/img/calendar.svg";

function ImageLoader() {
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-spaceCard rounded-xl">
      <div className="w-10 h-10 border-2 border-white/20 border-t-[var(--accent)] rounded-full animate-spin" />
    </div>
  );
}

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
        loading="lazy" className="w-full h-48 object-cover transition-opacity duration-500" />

      <div className="p-4">
        <h3 className="text-md font-medium leading-tight mb-1">
          {item.title}
        </h3>

        <div className="text-muted">
          {item.date}
        </div>
        <div className="text-muted">
          © {item.copyright || "NASA"}
        </div>

      </div>
    </div>
  );
}

export default function Apod() {
  const [apod, setApod] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [imgLoaded, setImgLoaded] = useState(false);
  const dateInputRef = useRef(null);

  const [archive, setArchive] = useState([]);
  const [archiveDays, setArchiveDays] = useState(10);
  const [archiveLoading, setArchiveLoading] = useState(false);
  const [modalItem, setModalItem] = useState(null);

  useEffect(() => {
    setLoading(true);
    setImgLoaded(false);

    fetchApod(selectedDate)
      .then((data) => {
        setApod(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [selectedDate]);

  useEffect(() => {
    setArchiveLoading(true);

    const start = getDateDaysAgo(archiveDays);
    const end = getDateDaysAgo(1);

    fetchRecentApods(start, end)
      .then((data) => {
        setArchive(data.filter(item => item.media_type === "image"));
        setArchiveLoading(false);
      })
      .catch(() => setArchiveLoading(false));
  }, [archiveDays]);

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


  if (loading) {
    return (
      <section className="max-w-screen-lg mx-auto px-6 py-16 text-muted">
        Loading Astronomy Picture of the Day…
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-screen-lg mx-auto px-6 py-16 text-red-400">
        {error}
      </section>
    );
  }

  const credit = extractCredit(apod.explanation);

  return (
    <div>
      <section className="bg-space min-h-screen text-white px-6 py-16">
        <div className="max-w-4xl mx-auto ">
          <div className="mt-6 text-sm text-muted">
            {apod.date}
          </div>
          <div className="flex justify-between mb-10">

            <h1 className="text-3xl font-semibold mb-4">
              Astronomy Picture of the Day
            </h1>

            <div className="relative" >
              <input
                type="date"
                value={selectedDate}
                max={new Date().toISOString().split("T")[0]}
                onChange={(e) => setSelectedDate(e.target.value)}
                ref={dateInputRef}
                className="bg-spaceCard border border-white/10 rounded-lg px-4 py-2 pr-6 text-sm text-white focus:outline-none focus:border-[var(--text-muted)] appearance-none cursor-pointer"
                onClick={() => dateInputRef.current?.showPicker?.()} />
              <img
                src={calendar}
                alt="Select Date"
                className="absolute right-3 top-1/2 -translate-y-[75%] w-5 h-5 cursor-pointer rounded-none border-none"
                onClick={() => dateInputRef.current?.showPicker?.()} />
            </div>

          </div>

          <div className="relative">
            {!imgLoaded && <ImageLoader />}

            {apod.media_type === "image" ? (
              <img src={apod.hdurl || apod.url} alt={apod.title} onLoad={() => setImgLoaded(true)}
                className={`rounded-xl border border-white/10 transition-opacity duration-700 ease-out ${imgLoaded ? "opacity-100" : "opacity-0"}`} />
            ) : (
              <iframe src={apod.url} title={apod.title} onLoad={() => setImgLoaded(true)}
                className="w-full h-[500px] rounded-xl border border-white/10" />
            )}
          </div>

          <div className="flex flex-col items-center mb-8">
            <h2 className="text-3xl mt-5 tracking-wide text-center">
              {apod.title}
            </h2>
            <div className="w-20 h-1 bg-[var(--accent)] rounded-full mt-4" />

            <div className="mt-6 text-sm text-muted">
              {apod.date} · © {apod.copyright || "NASA"}
            </div>
          </div>

          <p className="mt-8 text-muted leading-relaxed max-w-3xl">
            {apod.explanation}
          </p>

          {/* TODO: */}
          {/* add link to img */}
          {/* video */}

        </div>
      </section>


      <section className="mt-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold">
            Explore Archive - Recent APODs
          </h2>

          <div className="w-20 h-1 bg-[var(--accent)] rounded-full mt-3  mb-8" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {archive.map((item) => (
              <ArchiveCard key={item.date} item={item} onClick={setModalItem} />
            ))}
          </div>

          <div className="flex justify-center mt-10">
            <button onClick={() => setArchiveDays((prev) => prev + 3)}
              className="px-6 py-2 border border-white/10 rounded-lg text-sm text-white hover:border-[var(--accent)] transition">
              Load more
            </button>
          </div>
        </div>
      </section>


      {modalItem && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
          onClick={() => setModalItem(null)}>
          <div className="bg-spaceModal rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto no-scrollbar relative p-8"
            onClick={(e) => e.stopPropagation()}>

            <img src={modalItem.url} alt={modalItem.title}
              className="w-full rounded-xl border border-white/10 mb-4 mt-2" />


            <h2 className="text-2xl font-semibold mb-2">{modalItem.title}</h2>

            <p className="text-sm text-muted">{modalItem.date}</p>

            <div className="text-sm text-muted">
              © {modalItem.copyright || "NASA"}
            </div>

            <p className="mt-4 text-muted">{modalItem.explanation}</p>
            <button onClick={() => setModalItem(null)}
              className="absolute top-3 right-3 pr-2 text-white text-2xl hover:text-accent">
              &times;
            </button>
          </div>
        </div>
      )}


    </div>
  );
}
