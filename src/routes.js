const routes = {
  en: [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Code of Conduct", href: "/coc", ext: true },
  ],
  id: [
    { name: "Beranda", href: "/" },
    { name: "Kegiatan", href: "/events" },
    { name: "Kode Etika", href: "/coc", ext: true },
  ],
};

module.exports = (locale = "en") => routes[locale];
