import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Vamos nos conectar!</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          Atualmente estou em busca de novas oportunidades, minha caixa de entrada está sempre aberta.
            Seja para tirar uma dúvida ou apenas dizer oi, farei o possível para responder!
        </p>
        <div className="socials flex flex-row gap-4 text-white text-3xl">
          <a href="https://github.com/davimqz" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-primary-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/davi-oliveira-36063a357/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-primary-500 transition-colors duration-300" />
          </a>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email enviado com sucesso!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">Seu email</label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="exemplo@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Assunto
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite algo..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite algo..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 bg-fuchsia-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Enviar Mensagem
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
