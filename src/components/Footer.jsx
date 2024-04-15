import Github from "../assets/github.png";
import Instagram from "../assets/instagram.png";
import LinkidIn from "../assets/linkedin.png";
import Logo from "../assets/logo.png";
function Footer() {
  return (
    <div className="p-10">
      <div className="blur left-2/4 w-5/6 h-40 bottom-0 -translate-x-1/2"></div>
      <hr className="border border-solid border-gray-200" />
      <div className="flex justify-around py-8">
        <img className="w-10 h-10" src={Github} alt="Github" />
        <img className="w-10 h-10" src={Instagram} alt="Instagram" />
        <img className="w-10 h-10" src={LinkidIn} alt="LinkidIn" />
      </div>
      <div className="flex justify-center xl:m-4 xl:mt-6">
        <img className="w-40" src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default Footer;
