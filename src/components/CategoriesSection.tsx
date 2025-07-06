import { categories } from "../data/categories";

const CategoriesSection = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Shop by Categories</h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition cursor-pointer text-center"
            >
              <img
                src={cat.image}
                alt={cat.name}
                className="w-full h-24 object-cover rounded-lg mb-4"
              />
              <h3 className="text-sm font-semibold text-gray-700">{cat.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
