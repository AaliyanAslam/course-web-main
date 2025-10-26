import "@fontsource/poppins";
import "@fontsource/montserrat";

export default function Stats() {
  const stats = [
    { id: 1, value: "250k+", label: "Students taught" },
    { id: 2, value: "20+", label: "Instructors" },
    { id: 3, value: "1M+", label: "YouTube Subs." },
  ];

  return (
    <div className="py-12 sm:py-16 md:py-20 lg:py-24 text-white select-none w-full">
      <div
        className="max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-10 md:gap-14 text-center px-4 sm:px-6 md:px-8"
        style={{ fontFamily: "Poppins" }}
      >
        {stats.map((item) => (
          <div
            key={item.id}
            className="flex flex-col items-center justify-center"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-teal-400">
              {item.value}
            </h3>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl mt-2 sm:mt-3">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
