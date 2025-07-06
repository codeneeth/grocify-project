import { ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <section className="bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Fresh Groceries <br /> Delivered to Your Doorstep
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Get the best quality fruits, vegetables, dairy and more — all in one place.
            Fast delivery. No compromise.
          </p>
          <button className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition text-lg font-medium">
            Shop Now <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Image */}
        <div className="w-full">
          <img
            src="/grocery-image.png"
            alt="Grocery delivery"
            className="w-full h-auto rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
