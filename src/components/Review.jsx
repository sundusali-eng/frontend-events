import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Hassan",
    text: "Eventify made our Nikkah ceremony absolutely perfect. Everything was organized professionally.",
  },
  {
    name: "Amina Ali",
    text: "The graduation event was amazing. The team handled every detail perfectly.",
  },
  {
    name: "Mohamed Yusuf",
    text: "Excellent service! Our conference was successful thanks to their organization.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-5">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold text-black">
            What Our Clients Say
          </h2>

          <p className="text-gray-900 mt-4">
            Don't just take our word for it — hear from our satisfied clients.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-8 rounded-xl shadow-md hover:shadow-xl transition"
            >
              <div className="flex justify-center gap-1 mb-4 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} fill="currentColor" size={18} />
                ))}
              </div>

              <p className="text-gray-900 italic text-center">
                "{item.text}"
              </p>

              <h3 className="mt-6 text-center font-semibold text-gray-900">
                {item.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}