const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: '/Users/rodrigotozatti/Repositorio - Mac/Cursos-Qazando/Automacao-iOS/App-iOS/qazandoapp.app',
      platform: 'iOS',
      desiredCapabilities: {
        deviceName: 'iPhone 14 Pro Max', // Nome do dispositivo ou simulador
        platformVersion: '16.2', // Versão do iOS
        automationName: 'XCUITest', // Framework de automação
        app: '//Users/rodrigotozatti/Repositorio - Mac/Cursos-Qazando/Automacao-iOS/App-iOS/qazandoapp.app', // Caminho para o seu aplicativo iOS
        noReset: true,
        fullReset: false
      }
    }
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Automacao-iOS'
}