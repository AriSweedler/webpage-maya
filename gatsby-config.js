module.exports = {
  siteMetadata: {
    title: 'Maya Sweedler',
    clips: [
      {"articleURL": "articleURL", "title": "title", "description": "description", "imageURL": "imageURL", "genre": "genre", "publication": "publication", "importance": "importance"},
      {"articleURL": "https://www.latimes.com/politics/la-me-pol-knight-brayton-facebook-20181031-story.html", "title": "testTitle", "description": "testDescr", "imageURL": "testURL", "genre": "Investigative", "publication": "LA Times", "importance": "strongly"},
      {"articleURL": "https://www.latimes.com/politics/la-me-pol-ca-veterans-ca-50-20181101-story.html", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Political", "publication": "LA Times", "importance": "very"},
      {"articleURL": "https://www.latimes.com/politics/la-pol-na-duncan-hunter-islam-20180926-story.html", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Political", "publication": "LA Times", "importance": "moderately"},
      {"articleURL": "https://www.latimes.com/politics/la-me-ca-pol-hunter-letter-20181015-story.html", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Political", "publication": "LA Times", "importance": "moderately"},
      {"articleURL": "https://www.latimes.com/politics/la-me-pol-mimi-walters-young-kim-201891112-story.html", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Political", "publication": "LA Times", "importance": "somewhat"},
      {"articleURL": "https://www.latimes.com/politics/la-me-pol-knight-veterans-brayton20181101-story.html", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Political", "publication": "LA Times", "importance": "somewhat"},
      {"articleURL": "https://www.wsj.com/articles/floridas-red-tide-stings-tourist-industry-1534334400", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Investigative", "publication": "Wall Street Journal", "importance": "very"},
      {"articleURL": "https://www.wsj.com/articles/puerto-ricos-hotels-offer-rare-good-news-in-aftermath-of-the-hurricane-1534849200", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "Wall Street Journal", "importance": "strongly"},
      {"articleURL": "https://www.wsj.com/articles/move-the-furniture-its-time-for-a-drone-race-1532955600", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "Wall Street Journal", "importance": "moderately"},
      {"articleURL": "https://www.wsj.com/articles/heavy-breathing-in-manhattan-park-is-not-what-anyone-thinks-it-is-1530548292", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "Wall Street Journal", "importance": "somewhat"},
      {"articleURL": "https://www.wsj.com/articles/jeff-daniels-never-wanted-to-do-hamlet-but-atticus-finch-is-role-of-a-lifetime-1536238801", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "Wall Street Journal", "importance": "strongly"},
      {"articleURL": "https://www.seattletimes.com/seattle-news/seattles-pesticide-phaseout-lags-potentially-harmful-products-used-in-parks/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Investigative", "publication": "Seattle Times", "importance": "very"},
      {"articleURL": "https://www.seattletimes.com/seattle-news/recent-problems-with-seafair-pirates-recall-groups-rowdiest-days/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Investigative", "publication": "Seattle Times", "importance": "very"},
      {"articleURL": "https://newsinteractive.post-gazette.com/penguins/50/cup-returns-to-pittsburgh/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Sports", "publication": "Pittsburgh Post Gazette", "importance": "nothing"},
      {"articleURL": "https://www.post-gazette.com/sports/olympicfeatures/2016/08/05/Hopewell-s-Christa-Harmotto-Dietzen-displays-strength-of-character-on-and-off-volleyball-court/stories/201607250003", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Sports", "publication": "Pittsburgh Post Gazette", "importance": "nothing"},
      {"articleURL": "https://www.post-gazette.com/ae/books/2016/08/28/From-Nadia-to-Simone-surpassing-perfection-in-gymnastics/stories/201608280015", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "Pittsburgh Post Gazette", "importance": "nothing"},
      {"articleURL": "http://features.yaledailynews.com/blog/2017/10/13/yale-targeted-in-federal-title-ix-investigation/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Investigative", "publication": "YDN", "importance": "strongly"},
      {"articleURL": "https://yaledailynews.com/blog/2016/03/10/mens-basketball-captain-expelled-for-sexual-misconduct/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Investigative", "publication": "YDN", "importance": "strongly"},
      {"articleURL": "http://features.yaledailynews.com/blog/2015/04/24/part-ii-the-summer/ ", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Sports", "publication": "YDN", "importance": "nothing"},
      {"articleURL": "https://yaledailynews.com/blog/2016/09/09/brained/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Sports", "publication": "YDN", "importance": "somewhat"},
      {"articleURL": "https://yaledailynews.com/blog/2016/04/11/astro-dept-ahead-on-sexual-harassment/", "title": "nothing", "description": "nothing", "imageURL": "nothing", "genre": "Features", "publication": "YDN", "importance": "least"},
    ],
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/favicon.png',
      },
    }
  ],
}
