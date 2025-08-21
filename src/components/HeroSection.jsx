import { ArrowDown } from "lucide-react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Samuel
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              king
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            a Full-Stack Software Developer. I build scalable, user-friendly
            applications with clean code and modern design. 🚀 Always learning,
            always creating — let’s build something great together!
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <div className="">
              <div className="flex space-x-4 justify-center">
                <a href="www.linkedin.com/in/kingdev001" target="_blank">
                  <FaLinkedin className=" w-7 h-7 text-6xl " />
                </a>
                <a href="https://x.com/dev_king001" target="_blank">
                  <FaSquareXTwitter className=" w-7 h-7 text-6xl " />
                </a>

                <a href="https://github.com/mrking9961" target="_blank">
                  <FaGithub className=" w-7 h-7 text-6xl " />
                </a>
                <a href="wa.link/k9in1r" target="_blank">
                  <FaWhatsapp className=" w-7 h-7 text-6xl " />
                </a>
              </div>
              <div className="mt-8">
                <a href="#projects" className="cosmic-button">
                  View My Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
