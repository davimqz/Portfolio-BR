
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [

  {
  id: 1,
  title: "Landing Page - VirtualR",
  description: "Landing Page criada a partir de um bootcamp",
  image: "/projects/virtualr.png", 
  tag: ["Tudo", "Web"],
  gitUrl: "https://github.com/davimqz/VirtualR-LP",
  previewUrl: "https://virtual-r-lp-one.vercel.app/",
  },
  {
  id: 2,
  title: "Portfólio Pessoal",
  description: "Portfólio ",
  image: "/projects/portfolio.png", 
  tag: ["Tudo", "Web"],
  gitUrl: "https://github.com/davimqz/Portfolio-BR",
  previewUrl: "https://portfolio-br-eosin.vercel.app/",
  },
  {
  id: 3,
  title: "PetID",
  description: "Aplicação descentralizada que transforma o seu pet em um RWA",
  image: "/projects/petid-cover.png", 
  tag: ["Tudo", "Web3"],
  gitUrl: "https://github.com/BlockChainTechBrazil/PetID-ICP",
  previewUrl: "https://pbuau-rqaaa-aaaah-qqgga-cai.icp0.io/",
  },
  {
  id: 4,
  title: "GIRO",
  description: "Aplicação que utiliza tokens nativos para fomentar a economia circular",
  image: "/projects/giro-cover.png", 
  tag: ["Tudo", "Web3"],
  gitUrl: "https://github.com/davimqz/RecityEC",
  previewUrl: "https://recityec.vercel.app/",
  },
  {
  id: 5,
  title: "Academia Do Futebol",
  description: "Landing Page da plataforma que tokeniza jovens promessas do futebol",
  image: "/projects/oficina-cover.png", 
  tag: ["Tudo", "Web3"],
  gitUrl: "https://github.com/davimqz/OficinaDoFutebol",
  previewUrl: "https://oficina-do-futebol-7zle32r7a-davimqzs-projects-87ed2724.vercel.app/",
  },
  {
  id: 6,
  title: "MulheresSA",
  description: "Landing Page da plataforma de crowdfunding para projetos sociais da organização sem fins lucrativos MulheresSA",
  image: "/projects/cover-mulheressa.png", 
  tag: ["Tudo", "Web3"],
  gitUrl: "https://github.com/BlockChainTechBrazil/MulheresSA",
  previewUrl: "https://mulheressa.blockchaintechbrazil.workers.dev/",
  },
  {
  id: 7,
  title: "VibeChain",
  description: "Landing Page da plataforma de crowdfunding para o Hospital do Câncer de Pernambuco",
  image: "/projects/vibechain-cover.png", 
  tag: ["Tudo", "Web3"],
  gitUrl: "https://github.com/alexjou/vibechain",
  previewUrl: "https://alexjou.github.io/vibechain/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Tudo"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Full Stack"
          isSelected={tag === "Full Stack"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web3"
          isSelected={tag === "web3"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;