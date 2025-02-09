module.exports = {
  siteUrl: "https://webhookforms.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        disallow: ["/dashboard", "/dashboard/*"],
      },
    ],
  },
  exclude: ["/icon.*"],
};
