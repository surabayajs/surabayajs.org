import * as React from "react";

import { Box } from "@chakra-ui/core";

const DiscordEmbed: React.FC = () => {
  const props = {
    frameBorder: "0",
    sandbox: [
      "allow-popups",
      "allow-popups-to-escape-sandbox",
      "allow-same-origin",
      "allow-scripts",
    ].join(" "),
    src: "https://discordapp.com/widget?id=658768237789446165&theme=light",
    title: "Discord Widget",
  };

  return (
    <Box as="iframe" boxShadow="lg" borderRadius="md" height="md" {...props} />
  );
};

export default DiscordEmbed;
