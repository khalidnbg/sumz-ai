import { Link } from "react-router-dom";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <Link to={"/"} className="text-[25px] font-bold">
          <span className="colors_gradient">Nbg</span>Sumz
        </Link>
        <div className="flex justify-between items-center gap-4">
          <Link to="/about">About us</Link>{" "}
          <button
            type="button"
            onClick={() =>
              window.open("https://github.com/khalidnbg", "_blank")
            }
            className="black_btn">
            GitHub
          </button>
        </div>
      </nav>

      <h1 className="head_text">
        Dive into Knowledge with <br className="max-md:hidden" />
        <span className="colors_gradient ">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Uncover Insights Faster with Summize, <br className="max-md:hidden" />
        an AI-powered Article Summarizer
      </h2>
    </header>
  );
};

export default Hero;
