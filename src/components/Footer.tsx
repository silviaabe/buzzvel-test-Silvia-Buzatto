import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-[16px] px-4 md:px-20">
      <div className="max-w-7xl mx-auto h-[1550px] md:h-auto">
        <div className="flex flex-col md:flex-row py-12 gap-8 md:gap-12">
          <div className="flex items-start cursor-pointer">
            <Image
              src="/images/Logo-white.png"
              alt="Logo"
              width={173}
              height={35}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 w-full">
            <div className="">
              <h4 className="font-semibold mb-3 cursor-pointer">Product</h4>
              <ul className="space-y-3 cursor-pointer">
                <li>Pricing</li>
                <li>Overview</li>
                <li>Browse</li>
                <li className="flex items-center gap-2 cursor-pointer">
                  Accessibility
                  <span className="bg-white text-purple-800 text-xs px-2 py-0.5 rounded cursor-pointer">
                    BETA
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 cursor-pointer">Solutions</h4>
              <ul className="space-y-3 cursor-pointer">
                <li>Brainstorming</li>
                <li>Ideation</li>
                <li>Wireframing</li>
                <li>Research</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 cursor-pointer">Resources</h4>
              <ul className="space-y-3 cursor-pointer">
                <li>Help Center</li>
                <li>Blog</li>
                <li>Tutorials</li>
                <li>FAQs</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 cursor-pointer">Support</h4>
              <ul className="space-y-3 cursor-pointer">
                <li>Contact Us</li>
                <li>Developers</li>
                <li>Documentation</li>
                <li>Integrations</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3 cursor-pointer">Company</h4>
              <ul className="space-y-3 cursor-pointer">
                <li>About</li>
                <li>Press</li>
                <li>Events</li>
                <li className="flex items-center gap-2 cursor-pointer">
                  Request Demo
                  <Image
                    src="/images/Arrow White.png"
                    alt="Arrow Icon"
                    width={14}
                    height={13}
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-white/20" />

        <div className="flex flex-col gap-6 justify-between md:flex-row py-6">
          <p className="justify-start">uteach © {new Date().getFullYear()}. All rights reserved.</p>

          <div className="flex flex-wrap justify-start gap-6 md:gap-8 items-center cursor-pointer">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Contact</a>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/images/Globe.png" alt="Globe Icon" width={20} height={20} />
              <span>EN</span>
            </div>

            <div className="flex items-center gap-2 cursor-pointer">
              <Image src="/images/Euro.png" alt="Euro Icon" width={20} height={20} />
              <span>EUR</span>
            </div>

            <a href="#">
              <Image src="/images/Accessibility.png" alt="Accessibility Icon" width={20} height={20} className="cursor-pointer"/>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
