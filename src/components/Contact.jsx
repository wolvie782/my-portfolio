import {
  RiGithubFill,
  RiInstagramFill,
  RiLinkedinBoxFill,
  RiTwitterXLine,
} from "react-icons/ri";

const socialMedia = [
  {
    title: "LinkedIn",
    icon: <RiLinkedinBoxFill size={20} />,
    iconLarge: <RiLinkedinBoxFill size={30} />,
    url: "https://www.linkedin.com/in/monu-mahto/",
  },
  {
    title: "Twitter",
    icon: <RiInstagramFill size={20} />,
    iconLarge: <RiInstagramFill size={30} />,
    url: "https://www.instagram.com/_my_life_towards_sieg_/",
  },
  {
    title: "Github",
    icon: <RiGithubFill size={20} />,
    iconLarge: <RiGithubFill size={30} />,
    url: "https://github.com/wolvie782",
  },
];

function Contact() {
  return (
    <div
      id="contact"
      className=" h-[30vh] lg:h-[20vh] w-screen flex flex-col justify-center items-center bg-[#CDD1FF] dark:bg-slate-900 gap-5 md:gap-2"
    >
      {/* Mail & Social Handle Links */}
      <div className="mailLinks w-[80vw] flex flex-col md:flex-row lg:flex-row items-center justify-around gap-5 md:gap-0 lg:gap-0">
        {/* Email Address */}
        <p className=" text-xl">
          <span className=" font-medium text-slate-600 dark:text-white">
            Email :
          </span>{" "}
          &nbsp;
          <a
            className=" text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
            href="mailto:dev.monu7864@gmail.com"
          >
            dev.monu7864@gmail.com
          </a>
        </p>

        {/* Copyright */}

        <p className=" dark:text-white">&#169; 2024 Monu Mahto</p>

        {/* Social Handle Links */}
        <div className="socialLinks dark:text-white md:pb-6 flex flex-row justify-center items-center gap-4 py-4">
          {socialMedia.map((item, index) => (
            <div key={index}>
              <a
                className=" opacity-60 hover:opacity-90"
                href={item.url}
                title={item.title}
              >
                {item.iconLarge}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Contact;
