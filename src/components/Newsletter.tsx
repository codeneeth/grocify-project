
const Newsletter = () => {
  return (
    <section className="bg-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Stay Updated!</h2>
        <p className="text-gray-600 mb-6">
          Subscribe to our newsletter and get 10% off your first order.
        </p>
        <form className="flex flex-col sm:flex-row justify-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-full border border-gray-300 w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-green-600 hover:bg-green-700 text-white font-medium transition"
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
