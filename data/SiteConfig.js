const config = {
  siteTitle: 'Waris Ali',
  siteTitleShort: 'Waris Ali',
  siteTitleAlt: 'Waris Ali',
  siteLogo: '/logos/tania.jpg',
  siteUrl: 'https://www.warisali.ml',
  repo: 'https://github.com/warisali2/warisali.ml',
  pathPrefix: '',
  dateFromFormat: 'YYYY-MM-DD',
  dateFormat: 'MMMM Do, YYYY',
  siteDescription:
    'Waris Ali is a Machine Learning Engineer who breaks down complex concepts in an accessible and intuitive way.',
  siteRss: '/rss.xml',
  // googleAnalyticsID: 'UA-42068444-1',
  googleAnalyticsID: '',
  // disqusShortname: 'taniarascia',
  disqusShortname: '',
  postDefaultCategoryID: 'Tech',
  userName: 'Waris',
  userEmail: 'waris@warisali.ml',
  userTwitter: 'iamwarisali',
  userLocation: 'Lahore, PK',
  userAvatar: 'https://api.adorable.io/avatars/150/test.png',
  userDescription:
    'I build open source projects and write the missing instruction manuals of the Machine Learning.',
  menuLinks: [
    {
      name: 'Me',
      link: '/me/',
    },
    {
      name: 'Articles',
      link: '/blog/',
    },
    {
      name: 'Contact',
      link: '/contact/',
    },
  ],
  themeColor: '#3F80FF', // Used for setting manifest and progress theme colors.
  backgroundColor: '#ffffff',
}

// Make sure pathPrefix is empty if not needed
if (config.pathPrefix === '/') {
  config.pathPrefix = ''
} else {
  // Make sure pathPrefix only contains the first forward slash
  config.pathPrefix = `/${config.pathPrefix.replace(/^\/|\/$/g, '')}`
}

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') config.siteUrl = config.siteUrl.slice(0, -1)

// Make sure siteRss has a starting forward slash
if (config.siteRss && config.siteRss[0] !== '/') config.siteRss = `/${config.siteRss}`

module.exports = config
