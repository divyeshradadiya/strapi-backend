export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL','http://strapi-backend-production-6f50.up.railway.app'),
  app: {
    keys: env.array('APP_KEYS'),
  },
});
