export default function Hero() {
  return (
    <section
      id="home"
      className="flex flex-col items-center pt-60 px-6"
    >
      <div className="text-center">
        <h1
          className="
            text-5xl
            md:text-7xl
            font-bold
           text-[#454544]
dark:text-[#CECDF6]
          "
        >
          Hi, I am{" "}
          <span className="text-[#454544]
dark:text-[#CECDF6]">
            Ashutosh Singh.
          </span>
        </h1>

        <h2
          className="
            mt-6
            text-2xl
            md:text-5xl
            font-bold
            text-[#454544]
dark:text-[#CECDF6]
          "
        >
          Aspiring Frontend Developer
        </h2>
      </div>

      <div className="mt-10">
        <a
          href="https://drive.google.com/file/d/1T9u_RjB7KgluMipdFdSwznZbF3nZ5JDG/view?usp=drivesdk"
          target="_blank"
          rel="noreferrer"
          className="
            border-2
            text-[#454544]
dark:text-[#CECDF6]
            px-8
            py-3
            text-xl
            text-[#454544]
dark:text-[#CECDF6]
            transition-all
            duration-300
            hover:bg-[#088dec]
            hover:text-white
          "
        >
          Resume
        </a>
      </div>
    </section>
  );
}