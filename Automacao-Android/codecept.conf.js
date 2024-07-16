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
      platform: 'Android',
      app: '/Users/rodrigorossetitozatti/Repositorio - Macbook/Cursos-Qazando/Automacao-Android/App-Android/app-release.apk', // Caminho para o seu APK ou IPA
      desiredCapabilities: {
        appPackage: 'com.qazandoapp', // Pacote do aplicativo
        appActivity: 'MainActivity', // Atividade principal do aplicativo
        deviceName: 'Qazando-mobile',
        platformVersion: '14.0' // Versão do Android
        //automationName: 'UiAutomator2'
      }
    }
  /*  Appium: {
      platform: 'Android',
      app: '/Users/rodrigorossetitozatti/Repositorio - Macbook/Cursos-Qazando/Automacao-Android/App-Android/app-release.apk',
      device: 'Qazando-mobile'
    }*/
  },
  include: {
    I: './steps_file.js'
  },
  name: 'Automacao-Android'
}