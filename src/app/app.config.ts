export const QrConfig = {
  prefix: "CreatorCoin:",
};

export const HeaderConfig = {
  useGenericHeader: true,
  genericHeaderUrl: "http://creator-coin.org/",
};

export const FooterConfig = {
  useGenericFooter: true,
  contactLinks: [
    {
      url: "http://creator-coin.org/",
      content: "<i class='fas fa-link'></i>",
    },{
      url: "mailto:info@creator-coin.org",
      content: "<i class='fas fa-envelope'></i>",
    }
  ],
};
