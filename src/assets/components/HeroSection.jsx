
import { Link } from "react-router-dom";
import ReactLogo from "../img/eu.jpg"


const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start transition-opacity duration-500 opacity-100 scale-100">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello, I&apos;m{""} <br /> Full Stack Developer
            </span>
            <br />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Sou estudante de Ciências da Computação e desenvolvedor Web3, apaixonado por criar aplicações interativas, descentralizadas e orientadas por dados.
            Como fundador da Blockchaintech Brazil, estou desenvolvendo DApps que utilizam a tecnologia blockchain como base para inovação e geração de valor.
            Meu stack de tecnologias inclui Solidity, Python, JavaScript, Node.js, React, Tailwind, HTML e CSS.
            Estou motivado para colaborar em um ambiente que me desafie a crescer e explorar novas tecnologias.
          </p>

          <div>
            <Link
              to="/"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-200 text-white"
            >
              Contrate-me
            </Link>
            <a
              href="/cv/resume.pdf"
              download
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-purple-500 to-pink-500 hover:bg-slate-800 text-white mt-3"
            >
              <span className="block bg-[#000000] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-4 place-self-center mt-4 lg:mt-0 transition-opacity duration-500 opacity-100 scale-100">
          <div className="rounded-full bg-[#ffffff] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <img
              src={ReactLogo}
              alt="hero"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[400px] h-[400px] object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
