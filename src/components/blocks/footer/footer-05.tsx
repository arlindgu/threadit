import { Separator } from "@/components/ui/separator";
import { GithubIcon, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

const footerLinks = [
  {
    title: "Impressum",
    href: "/imprint",
  },
  {
    title: "Kontakt",
    href: "/contact",
  },
];

const Footer05Page = () => {
  return (
    <div className="flex flex-col">
      <div className="grow bg-muted" />
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-12 flex flex-col justify-start items-center">
            <svg
              width="5%"
              height="5%"
              viewBox="0 0 242 169"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              style={{
                fillRule: "evenodd",
                clipRule: "evenodd",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeMiterlimit: 1.5,
              }}
            >
              <g transform="matrix(1,0,0,1,-468.13,-447.255)">
                <g transform="matrix(1,0,0,1,42.4419,-2.4905)">
                  <path
                    d="M483.271,456.053C483.271,456.053 508.948,453.961 499.064,475.061C489.18,496.161 421.164,522.866 433.408,540C445.651,557.134 575.094,445.344 570.728,470.054C566.363,494.765 435.043,585.473 479.11,593.174C523.177,600.875 656.533,486.228 620.705,540C584.876,593.772 551.766,602.662 570.125,610.59C588.485,618.518 639.054,587.446 661.423,566.056"
                    style={{
                      fill: "none",
                      stroke: "var(--primary)",
                      strokeWidth: "12.5px",
                    }}
                  />
                </g>
              </g>
            </svg>
            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="p-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-8">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{" "}
              <Link href="/" target="_blank">
                Thread IT
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" fill="currentColor" />
              </Link>
              <Link href="#" target="_blank">
                <Instagram className="h-5 w-5" fill="currentColor" stroke="background" />
              </Link>
              <Link href="#" target="_blank">
                <GithubIcon className="h-5 w-5" fill="currentColor" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer05Page;
