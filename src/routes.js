const routes = {
  en: {
    "/": { name: "Home" },
    "/events": { name: "Events" },
    "/coc": { name: "Code of Conduct", ext: true },
  },
  id: {
    "/": { name: "Beranda" },
    "/events": { name: "Kegiatan" },
    "/coc": { name: "Kode Etika", ext: true },
  },
};

/**
 * @param {string} locale
 * @returns {Record<string,{name:string;ext?:boolean;}>}
 */
module.exports = (locale = "en") => routes[locale];
