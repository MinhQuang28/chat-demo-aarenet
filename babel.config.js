module.exports = {
  presets: ['module:@react-native/babel-preset'],
  "plugins": [
    ["module-resolver", {
      "alias": {
        "assets": "./src/assets",
        "components": "./src/components",
        "navigations": "./src/navigations",
        "screens": "./src/screens",
        "themes": "./src/themes",
        "entity": "./src/entity",
        "env": "./src/env",
      }
    }]
  ]
};
