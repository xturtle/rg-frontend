const config = {
  "dev":{
    "url": "http://localhost:3001",
    "cookieExpireIn": 60,
    "imagePath": "/images/"
  },
  "staging": {

  },
  "production": {
    url:"/api/", 
    "cookieExpireIn": 86400
  }
};

export default config.dev;