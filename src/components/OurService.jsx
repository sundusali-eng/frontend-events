import {
  Heart,
  GraduationCap,
  Cake,
  Briefcase,
  Music,
  Camera,
} from "lucide-react";

const services = [
  {
    icon: <Heart size={40} />,
    title: "Nikkah Events",
    description:
      "Plan and manage beautiful Nikkah ceremonies with complete event coordination.",
  },
  {
    icon: <GraduationCap size={40} />,
    title: "Graduation Events",
    description:
      "Celebrate academic achievements with memorable graduation ceremonies.",
  },
  {
    icon: <Cake size={40} />,
    title: "Birthday Parties",
    description:
      "Create unforgettable birthday celebrations for all ages.",
  },
  {
    icon: <Briefcase size={40} />,
    title: "Conference Events",
    description:
      "Professional conferences, seminars, and business meetings management.",
  },
  {
    icon: <Music size={40} />,
    title: "Concert Events",
    description:
      "Music concerts and entertainment events with full organization.",
  },
  {
    icon: <Camera size={40} />,
    title: "Photography & Video",
    description:
      "Capture every special moment with professional photography and videography.",
  },
];

export default function Services() {
  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-5">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-gray-600">
            Our Services
          </h2>

          <p className="text-gray-800 mt-4 max-w-2xl mx-auto">
            We provide professional event management services
            to make every celebration memorable and successful.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-center"
            >
              <div className="flex justify-center text-green-600 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-800 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}