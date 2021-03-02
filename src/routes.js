const routes = {
  en: {
    "/": { name: "Home" },
    "/events": { name: "Events" },
    "/coc": { name: "Code of Conduct" },
  },
  id: {
    "/": { name: "Beranda" },
    "/events": { name: "Kegiatan" },
    "/coc": { name: "Kode Etika" },
  },
};

/**
 * @param {string} locale
 * @returns {Record<string,{name:string;ext?:boolean;}>}
 */
module.exports = (locale = "en") => routes[locale];
