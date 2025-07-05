/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://naviahub.dev',
  generateRobotsTxt: true,
  exclude: [],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://naviahub.dev/sitemap.xml',
    ],
  },
}; 