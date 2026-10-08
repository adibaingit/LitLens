const Footer = () => {
  return (
    <footer className="bg-accentTeal text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">LitLens</h2>
          <p className="mt-3 text-gray-400">
            Your AI-powered reading companion. Discover books, reviews, and
            personalized recommendations.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-accentTealHover" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Careers
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Pricing
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                API
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Connect</h3>
          <ul className="space-y-2">
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Instagram
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                Twitter
              </a>
            </li>
            <li>
              <a className="hover:text-accentTealHover" href="#">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-400 mt-10 pt-6 text-center text-gray-300">
        © {new Date().getFullYear()} LitLens. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
