import { companyInfo, navLinks } from "../mock";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-red-400 mb-4">
              {companyInfo.name}
            </h3>
            <p className="text-gray-400 mb-4">{companyInfo.description}</p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/LummusDoBrasil?locale=pt_BR"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/lummus-corporation/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  Cotton Ginning
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  Oilseed Processing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  Synthetic Fiber
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-red-400 transition-colors duration-200"
                >
                  Fiber Processing
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="text-sm leading-relaxed">
                {companyInfo.location}
              </li>
              <li className="text-sm">{companyInfo.phone}</li>
              <li className="text-sm">{companyInfo.email}</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} {companyInfo.name}. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Terms & Conditions
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-red-400 transition-colors duration-200"
              >
                Product Safety
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
