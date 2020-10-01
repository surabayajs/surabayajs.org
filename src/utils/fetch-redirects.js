/* eslint-disable no-undef */

require("cross-fetch/polyfill");

const qs = require("querystring");

module.exports = async () => {
  const links = [];

  let last = null;
  let resume = true;

  do {
    const query = qs.encode({
      apikey: process.env.REBRANDLY_API_KEY,
      "domain.id": "9f47903cadbb4ed0a9a021913d0b9195",
      last,
    });

    const baseUrl = `https://api.rebrandly.com/v1/links?${query}`;
    // eslint-disable-next-line no-await-in-loop
    const data = await fetch(baseUrl).then((resp) => resp.json());

    if (Array.isArray(data) && data.length > 0) {
      data.forEach((d) => {
        links.push({
          source: `/${d.slashtag}`,
          destination: d.destination,
          permanent: true,
        });
      });
      last = data[data.length - 1].id;
    } else {
      resume = false;
    }
  } while (resume);

  return links;
};
