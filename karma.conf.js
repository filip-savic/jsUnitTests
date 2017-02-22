module.exports = function(config) {

    config.set({

        basePath: '',

        frameworks: ['mocha', 'chai', 'sinon'],

        // browsers: ['PhantomJS', 'Chrome'],
        browsers: ['PhantomJS'],
        singleRun: false,

        autoWatchBatchDelay: 400,
        browserDisconnectTimeout: 2000,

        // change log level to get detailed debug info
        // logLevel: config.LOG_DEBUG,

        files: [

            // project files
            'js/*.js',

            // tests
            'test/*.spec.js'

        ],

        reporters: ['mocha']

    });

};
