const config = {
  "dev":{
    "url": "/api/",
    "cookieExpireIn": 60,
    "imagePath": "/images/"
  },
  "staging": {

  },
  "production": {
    "url": "/api/",
    "cookieExpireIn": 86400,
    "imagePath": "/images/"
  }
};

export default config[process.env.NODE_ENV];