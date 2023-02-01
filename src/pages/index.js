import Image from "next/image";
import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch(
    "https://qyydnh2xz9.execute-api.us-west-1.amazonaws.com/prod/products"
  );

  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};

const Home = ({ data }) => {
  return (
    <div className="flex d-flex w-full">
      {data.products.map((curEle) => {
        return (
          <div  className="w-full" key={curEle.fid}>
            <section className=" flex d-flex  text-gray-600 body-font  ">
              <div className=" container px-5 py-24 mx-auto ">
                <div className="">
                  <div className="">
                    <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden grid-cols-3 cardcss">
                      <Image
                        className="lg:h-48 md:h-36 w-full object-cover object-center"
                        width={550}
                        height={337}
                        src={curEle.logo}
                        alt="blog"
                      />
                      <div className="p-6">
                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                          Country {curEle.location_name}
                        </h2>
                        <Link href={`/blog/${curEle.lid}`}>
                          {" "}
                          <h1 className="title-font text-lg w-full font-medium text-gray-900 mb-3">
                            {curEle.lid}{" "}
                          </h1>
                        </Link>
                        <p className="leading-relaxed mb-3">
                          {curEle.address_1}
                        </p>
                        <div className="flex items-center flex-wrap ">
                          <p className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
                            Learn More {curEle.address_1}
                            <svg
                              className="w-4 h-4 ml-2"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="33"
                              fill="none"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            >
                              <path d="M5 12h14"></path>
                              <path d="M12 5l7 7-7 7"></path>
                            </svg>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div></div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
