import React from "react";

const About = () => {
  return (
    <div className="min-h-[calc(100vh-72px)] max-w-7xl mx-auto px-6 py-16">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          About ToyTopia
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Where imagination meets endless fun.
        </p>
      </section>

      {/* Who We Are */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Who We Are
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          ToyTopia is a world of wonder dedicated to bringing joy, creativity,
          and imagination into the lives of children. Founded in 2020, ToyTopia
          has grown from a small passion project into one of the most trusted
          destinations for high-quality toys and learning products.
        </p>
      </section>

      {/* Mission */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our mission is simple:{" "}
          <span className="font-semibold text-gray-800">
            to inspire creativity, innovation, and happiness through play.
          </span>{" "}
          We believe toys should do more than entertain—they should help kids
          learn, grow, and explore new possibilities.
        </p>
      </section>

      {/* Values Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Core Values
        </h2>

        <div className="space-y-4 text-lg text-gray-600">
          <div className="flex items-start gap-3">
            <span className="text-yellow-500 text-2xl">⭐</span>
            <p>
              <span className="font-semibold text-gray-800">Quality First</span>{" "}
              – Every toy meets the highest safety and durability standards.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-pink-500 text-2xl">🌈</span>
            <p>
              <span className="font-semibold text-gray-800">
                Creativity & Imagination
              </span>{" "}
              – Our products encourage kids to think, create, and explore.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-blue-500 text-2xl">🤝</span>
            <p>
              <span className="font-semibold text-gray-800">
                Customer Trust
              </span>{" "}
              – We put parents and children at the center of everything we do.
            </p>
          </div>

          <div className="flex items-start gap-3">
            <span className="text-green-600 text-2xl">🌍</span>
            <p>
              <span className="font-semibold text-gray-800">
                Sustainability
              </span>{" "}
              – We aim to use eco-friendly materials whenever possible.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Meet the Team
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our team is a passionate group of toy-lovers, designers, educators,
          and dreamers. Together, we craft products that spark joy and create
          unforgettable childhood memories.
        </p>
      </section>

      {/* Closing Section */}
      <section className="text-center mt-16">
        <h3 className="text-2xl font-semibold text-gray-800 mb-2">
          Welcome to the World of ToyTopia!
        </h3>
        <p className="text-gray-600 text-lg">
          Join us in creating magical moments—one toy at a time.
        </p>
      </section>
    </div>
  );
};

export default About;
