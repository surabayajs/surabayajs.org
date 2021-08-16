const routes = {
  en: {
    "/": { name: "Home" },
    "/events": { name: "Events" },
    "/coc": { name: "Code of Conduct" },
    "/learn": { name: "Learning Resources" },
  },
  id: {
    "/": { name: "Beranda" },
    "/events": { name: "Kegiatan" },
    "/coc": { name: "Kode Etika" },
    "/learn": { name: "Sumber Pembelajaran" },
  },
};

/**
 * @param {string} locale
 * @returns {Record<string,{name:string;ext?:boolean;}>}
 */
module.exports = (_locale = "en") => routes[process.env.LOCALE];
