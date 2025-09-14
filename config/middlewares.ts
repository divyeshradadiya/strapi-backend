export default [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "https://www.youtube.com",
            "motivated-health-e41c7505c5.media.strapiapp.com",
          ],
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "market-assets.strapi.io",
            "https://www.youtube.com",
            "motivated-health-e41c7505c5.media.strapiapp.com",
          ],
          "frame-src": ["'self'", "https://www.youtube.com"],
          upgradeInsecureRequests: null,
        },
      },
    },
  },
  {
    name: "strapi::cors",
    config: {
      enabled: true,
      headers: "*",
      origin: [
        "http://localhost:3000",
        "https://info-strapi-cms.vercel.app",
        "https://*.vercel.app",
        "https://*.railway.app",
        "https://strapi-backend-production-6f50.up.railway.app",
        "*"
      ]
    }
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];
