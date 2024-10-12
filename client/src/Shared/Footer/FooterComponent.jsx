import React from "react";

const FooterComponent = () => {
  return (
    <>
      {" "}
      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-6 lg:px-16">
          <div>
            <h2 className="text-2xl font-bold mb-4 text-cyan-500">MentiGO</h2>
            <p className="text-gray-400">
              MentiGO is a platform that bridges the gap between mentors and
              mentees, empowering personal and professional growth.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Quick Links</h3>
            <ul className="text-gray-400 space-y-3">
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Projects
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-3">
              <li>Email: support@mentigo.com</li>
              <li>Phone: +123 456 789</li>
              <li>Location: 123 Mentor St., Tech City</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-xl mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <a href="#" className="text-cyan-500 hover:text-gray-300">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-cyan-500 hover:text-gray-300">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-cyan-500 hover:text-gray-300">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="text-cyan-500 hover:text-gray-300">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
          &copy; 2024 MentiGO. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default FooterComponent;
