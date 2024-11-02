const getCurrentDateTimePath = () => {
  const currentDate = new Date();

  const day = String(currentDate.getDate()).padStart(2, '0'); // Días
  const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Meses (0-11)
  const year = currentDate.getFullYear(); // Años

  const hours = String(currentDate.getHours()).padStart(2, '0'); // Horas
  const minutes = String(currentDate.getMinutes()).padStart(2, '0'); // Minutos
  const seconds = String(currentDate.getSeconds()).padStart(2, '0'); // Segundos

  const dateString = `${day}${month}${year}-${hours}${minutes}${seconds}`; // Formato DDMMAAAA-HHMMSS
  return dateString; // Ruta final
};

module.exports = {
  env: {
    appName: "Ghost 5.96",
    events: 50,
    delay: 300,
    seed: 1204,
    pctClicks: 28,
    pctScroll: 6,
    pctSelectors: 9,
    pctKeys: 14,
    pctSpKeys: 5,
    pctPgNav: 10,
    pctBwChaos: 12,
    pctActions: 16,
    rutaLOG: '../../../results/SMresults_' + getCurrentDateTimePath() + '/reporte/monkey-execution.html'
  },
  e2e: {
    // We've imported your old cypress plugins here.
    baseUrl: "http://localhost:3002/ghost",
    // integrationFolder: "./cypress/integration/monkey", // antes integrationFolder
    specPattern: "./cypress/e2e/monkey/smart-monkey_2.cy.js", // antes testFiles    
    trashAssetsBeforeRuns: false,
    video: true,
    videoCompression: 15,
    screenshotOnRunFailure: true, // activar screenshot en caso de error
    screenshotsFolder: './results/SMresults_' + getCurrentDateTimePath() + '/screenshots', // ruta variable de screenshot
    videosFolder: './results/SMresults_' + getCurrentDateTimePath(), // ruta variable de video
    pageLoadTimeout: 120000,
    defaultCommandTimeout: 120000,
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
}
