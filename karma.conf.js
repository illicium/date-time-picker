module.exports = function(config) {
    config.set({
        // base path that will be used to resolve all patterns (eg. files, exclude)
        basePath: '',


        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['jasmine', 'requirejs'],


        // list of files / patterns to load in the browser
        files: [
            'tests/test-main.js',
            {pattern: 'src/**/*.js', included: false},
            {pattern: 'src/**/*.html', included: false},
            {pattern: 'tests/**/*.js', included: false},
            {pattern: 'node_modules/**/*.js', included: false},
            {pattern: 'bower_components/**/*.js', included: false}
        ],


        // list of files to exclude
        exclude: [],


        // preprocess matching files before serving them to the browser
        // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
        preprocessors: {
            'src/date-time-picker.html': 'ng-html2js'
        },

        ngHtml2JsPreprocessor: {
//            prependPrefix: 'base/',
            stripPrefix: 'src/',
            // setting this option
            // will create only a single module that contains templates
            // from all the files, so you can load them all with module('foo')
            moduleName: 'partials'
        },


        // test results reporter to use
        // possible values: 'dots', 'progress'
        // available reporters: https://npmjs.org/browse/keyword/karma-reporter
        reporters: ['progress'],


        // web server port
        port: 8080,
        runnerPort: 9100,
        captureTimeout: 15000,
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: false,


        // start these browsers
        // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
        browsers: ['PhantomJS'],


        // Continuous Integration mode
        // if true, Karma captures browsers, runs the tests and exits
        singleRun: true
    });
};