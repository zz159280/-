require.config({
    baseUrl : "/",
    paths : {
      "header" : "js/module/header",
      "footer" : "js/module/footer",
       "require":"libs/requirejs/require.min.js",
       "jquery":"libs/jquery/jquery-3.2.1",
       "url":"js/module/url",
       "template":"libs/art-template/template-web",
       "fly": "libs/jquery-plugins/jquery.fly",
       "zoom": "libs/jquery-plugins/jquery.elevateZoom-3.0.8.min",
       "cookie":  "libs/jquery-plugins/jquery.cookie",
       "swiper": "libs/swiper/js/swiper"
    },
    shim:{
      "zoom":{
        deps:['jquery']
      },
      "fly" : {
        deps: ['jquery']
      },
      "cookie" : {
        deps: ['jquery']
      }
    }
  })