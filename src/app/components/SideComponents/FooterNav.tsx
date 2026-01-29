"use client";

export default function FooterNav() {
  const navItems = ["Home", "About", "Projects", "Contact"];

  const socialLinks = [
    { src: "/images/logo/facce.png", label: "Facebook", href: "https://www.facebook.com/bonagua.marc/", bg: "bg-[#1877F2]" },
    { src: "/images/logo/Instagram_icon.png", label: "Instagram", href: "https://www.instagram.com/marcaus_dvlp/", bg: "" },
    { src: "/images/logo/LinkedIn_logo_initials.png", label: "LinkedIn", href: "https://www.linkedin.com/in/marc-austin-bonagua-04a153372/", bg: "" },
  ];

  // Smooth scroll for footer nav links
  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId.toLowerCase());
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="w-full px-4 py-6 bg-black text-white">
      <div className="flex flex-col md:flex-row justify-between max-w-6xl mx-auto gap-6 md:gap-16">
        
        {/* Container flex-row on mobile, flex-col on desktop */}
        <div className="flex flex-row md:flex-row gap-6 md:gap-16 w-full justify-between">
          
          {/* Social Media Section */}
          <div className="flex flex-col flex-1">
            <h1 className="text-xl md:text-3xl mb-3 md:mb-8">Social Media</h1>
            <div className="flex flex-col gap-3 md:gap-5">
              {socialLinks.map(({ src, label, href, bg }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-28 h-12 md:w-40 md:h-20 overflow-hidden flex items-center justify-center cursor-pointer"
                >
                  <div className={`absolute inset-0 flex items-center justify-center transition-all duration-300 group-hover:translate-x-full`}>
                    <img src={src} alt={label} className={`w-10 md:w-16 rounded-full mx-auto transition-all duration-300 ${bg}`} />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center transition-all duration-300 -translate-x-full group-hover:translate-x-0">
                    <span className="text-white text-lg md:text-2xl font-medium">{label}</span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className="flex flex-col flex-1 text-left">
            <h1 className="text-xl md:text-3xl mb-3 md:mb-8">Navigation</h1>
            <div className="flex flex-col gap-2 md:gap-5">
              {navItems.map((label) => (
                <button
                  key={label}
                  onClick={() => handleScrollToSection(label)}
                  className="relative text-lg md:text-2xl py-1 md:py-2 text-white group inline-block w-fit text-left"
                >
                  {label}
                  <span className="absolute left-0 -bottom-1 h-[2px] bg-white w-0 transition-all duration-300 group-hover:w-full"></span>
                </button>
              ))}
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
