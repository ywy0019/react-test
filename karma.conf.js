// Karma configuration
// Generated on Tue Mar 21 2017 10:56:34 GMT+0800 (中国标准时间)
var webpackConfig = require('./webpack.config.js');

module.exports = function (config) {
    config.set({

        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: './src/test/',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter , 'browserify'
        frameworks: ['mocha', 'chai'],


        // list of files / patterns to load in the browser
        files: [
            'components/*.js'
        ],
        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            '*.js': ['webpack'],
            '../*.js': ['coverage']
        },

        webpack: webpackConfig,

        webpackMiddleware: {
            noInfo: true
        },

        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress', 'coverage', 'teamcity'],

        //最大超时时间
        captureTimeout: 120000,
        browserNoActivityTimeout: 120000,
        browserDisconnectTimeout: 20000,

        /* coverageReporter: {
            type : 'html',
            dir : 'coverage/'
        }, */


        coverageReporter: {
            //type : 'html',
            dir: '../../testcoverage/',
            reporters: [
                { type: 'lcov', subdir: '.' }
            ]
        },

        // web server port
        port: 9876,


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_ERROR,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['Chrome'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: false,

        // Concurrency level
        // how many browser should be started simultaneous
        concurrency: Infinity,

        plugins: [
            require("karma-webpack"),
            require('karma-mocha'),
            require('karma-chrome-launcher'),
            require('karma-chai'),
            require('karma-coverage'),
            require('karma-teamcity-reporter'),
			//require('enzyme')
            //require('karma-sourcemap-loader'),
            //require('istanbul-instrumenter-loader'),
            //require('karma-coverage-istanbul-reporter')

        ]
    })
}
