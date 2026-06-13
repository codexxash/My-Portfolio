const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Tailwind",
  "Bootstrap",
  "Git",
  "Github",
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        py-60
        flex
        flex-col
        items-center
        justify-center
      "
    >
      <h2
        className="
          text-3xl
          font-bold
          uppercase
          text-[#454544]
dark:text-[#CECDF6]
          mb-12
        "
      >
        Skills
      </h2>

      <div
        className="
          flex
          flex-wrap
          justify-center
          gap-6
          max-w-5xl
        "
      >
        {skills.map((skill) => (
          <div
            key={skill}
            className="
              px-8
              py-3
              font-semibold
              text-xl
              text-[#454544]
dark:text-[#CECDF6]
              shadow-[1px_1px_3px_rgba(0,0,0,0.4)]
              transition-all
              duration-300
              cursor-pointer
              hover:scale-110
              hover:bg-[#555]
              
            "
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}