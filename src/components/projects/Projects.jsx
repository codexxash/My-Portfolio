import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Weather App",
    description:
      "Built a weather application using React.js, demonstrating skills in front-end development and API integration. Employed Axios for efficient data fetching from a RESTful weather API, handling asynchronous requests and JSON responses. Utilized React components and state management to dynamically render weather data, ensuring a responsive and interactive user interface.",
    tech: ["HTML", "CSS", "JavaScript", "React"],
    github: "https://github.com/codexxash/Weather-App",
  },
  {
  title: "PortfolioMint",
  description:
    "Developed a modern portfolio builder platform that helps users create and showcase professional portfolios with a clean and responsive interface. Focused on component-based architecture, responsive design, and an intuitive user experience.",
  tech: ["React", "Tailwind CSS", "JavaScript"],
  github: "https://github.com/codexxash/portfoliomint",
},
  {
  title: "OS Interface Project",
  description:
    "Created a browser-based operating system style interface using HTML, CSS, and JavaScript. Implemented interactive UI features such as window management, navigation, and dynamic user interactions through DOM manipulation. Focused on clean layout design and responsive behavior to simulate a desktop-like experience within the browser.",
  tech: ["HTML", "CSS", "JavaScript"],
  github: "YOUR_GITHUB_LINK",
  live: "https://github.com/codexxash/Operating-system",
},
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="pt-32 px-6 text-center"
    >
      <h2 className="text-3xl font-bold uppercase text-[#454544]
dark:text-[#CECDF6]">
        Projects
      </h2>

      <div
        className="
          mt-8
          grid
          grid-cols-1
          lg:grid-cols-3
          gap-8
          max-w-6xl
          mx-auto
        "
      >
        {projects.map((project) => (
          <div
            key={project.title}
            className="
            flex
            flex-col
            items-center
               background: #23283f;
              shadow-[0_0_50px_rgba(0,0,0,0.2)]
              p-6
              transition-transform
              duration-300
              hover:-translate-y-2
            "
          >
            <h3
              className="
                text-2xl
                font-bold
                text-[#454544]
dark:text-[#CECDF6]
                mb-6
              "
            >
              {project.title}
            </h3>

            <p
              className="
               text-[#454544]
dark:text-[#CECDF6]
                leading-tight
                text-md
              "
            >
              {project.description}
            </p>

            <div
              className="
                flex
                flex-wrap
                justify-center
                gap-3
                mt-4
                font-semibold
              "
            >
              {project.tech.map((item) => (
                <span
                  key={item}
                  className="text-[#454544]
dark:text-[#CECDF6]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-7">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  text-3xl
                 text-[#454544]
                 dark:text-[#CECDF6]
                  hover:text-[#91A1D9]
                  transition
                "
              >
                <FaGithub />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}