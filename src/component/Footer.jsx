import { resourcesLinks, platformLinks, communityLinks } from "../constants";
const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700  ">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 border-b border-neutral-700 ">
        <div className="">
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul>
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="">
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul>
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="mb-5">
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul>
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  className="text-neutral-300 hover:text-white "
                  href={link.href}
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        
      </div>
      <div className="mt-7 flex justify-center items-center"> &copy; 2024 <a href="#">Sarthak</a>. All Rights Reserved</div>
    </footer>
  );
};

export default Footer;
