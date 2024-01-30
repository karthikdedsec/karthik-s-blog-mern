import { Footer } from "flowbite-react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
} from "react-icons/bs";

function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-tr from-emerald-300  to-green-800 rounded-md text-white">
                Karthik's
              </span>
              Blog
            </Link>
          </div>
          {/* components grid*/}
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="About" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://lightnin-estate.onrender.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Real Estate Project
                </Footer.Link>
                <Footer.Link href="/about">Karthik's Blog</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/karthikdedsec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </Footer.Link>
                <Footer.Link href="#">Discord</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" />{" "}
              <Footer.LinkGroup col>
                <Footer.Link
                  href="https://github.com/karthikdedsec"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy Policy
                </Footer.Link>
                <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright
            href="#"
            by={`Karthik's blog`}
            year={new Date().getFullYear()}
          />
          <div className="flex gap-8 mt-2 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
}
export default FooterComponent;
