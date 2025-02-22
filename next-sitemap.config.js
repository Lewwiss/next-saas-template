module.exports = {
  siteUrl: "https://template.com",
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
