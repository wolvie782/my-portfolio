import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const skills = {
  Frontend: [
    "HTML",
    "CSS",
    "Tailwind",
    "MUI",
    "Javascript",
    "Typescript",
    "React JS",
    "Next JS",
  ],
  Backend: [
    "Node JS",
    "Express JS",
    "Redis",
    "Next Auth",
    "JWT Tokken",
    "Passport",
    "MongoDB",
    "PostgreSQL",
  ],
  Devops: ["Docker", "AWS", "Git","GCP"],
  "Additional Skills": [
    "GSAP",
    "Framer motion",
    "Spline",
    "Redux Toolkit",
    "Recoil",
    "Zustand",
    "Firestore",
    "Prisma",
    "Stripe",
  ],
};

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Skills() {
  useGSAP(() => {
    const animation = gsap.timeline({
      defaults: { opacity: 0, y: "60vh" },
      scrollTrigger: {
        trigger: ".skills",
        start: "top 50%",
        end: "bottom 90%",
        scrub: 1,
        // markers: true,
      },
    });

    animation.from(".field", {
      duration: 3,
      y: "10vh",
      opacity: 0,
      ease: "sine.in",
      stagger: 0.7,
    });
  });

  return (
    <div
      id="skills"
      className=" skills h-full py-[10vh] lg:py-[15vh] flex flex-col justify-start items-center gap-[5vh] lg:gap-[15vh]"
    >
      {/* Main Heading */}
      <h1 className=" heading text-3xl text-slate-500 dark:text-slate-200 font-semibold">
        What I Know
      </h1>

      {/* Skills Container */}
      <div className="skillsList flex flex-col lg:flex-row justify-center items-center gap-8">
        {Object.keys(skills).map((field, index) => (
          <div
            key={index}
            className="field p-5 h-[35vh] md:h-[50vh] lg:h-[35vh] w-[60vw] lg:w-[15vw] rounded-2xl bg-[#CDD1FF] flex flex-col justify-start items-start gap-4"
          >
            {/* Field Heading */}
            <h1 className=" fieldHeading text-xl font-semibold tracking-tighter">
              {field}
            </h1>

            {/* Field Skills */}
            <div className="skillList flex flex-wrap gap-2">
              {skills[field].map((skill) => (
                <p
                  key={skill}
                  className=" py-1 px-3 rounded-lg text-sm font-normal tracking-tight bg-[#ede8f5] text-[#383e7b] dark:bg-slate-700 dark:text-white"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
