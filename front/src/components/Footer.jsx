import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer = () => {
  const footerSections = [
    {
      title: "Company",
      links: [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Contact", to: "/contact" },
      ],
    },
    {
      title: "Marketplace",
      links: [
        { label: "MarketPs", to: "/MarketPs" },
        { label: "MarketGame", to: "/MarketGame" },
        { label: "Profile", to: "/profile" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Support", to: "/contact" },
        { label: "Privacy", to: "/about" },
        { label: "Terms", to: "/about" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-slate-950 text-slate-300">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-500/60 to-transparent" />
      <div className="absolute -left-16 top-10 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="absolute -right-16 top-0 h-56 w-56 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.9fr_0.9fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
              Discover premium digital products, games, and support in one modern marketplace built for creators and players.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                "facebook",
                "twitter",
                "instagram",
                "linkedin",
              ].map((social) => (
                <a
                  key={social}
                  href="/"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-700 bg-slate-900 text-slate-300 transition hover:border-indigo-500 hover:text-indigo-400"
                  aria-label={social}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                    aria-hidden="true"
                  >
                    {social === "facebook" && (
                      <path d="M13.5 8.5V6.8c0-.9.6-1.3 1.5-1.3h1.5V2h-2.3C11.5 2 10 3.7 10 6.4v2.1H7.5V11h2.5v9h3.5v-9h2.4l.6-2.5h-3z" />
                    )}
                    {social === "twitter" && (
                      <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1A4.2 4.2 0 0 0 11.7 9c0 .3 0 .6.1.9A12 12 0 0 1 3.6 5.2a4.3 4.3 0 0 0 1.3 5.7c-.6 0-1.2-.2-1.7-.5v.1A4.2 4.2 0 0 0 7 15.3c-.5.1-1 .2-1.5.1A4.2 4.2 0 0 0 9.7 18c-1.2.8-2.7 1.2-4.2 1.2H4A12.2 12.2 0 0 0 21.9 7.1c0-.3 0-.6-.1-.9a8.5 8.5 0 0 0 2.2-2.4Z" />
                    )}
                    {social === "instagram" && (
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.2A4.8 4.8 0 1 1 7.2 12 4.8 4.8 0 0 1 12 7.2Zm0 2A2.8 2.8 0 1 0 14.8 12 2.8 2.8 0 0 0 12 9.2Zm5-3.5a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1Z" />
                    )}
                    {social === "linkedin" && (
                      <path d="M6.9 8.8A1.8 1.8 0 1 1 6.9 5a1.8 1.8 0 0 1 0 3.8ZM5.2 10h3.4v9H5.2zm6.1 0h3.3v1.2h.1c.5-.9 1.7-1.9 3.5-1.9 3.7 0 4.4 2.4 4.4 5.6V19h-3.4v-17.6h3.4v2.4c.7-1.3 2.1-2.8 4.7-2.8 5 0 5.9 3.3 5.9 7.6V19h-3.4v-17.6h3.4v1.6c.4-.7 1.4-1.7 3.3-1.7 3.2 0 4.2 2.1 4.2 5.1V19h-3.4v-17.6h3.4v1.3c.4-.7 1.2-1.8 3-1.8 3.5 0 4.6 2.4 4.6 6.2V19h-3.4v-17.6h3.4v1.3c.4-.7 1.2-1.8 3-1.8 3.5 0 4.6 2.4 4.6 6.2V19h-3.4v-17.6h3.4v1.6c.7-.9 1.8-1.9 3.8-1.9 3.1 0 4.9 1.8 4.9 5.7V19h-3.4v-17.6h3.4v1.3c.3-.5.9-1.1 1.8-1.6 1.3-.7 2.8-1 4.2-1 4.3 0 6.6 2.8 6.6 7.3V19h-3.4v-17.6h3.4v1.3c.4-.7 1.2-1.8 3-1.8 3.5 0 4.6 2.4 4.6 6.2V19h-3.4v-17.6h3.4v1.3c.3-.5.9-1.1 1.8-1.6 1.3-.7 2.8-1 4.2-1 4.3 0 6.6 2.8 6.6 7.3V19h-3.4v-17.6h3.4v1.3c.4-.7 1.2-1.8 3-1.8 3.5 0 4.6 2.4 4.6 6.2V19h-3.4v-17.6h3.4v1.3c.4-.7 1.2-1.8 3-1.8C58 1.7 59.1 4 59.1 7.8V19H55.7V7.7c0-1.8-.6-3-2.4-3-1.5 0-2.7 1.1-2.7 3.4V19h-3.4V7.7c0-1.8-.7-3-2.5-3-1.6 0-2.7 1.1-2.7 3.4V19H39v-9.2h3.3v1.3Zm5 8.3h3.4v-9H16.3v9Z" />
                    )}
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
                {section.title}
              </h3>
              <ul className="mt-6 space-y-4 text-sm text-slate-400">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.to} className="transition hover:text-indigo-400">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Contact
            </h3>
            <div className="mt-6 space-y-4 text-sm text-slate-400">
              <p>hello@marketplace.com</p>
              <p>+1 (555) 234-5678</p>
              <p>24 Street, New York, NY</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-5 text-sm text-slate-500 sm:flex-row sm:px-6 lg:px-8">
          <p>© 2026 Marketplace. All rights reserved.</p>
          <p>Designed for modern digital commerce</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;