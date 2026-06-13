import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="pt- text-center text-[#454544]
dark:text-[#CECDF6]"
    >
      <h2 className="text-3xl font-bold uppercase mb-10">
        Contact
      </h2>

      <form
        action="https://api.web3forms.com/submit"
        method="POST"
        className="flex flex-col items-center gap-8"
      >
        <input
          type="hidden"
          name="access_key"
          value={import.meta.env.VITE_WEB3FORMS_KEY}
        />

        <div className="w-full max-w-md">
          <label className="block text-xl mb-6">
            Name
          </label>

          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            required
            className="
              w-full
              bg-transparent
              border-b-2
              rounded
              border-gray-500
              outline-none
              pb-2
              text-sm
              placeholder:text-gray-400
            "
          />
        </div>

        <div className="w-full max-w-md">
          <label className="block text-xl mb-6">
            Email
          </label>

          <input
            type="email"
            name="email"
            placeholder="Enter your email address"
            required
            className="
              w-full
              bg-transparent
              border-b-2
              rounded
              border-gray-500
              outline-none
              pb-2
              text-sm
              placeholder:text-gray-400
            "
          />
        </div>

        <div className="w-full max-w-md">
          <label className="block text-xl mb-6">
            Message
          </label>

          <textarea
            rows="2"
            name="message"
            placeholder="Type your message here"
            required
            className="
              w-full
              bg-transparent
              border-b-2
              rounded
              border-gray-500
              outline-none
              resize-none
              text-sm
              placeholder:text-gray-400
            "
          />
        </div>

        <input
          type="checkbox"
          name="botcheck"
          className="hidden"
        />

        <button
          type="submit"
          className="
            mt-4
            border-2
            text-[#454544]
dark:text-[#CECDF6]
            px-8
            py-2
            text-xl
            font-medium
            transition-all
            hover:bg-[#0896f5]
            hover:text-white
          "
        >
          Submit
        </button>

        <div className="flex gap-8 text-xl mt-5">
          <a
            href="https://github.com/codexxash"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#063af5] transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/codexash/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#063af5] transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://x.com/Ashutos29563093"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#063af5] transition"
          >
            <FaTwitter />
          </a>
        </div>

        <p className="my-5 font-bold text-md">
          Created By Ashutosh
        </p>
      </form>
    </section>
  );
}