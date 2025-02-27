import {bgHeading} from "@assets/images";

function HeadingSession() {
  return (
    <>
      <section>
        <div className="px-3 mx-auto max-w-full">
          <div className="grid items-center grid-cols-1 gap-10 lg:grid-cols-2  bg-gray-100">
            <div className="text-center py-4  order-2 lg:order-1">
              <h3 className="text-xl sm:text-2xl lg:text-2xl pb-6 font-semibold  text-primary">
                The Perfect Skincare
              </h3>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl pb-4 font-roboto font-semibold text-black">
                Care for Your Skin
              </h1>
              <h1 className="text-3xl sm:text-4xl lg:text-4xl pb-4 font-roboto font-semibold text-black">
                Care for Your Beauty
              </h1>
              <p className="text-sm sm:text-base lg:text-xl pb-6 mx-0 text-gray-500">
                Made using clean, non-toxic ingredients, our products are
                designed for everyone.
              </p>
              <button
                type="button"
                className="inline-flex items-center justify-center px-12 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-black border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-primary-brightness cursor-pointer"
              >
                Shop Now
              </button>
            </div>

            <div className="overflow-hidden order-1 lg:order-1">
              <img className="w-full transition-all duration-300 hover:scale-125" src={bgHeading} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default HeadingSession;
