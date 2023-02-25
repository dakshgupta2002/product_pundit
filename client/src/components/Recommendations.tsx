import { useState } from "react";

export default function Recommendations({ name = "product" }) {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: any) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section>
      <div className="max-w-screen-xl px-4 py-8 mx-auto sm:px-6 sm:py-12 lg:px-8">
        <header>
          <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">
            You may also like
          </h2>
        </header>

        <ul className="grid gap-4 mt-8 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src="https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=996&t=st=1677312825~exp=1677313425~hmac=a0f0c7bb1bf92ce9525183b61628b7b7382a214e0ebab0d3544b338cb660a119"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              {/* <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div> */}
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src="https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=996&t=st=1677312825~exp=1677313425~hmac=a0f0c7bb1bf92ce9525183b61628b7b7382a214e0ebab0d3544b338cb660a119"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              {/* <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div> */}
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src="https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=996&t=st=1677312825~exp=1677313425~hmac=a0f0c7bb1bf92ce9525183b61628b7b7382a214e0ebab0d3544b338cb660a119"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              {/* <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div> */}
            </a>
          </li>

          <li>
            <a href="#" className="block overflow-hidden group">
              <img
                src="https://img.freepik.com/free-vector/modern-coming-soon-poster-with-stay-tuned-message_1017-39310.jpg?w=996&t=st=1677312825~exp=1677313425~hmac=a0f0c7bb1bf92ce9525183b61628b7b7382a214e0ebab0d3544b338cb660a119"
                alt=""
                className="h-[350px] w-full object-cover transition duration-500 group-hover:scale-105 sm:h-[450px]"
              />

              {/* <div className="relative pt-3 bg-white">
                <h3 className="text-xs text-gray-700 group-hover:underline group-hover:underline-offset-4">
                  Basic Tee
                </h3>

                <p className="mt-2">
                  <span className="sr-only"> Regular Price </span>

                  <span className="tracking-wider text-gray-900">
                    {" "}
                    £24.00 GBP{" "}
                  </span>
                </p>
              </div> */}
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
