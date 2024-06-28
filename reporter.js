
const reporter = require('k6-html-reporter');

const options = {
        jsonFile: './',
        output: './',
    };

reporter.generateSummaryReport(options);
    