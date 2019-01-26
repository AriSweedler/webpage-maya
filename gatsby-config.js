module.exports = {
  siteMetadata: {
    title: 'Maya Sweedler',
    clips: [
      {
        imageURL: 'http://img01.deviantart.net/609f/i/2013/170/4/9/girl_with_the_leather_jacket_by_jleonardk-d69rdd7.png',
        title: 'My Clip!',
        description: 'This description',
        tags: [
          'tag1',
          'tag2',
          'tag3',
        ]
      },
      {
        imageURL: 'http://img01.deviantart.net/609f/i/2013/170/4/9/girl_with_the_leather_jacket_by_jleonardk-d69rdd7.png',
        title: 'My Clip!',
        description: 'This description',
        tags: [
          'tag1',
          'tag2',
          'tag3',
        ]
      },
      {
        imageURL: 'http://img01.deviantart.net/609f/i/2013/170/4/9/girl_with_the_leather_jacket_by_jleonardk-d69rdd7.png',
        title: 'My Clip!',
        description: 'This description',
        tags: [
          'tag1',
          'tag2',
          'tag3',
        ]
      },
      {
        imageURL: 'http://img01.deviantart.net/609f/i/2013/170/4/9/girl_with_the_leather_jacket_by_jleonardk-d69rdd7.png',
        title: 'My Clip!',
        description: 'This description',
        tags: [
          'tag1',
          'tag2',
          'tag3',
        ]
      },
      {
        imageURL: 'https://i.pinimg.com/736x/3d/73/ce/3d73ce5af4aa4dabd094e819dbd12562--handsome-guys-mens-leather.jpg',
        title: 'Another Clip!',
        description: 'A different description',
        tags: [
          'tagTOP',
        ]
     }
    ]
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
