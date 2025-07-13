import React, { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const data = {
      email: e.target.email.value,
      assunto: e.target.assunto.value,
      mensagem: e.target.mensagem.value,
    };
    
    try {
      const response = await fetch('http://localhost:3000/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (response.ok) {
        console.log('Email enviado com sucesso!');
        setEmailSubmitted(true);
      } else {
        throw new Error('Erro ao enviar email');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro ao enviar mensagem. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Seja Bem-Vindo. Aguardo o seu contato</h5>
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
              <label htmlFor="assunto" className="text-white block text-sm mb-2 font-medium">
                Assunto
              </label>
              <input
                name="assunto"
                type="text"
                id="assunto"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite algo..."
              />
            </div>
            <div className="mb-6">
              <label htmlFor="mensagem" className="text-white block text-sm mb-2 font-medium">
                Mensagem
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                rows="4"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Digite algo..."
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-primary-500 hover:bg-primary-600 bg-fuchsia-600 text-white font-medium py-2.5 px-5 rounded-lg w-full disabled:opacity-50"
            >
              {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;