import { LazyLoadImage } from "react-lazy-load-image-component";

export default function InfoSection() {
  const articles = [
    {
      title: "Pick ’Em",
      number: "01",
      colorTheme: "lgreen",
      src: "https://bowery.co/wp-content/uploads/2023/03/illustration-step01.svg",
      alt: "Magic leaf",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Stack ’Em",
      number: "02",
      colorTheme: "amber",
      src: "https://bowery.co/wp-content/uploads/2023/03/illustration-step02.svg",
      alt: "Carrot",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Track ’Em",
      number: "03",
      colorTheme: "rose",
      src: "https://bowery.co/wp-content/uploads/2023/03/illustration-step03.svg",
      alt: "Strawberry",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta modi cum maiores vitae ipsa aliquid hic veritatis quam error. Nesciunt ratione in repudiandae obcaecati adipisci quo culpa reprehenderit eaque?",
    },
    {
      title: "Pack ’Em",
      number: "04",
      colorTheme: "green",
      src: "https://bowery.co/wp-content/uploads/2023/03/illustration-step04.svg",
      alt: "Split illustration of earth",
      text: " Once the crops are at peak perfection, BoweryOS sends our modern farmers our favorite signal; it's harvest time. Our greens are harvested at the exact right moment and shipped to local shelves in as little as 24 hours.",
    },
  ];

  const colorThemes = {
    lgreen: "bg-green-600 text-green-300",
    green: "bg-green-800 text-green-300",
    amber: "bg-amber-800 text-amber-300",
    blue: "bg-blue-800 text-blue-300",
    rose: "bg-rose-800 text-rose-300",
  };

  return (
    <section className="bg-stone-100 relative w-screen h-screen overflow-hidden">
      <div className="px-12 py-8 flex justify-center items-center flex-col w-full h-full">
        {articles.map((article) => (
          <article
            key={article.number}
            className={`flex flex-col justify-between group w-full h-40 ${
              colorThemes[article.colorTheme]
            } rounded-3xl transition-all duration-500 hover:h-full py-10 px-8`}
          >
            <div className="justify-between transition-all duration-500 flex items-start">
              <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
                {article.title}
              </h1>
              <p
                className={`font-normal 
              } font-libre tracking-tight text-white text-4xl`}
              >
                {article.number}
              </p>
            </div>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-row items-end justify-between">
              <p
                className={`text-lg font-montserrat tracking-wider font-medium w-96 ${
                  colorThemes[article.colorTheme]
                } `}
              >
                {article.text}
              </p>
              <figure>
                <LazyLoadImage
                  src={article.src}
                  alt={article.alt}
                  className="w-full h-full"
                />
              </figure>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
