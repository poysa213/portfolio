module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
    images: {
      domains: [
        "sgwebpartners.com",
        "imgur.com",
        "i.imgur.com",
        "ctfassets.net",
        "images.ctfassets.net",
       ],
      },
      rewrites: async () => {
        return [
          {
            source: '/api/:path*',
            destination:
              process.env.NODE_ENV === 'development'
                ? 'http://127.0.0.1:5328/api/:path*'
                : '/api/',
          },
        ]
      },
    }
   

