const Dev = () => {
  return (
    <div className="max-w-3xl mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold text-green-600 mb-4">Meet the Developer</h1>

      <p className="text-gray-600 mb-6">
        👋 Hi, I'm <span className="text-green-700 font-medium">Praneeth</span>, the developer behind <strong>Grocify</strong>.
        I enjoy building clean, fast, and functional web applications with modern tools like
        <span className="text-green-700 font-medium"> React</span>, <span className="text-green-700 font-medium">TypeScript</span>, and <span className="text-green-700 font-medium">Tailwind CSS</span>.
      </p>

      <p className="text-gray-600 mb-6">
        This project was built as a simple yet scalable grocery store UI, with routing, component-based design, and room for features like authentication and cart logic.
      </p>

      <div className="flex justify-center gap-6 mt-8">
        <a
          href="https://github.com/codeneeth"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-green-600 underline"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/your-profile/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gray-700 hover:text-green-600 underline"
        >
          LinkedIn
        </a>
        <a
          href="mailto:youremail@example.com"
          className="text-sm text-gray-700 hover:text-green-600 underline"
        >
          Email
        </a>
      </div>
    </div>
  );
};

export default Dev;