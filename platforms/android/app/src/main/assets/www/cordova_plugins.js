cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "cordova-plugin-geolocation.geolocation",
    "file": "plugins/cordova-plugin-geolocation/www/android/geolocation.js",
    "pluginId": "cordova-plugin-geolocation",
    "clobbers": [
      "navigator.geolocation"
    ]
  },
  {
    "id": "cordova-plugin-geolocation.PositionError",
    "file": "plugins/cordova-plugin-geolocation/www/PositionError.js",
    "pluginId": "cordova-plugin-geolocation",
    "runs": true
  },
  {
    "id": "cordova-plugin-app-version.AppVersionPlugin",
    "file": "plugins/cordova-plugin-app-version/www/AppVersionPlugin.js",
    "pluginId": "cordova-plugin-app-version",
    "clobbers": [
      "cordova.getAppVersion"
    ]
  },
  {
    "id": "cordova-plugin-splashscreen.SplashScreen",
    "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
    "pluginId": "cordova-plugin-splashscreen",
    "clobbers": [
      "navigator.splashscreen"
    ]
  },
  {
    "id": "cordova-plugin-alipay-v2.alipay",
    "file": "plugins/cordova-plugin-alipay-v2/www/alipay.js",
    "pluginId": "cordova-plugin-alipay-v2",
    "clobbers": [
      "cordova.plugins.alipay"
    ]
  },
  {
    "id": "cordova-plugin-wechat.Wechat",
    "file": "plugins/cordova-plugin-wechat/www/wechat.js",
    "pluginId": "cordova-plugin-wechat",
    "clobbers": [
      "Wechat"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "cordova-plugin-geolocation": "4.0.1",
  "cordova-plugin-app-version": "0.1.9",
  "cordova-plugin-splashscreen": "5.0.2",
  "cordova-plugin-alipay-v2": "1.0.0",
  "cordova-plugin-wechat": "2.1.0"
};
// BOTTOM OF METADATA
});