export default function InfoSection() {
  return (
    <section className="bg-stone-100 relative w-screen h-screen overflow-hidden">
      <div className="px-12 py-8 flex justify-center items-center flex-col w-full h-full">
        <article className="flex flex-col justify-between group w-full h-72 bg-green-500 rounded-3xl transition-all duration-500 hover:h-full py-10 px-8">
          <div className="justify-between transition-all duration-500 flex items-start">
            <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
              Pick &rsquo;Em
            </h1>
            <p className="font-normal font-libre tracking-tight text-white text-4xl">
              01
            </p>
          </div>
          <div
            className={`group-hover:block hidden transition-all group-hover:flex flex-row items-center justify-between`}
          >
            <p className="text-white text-lg font-montserrat font-normal tracking-wide w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              soluta modi cum maiores vitae ipsa aliquid hic veritatis quam
              error. Nesciunt ratione in repudiandae obcaecati adipisci quo
              culpa reprehenderit eaque?
            </p>
            <figure>
              <img
                src="https://bowery.co/wp-content/uploads/2023/03/illustration-step01.svg"
                alt=""
                className="w-full h-full"
              />
            </figure>
          </div>
        </article>
        <article className="flex flex-col justify-between group w-full h-44 bg-amber-500 rounded-3xl hover:h-full transition-all duration-500 py-10 px-8">
          <div className="justify-between transition-all duration-500 flex items-start">
            <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
              Stack &rsquo;Em
            </h1>
            <p className="font-normal font-libre tracking-tight text-white text-4xl">
              02
            </p>
          </div>
          <div
            className={`group-hover:block hidden transition-all group-hover:flex flex-row items-center justify-between`}
          >
            <p className="text-white text-lg font-libre w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              soluta modi cum maiores vitae ipsa aliquid hic veritatis quam
              error. Nesciunt ratione in repudiandae obcaecati adipisci quo
              culpa reprehenderit eaque?
            </p>
            <figure>
              <img
                src="https://bowery.co/wp-content/uploads/2023/03/illustration-step02.svg"
                alt=""
                className="w-full h-full"
              />
            </figure>
          </div>
        </article>
        <article className="flex flex-col justify-between group w-full h-40 bg-rose-900 rounded-3xl hover:h-full transition-all duration-500 py-6 px-8">
          <div className="justify-between transition-all duration-500 flex items-start">
            <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
              Track &rsquo;Em
            </h1>
            <p className="font-normal font-libre tracking-tight text-white text-4xl">
              03
            </p>
          </div>
          <div
            className={`group-hover:block hidden transition-all group-hover:flex flex-row items-center justify-between`}
          >
            <p className="text-white text-lg font-libre w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              soluta modi cum maiores vitae ipsa aliquid hic veritatis quam
              error. Nesciunt ratione in repudiandae obcaecati adipisci quo
              culpa reprehenderit eaque?
            </p>
            <figure>
              <img
                src="https://bowery.co/wp-content/uploads/2023/03/illustration-step03.svg"
                alt=""
                className="w-full h-full"
              />
            </figure>
          </div>
        </article>

        <article className="flex flex-col justify-between group w-full h-64 bg-green-700 rounded-3xl hover:h-full transition-all duration-500 py-12 px-8">
          <div className="justify-between transition-all duration-500 flex items-start">
            <h1 className="font-extrabold font-libre tracking-tight text-white text-5xl">
              Pack &rsquo;Em
            </h1>
            <p className="font-normal font-libre tracking-tight text-white text-4xl">
              03
            </p>
          </div>
          <div
            className={`group-hover:block hidden transition-all group-hover:flex flex-row items-center justify-between`}
          >
            <p className="text-white text-lg font-libre w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              soluta modi cum maiores vitae ipsa aliquid hic veritatis quam
              error. Nesciunt ratione in repudiandae obcaecati adipisci quo
              culpa reprehenderit eaque?
            </p>
            <figure>
              <img
                src="https://bowery.co/wp-content/uploads/2023/03/illustration-step04.svg"
                alt=""
                className="w-full h-full"
              />
            </figure>
          </div>
        </article>
      </div>
    </section>
  );
}
