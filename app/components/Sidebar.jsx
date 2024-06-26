import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import DownloadButton from "./DownloadButton";

const Sidebar = () => {
  return (
    <div className="w-1/4 lg:w-1/5 dark:bg-slate-900 bg-zinc-200 text-stone-800 dark:text-white hidden md:flex md:flex-col justify-between p-4 shadow-lg">
      <div>
        <div className="flex items-center justify-center p-1">
          <Image
            src="/profile_picture.jpeg"
            alt="Profile Picture"
            className="rounded-full"
            width={200}
            height={200}
          />
        </div>
        <div className="mt-8">
          <ul className="space-y-2 px-2">
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="text-red-600 mr-2 w-5 dark:text-pink-600 flex-shrink-0"
              />
              <a
                href="https://maps.app.goo.gl/rbgjwbXBUjRGz6ca9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Farmgate, Dhaka-1215
              </a>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faEnvelope}
                className="text-sky-700 mr-2 w-5 dark:text-sky-500 flex-shrink-0"
              />
              <a
                href="mailto:ayeshaafroza@iut-dhaka.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                ayeshaafroza@iut-dhaka.edu
              </a>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-blue-700 mr-2 w-5 dark:text-blue-400 flex-shrink-0"
              />
              <a
                href="https://www.linkedin.com/in/ayesha-afroza-mohsin"
                target="_blank"
                rel="noopener noreferrer"
              >
                /ayesha-afroza-mohsin
              </a>
            </li>
            <li className="flex justify-content py-2">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-900 mr-2 w-6 dark:text-gray-100 flex-shrink-0"
              />
              <a
                href="https://github.com/AyeshaMohsin"
                target="_blank"
                rel="noopener noreferrer"
              >
                /AyeshaMohsin
              </a>
            </li>
            <li className="flex justify-center">
              <DownloadButton />
            </li>
          </ul>
        </div>
      </div>
      <footer className="text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Ayesha Afroza Mohsin
        </p>
      </footer>
    </div>
  );
};

export default Sidebar;
