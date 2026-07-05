import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-[90vh]">
      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30"
        alt="Event"
        className="w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Discover Amazing Events
          </h1>

          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            Join conferences, workshops, concerts and networking events near you.
          </p>
        <Link to='/event'>
          <button className="bg-green-500 px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition">
            View Events
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;