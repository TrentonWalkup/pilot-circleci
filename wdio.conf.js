exports.config = {

    runner: 'local',

    specs: [
        './test/specs/*.js'
    ],

    suites: { all_specs: ['./tests/specs/*.js'] },

    maxInstances: 10,

    capabilities: [{

        maxInstances: 5,

        browserName: 'chrome',

    }],

    logLevel: 'silent',

    bail: 0,

    baseUrl: 'http://localhost',

    waitforTimeout: 10000,

    connectionRetryTimeout: 90000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
