
import { skills } from '../../contants/index';

const Skills = () => {
  return (
    <div id="skills" className="flex flex-col justify-center items-center relative z-[1]">
      <div className="flex flex-col items-center justify-between w-full max-w-[1100px] gap-3">
        <div className="text-[42px] text-center font-semibold mt-5 text-[#ffffff]">Habilidades</div>
        <div className="w-full flex flex-wrap mt-[30px] gap-[30px] justify-center">
          {skills.map((skill) => (
            <div
              key={skill.title}
              className="w-full max-w-[500px] bg-[#1f1f1f] border border-purple-400 shadow-[0_4px_24px_rgba(23,92,230,0.15)] rounded-[16px] px-[36px] py-[18px]"
            >
              <h2 className="text-[28px] font-semibold text-[#a0a0a0] mb-5 text-center">
                {skill.title}
              </h2>
              <div className="flex justify-center flex-wrap gap-[12px] mb-5">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-[16px] font-normal text-[#ffffffcc] border border-[#ffffffcc] rounded-[12px] px-[16px] py-[12px] flex items-center justify-center gap-[8px]"
                  >
                    <img src={item.image} alt={item.name} className="w-[24px] h-[24px]" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
