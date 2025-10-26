import "@fontsource/poppins";
import "@fontsource/montserrat";

export default function Stats() {
  const stats = [
    { id: 1, value: "250k+", label: "Students taught" },
    { id: 2, value: "20+", label: "Instructors" },
{ id: 3, value: "1M+", label: "YouTube Subs." },
  ];

  return (
    <div className=" py-16 text-white select-none">
      <div
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
        style={{ fontFamily: "Poppins" }}
      >
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-4xl md:text-5xl font-extrabold text-teal-400">
              {item.value}
            </h3>
            <p className="text-gray-300 text-lg mt-2">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
