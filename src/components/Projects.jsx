import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import { RiGithubFill } from "react-icons/ri";
import { useRecoilValue } from "recoil";
import { themeState } from "../store/atoms";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const [activeSection, setActiveSection] = useState(0);
  const theme = useRecoilValue(themeState);

  useGSAP(() => {
    const details = gsap.utils.toArray(
      ".desktopProjectDetails:not(:first-child)"
    );
    const photos = gsap.utils.toArray(".desktopProjectPic:not(:first-child)");

    gsap.set(photos, { yPercent: 101 });

    const allPhotos = gsap.utils.toArray(".desktopProjectPic");

    const fullDetails = gsap.utils.toArray(".desktopProjectDetails");

    let mm = gsap.matchMedia();

    mm.add("(min-width: 768px)", () => {
      // to update the background color as per the project theme on scroll
      fullDetails.forEach((detail, index) => {
        ScrollTrigger.create({
          trigger: detail,
          start: "top 80%",
          end: "bottom 50%",
          onToggle: (self) => {
            if (self.isActive) {
              setActiveSection(index);
            }
          },
        });
      });

      // To pin the right section with respect to gallery on scroll
      ScrollTrigger.create({
        trigger: ".projects",
        start: "top top",
        end: "bottom bottom",
        pin: ".right",
        // markers: true,
      });

      // to update the project pictures as we scroll through their details section
      details.forEach((detail, index) => {
        let headline = detail.querySelector("h1");
        let animation = gsap
          .timeline()
          .to(photos[index], { yPercent: 0 })
          .set(allPhotos[index], { autoAlpha: 0 });
        ScrollTrigger.create({
          trigger: headline,
          start: "top 80%",
          end: "top 50%",
          stagger: 3,
          animation: animation,
          scrub: true,
          // markers: true,
        });
      });
    });

    // End of useGSAP
  });

  const sectionColors = ["#EDE8F5", "#FAE1EE", "#FFEAE0", "#EDE8F5"];
  const sectionColorsDark = ["#334155", "#A0153E", "#9B3922", "#334155"];

  return (
    <div
      id="projects"
      className="projects w-full flex justify-center md:bg-inherit pb-[10vh] md:pb-[30vh]"
      style={{
        backgroundColor:
          theme && theme === "dark"
            ? sectionColorsDark[activeSection]
            : sectionColors[activeSection],
        transition: "background-color 1s ease",
      }}
    >
      <div className="left hidden md:hidden lg:flex w-1/2 flex-col justify-center items-end">
        {/* Bot AI - Project Details */}
        <div className="desktopProjectDetails dark:text-white w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white"
            href="https://bot-ai-24.vercel.app/"
            target="_blank"
          >
            bot-ai-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Bot AI, <br /> AI Assistant
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, Tailwind CSS, Recoil</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#8f96e6]  hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/bot-ai"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Ochi - Project Details */}
        <div className="desktopProjectDetails dark:text-white w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#ea99c0] hover:text-[#672c48] dark:text-fuchsia-300 dark:hover:text-white"
            href="https://ochi-24.vercel.app/"
            target="_blank"
          >
            ochi-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Ochi, <br /> Web Design
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, GSAP, Framer Motion</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#ea99c0] hover:bg-[#ea99c0] dark:hover:bg-[#ff6d99] hover:text-[#672c48] dark:text-fuchsia-300 dark:hover:text-white border border-[#ea99c0] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/ochi"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Foodbox - Project Details */}
        <div className="desktopProjectDetails dark:text-white w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#dda694] hover:text-[#764332] dark:text-[#e8bcae] dark:hover:text-white"
            href="https://foodbox-24.vercel.app/"
            target="_blank"
          >
            foodbox-24.vercel.com
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Foodbox, <br /> Food Delivery
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">Next JS, Prisma, Tailwind CSS</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#dda694] hover:bg-[#dda694] dark:hover:bg-[#ec6666] hover:text-[#764332] dark:text-orange-300 dark:hover:text-white border border-[#dda694] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/foodbox"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>

        {/* Countdown Timer - Project Details */}
        <div className="desktopProjectDetails dark:text-white w-[40%] h-screen px-3 mr-[5vw] flex flex-col justify-center items-start gap-4">
          {/* Project Live Link */}
          <a
            className=" text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white"
            href="https://timer-24.vercel.app/"
            target="_blank"
          >
            timer-24.vercel.app
          </a>

          {/* Project Name */}
          <h1 className=" projectTitle text-[2.5vw] font-medium">
            Timer, <br /> Countdown Timer
          </h1>

          {/* Tech Stack Used */}
          <p className=" techStack">React, Recoil, Spline 3D Model</p>

          {/* Github Repo Link */}
          <a
            className=" px-3 py-2 rounded-full text-[#8f96e6]  hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
            href="https://github.com/rp0777/countdown-timer"
            target="_blank"
          >
            code <RiGithubFill size={24} />
          </a>
        </div>
      </div>

      <div className="right hidden md:hidden w-full md:w-full lg:w-1/2 h-full md:h-full lg:h-screen lg:flex flex-col justify-center items-center lg:items-start">
        {/* Desktop Content */}
        <div className=" desktopProjectPics hidden md:hidden relative w-[60vh] h-[60vh] overflow-hidden lg:flex justify-start items-center rounded-[4rem]">
          {/* Bot AI - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[4rem] bg-[#CDD1FF] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
              src="/botai.png"
              alt=""
            />
          </div>

          {/* Ochi - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[4rem] bg-[#F9D2E5] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #ea99c0" }}
              src="/ochi.png"
              alt=""
            />
          </div>

          {/* Foodbox - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[4rem] bg-[#ffcdbd] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #dda694" }}
              src="/foodbox.png"
              alt=""
            />
          </div>

          {/* Countdown Timer - Project Picture */}
          <div className="desktopProjectPic absolute w-full px-[2vh] h-full rounded-[4rem] bg-[#CDD1FF] flex justify-center items-center">
            <img
              className=" object-cover rounded-3xl cursor-pointer"
              style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
              src="/timer.png"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Mobile Content */}
      <div className=" mobileContent dark:text-white md:mt-[30vh] flex w-full lg:hidden flex-col items-center justify-center gap-10 md:gap-[15vh]">
        {/* Bot AI - Mobile version */}
        <div className="botai flex flex-col md:w-[80vw] md:flex-row-reverse items-center justify-center md:justify-between gap-5 h-full">
          <div className="imageContainer w-[90vw] md:w-[40vw] px-[2vh] h-[50vh] md:h-[80vh] rounded-3xl bg-[#CDD1FF] flex justify-center items-center">
            <a href="https://bot-ai-24.vercel.app/" target="_blank">
              <img
                className=" object-cover rounded-xl cursor-pointer"
                style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
                src="/botai.png"
                alt=""
              />
            </a>
          </div>

          <div className="mobileProjectDetails flex flex-col justify-center items-center md:items-start gap-5">
            {/* Project Name */}
            <h1 className=" projectTitle text-4xl md:text-2xl text-center md:text-left font-medium">
              Bot AI, <br /> AI Assistant
            </h1>

            {/* Tech Stack Used */}
            <p className=" techStack md:text-sm">React, Tailwind CSS, Recoil</p>

            <div className=" flex justify-between items-center gap-5">
              {/* Project Live Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
                href="https://bot-ai-24.vercel.app/"
                target="_blank"
              >
                Live
              </a>

              {/* Github Repo Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
                href="https://github.com/rp0777/bot-ai"
                target="_blank"
              >
                code <RiGithubFill size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Ochi - Mobile version */}
        <div className="ochi flex flex-col md:w-[80vw] md:flex-row-reverse items-center justify-center md:justify-between gap-5 h-full">
          <div className="imageContainer w-[90vw] md:w-[40vw] px-[2vh] h-[50vh] md:h-[80vh] rounded-3xl bg-[#F9D2E5] flex justify-center items-center">
            <a href="https://ochi-24.vercel.app/" target="_blank">
              <img
                className=" object-cover rounded-xl cursor-pointer"
                style={{ boxShadow: "0 25px 25px 10px #ea99c0" }}
                src="/ochi.png"
                alt=""
              />
            </a>
          </div>

          <div className="mobileProjectDetails flex flex-col justify-center items-center md:items-start gap-5">
            {/* Project Name */}
            <h1 className=" projectTitle text-4xl md:text-2xl text-center md:text-left font-medium">
              Ochi, <br /> Design Agency
            </h1>

            {/* Tech Stack Used */}
            <p className=" techStack">React, GSAP, Framer Motion</p>

            <div className=" flex justify-between items-center gap-5">
              {/* Project Live Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#ea99c0] hover:bg-[#ea99c0] dark:hover:bg-[#ff6d99] hover:text-[#672c48] dark:text-fuchsia-300 dark:hover:text-white border border-[#ea99c0] border-solid flex justify-center items-center gap-2"
                href="https://ochi-24.vercel.app/"
                target="_blank"
              >
                Live
              </a>

              {/* Github Repo Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#ea99c0] hover:bg-[#ea99c0] dark:hover:bg-[#ff6d99] hover:text-[#672c48] dark:text-fuchsia-300 dark:hover:text-white border border-[#ea99c0] border-solid flex justify-center items-center gap-2"
                href="https://github.com/rp0777/ochi"
                target="_blank"
              >
                code <RiGithubFill size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Foodbox - Mobile version */}
        <div className="foodbox flex flex-col md:w-[80vw] md:flex-row-reverse items-center justify-center md:justify-between gap-5 h-full">
          <div className="imageContainer w-[90vw] md:w-[40vw] px-[2vh] h-[50vh] md:h-[80vh] rounded-3xl bg-[#ffcdbd] flex justify-center items-center">
            <a href="https://foodbox-24.vercel.app/" target="_blank">
              <img
                className=" object-cover rounded-xl cursor-pointer"
                style={{ boxShadow: "0 25px 25px 10px #dda694" }}
                src="/foodbox.png"
                alt=""
              />
            </a>
          </div>

          <div className="mobileProjectDetails flex flex-col justify-center items-center md:items-start gap-5">
            {/* Project Name */}
            <h1 className=" projectTitle text-4xl md:text-2xl text-center md:text-left font-medium">
              Foodbox, <br /> Food Delivery
            </h1>

            {/* Tech Stack Used */}
            <p className=" techStack">Next JS, Prisma, Tailwind CSS</p>

            <div className=" flex justify-between items-center gap-5">
              {/* Project Live Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#dda694] hover:bg-[#dda694] dark:hover:bg-[#ec6666] hover:text-[#764332] dark:text-orange-300 dark:hover:text-white border border-[#dda694] border-solid flex justify-center items-center gap-2"
                href="https://foodbox-24.vercel.app/"
                target="_blank"
              >
                Live
              </a>

              {/* Github Repo Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#dda694] hover:bg-[#dda694] dark:hover:bg-[#ec6666] hover:text-[#764332] dark:text-orange-300 dark:hover:text-white border border-[#dda694] border-solid flex justify-center items-center gap-2"
                href="https://github.com/rp0777/foodbox"
                target="_blank"
              >
                code <RiGithubFill size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Countdown Timer - Mobile version */}
        <div className="countdownTimer flex flex-col md:w-[80vw] md:flex-row-reverse items-center justify-center md:justify-between gap-5 h-full">
          <div className="imageContainer w-[90vw] md:w-[40vw] px-[2vh] h-[50vh] md:h-[80vh] rounded-3xl bg-[#CDD1FF] flex justify-center items-center">
            <a href="https://timer-24.vercel.app/" target="_blank">
              <img
                className=" object-cover rounded-xl cursor-pointer"
                style={{ boxShadow: "0 25px 25px 10px #8f96e6" }}
                src="/timer.png"
                alt=""
              />
            </a>
          </div>

          <div className="mobileProjectDetails flex flex-col justify-center items-center md:items-start gap-5">
            {/* Project Name */}
            <h1 className=" projectTitle text-4xl md:text-2xl text-center md:text-left font-medium">
              Timer, <br /> Countdown Timer
            </h1>

            {/* Tech Stack Used */}
            <p className=" techStack">React, Recoil, Spline 3D Model</p>

            <div className=" flex justify-between items-center gap-5">
              {/* Project Live Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
                href="https://timer-24.vercel.app/"
                target="_blank"
              >
                Live
              </a>

              {/* Github Repo Link */}
              <a
                className=" px-3 py-2 rounded-full text-[#8f96e6] hover:text-[#383e7b] dark:text-slate-300 dark:hover:text-white hover:bg-[#8f96e6] dark:hover:bg-slate-800 border border-[#8f96e6] border-solid flex justify-center items-center gap-2"
                href="https://github.com/rp0777/countdown-timer"
                target="_blank"
              >
                code <RiGithubFill size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
