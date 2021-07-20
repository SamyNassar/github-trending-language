'use strict';

const path = require('path');
const serverDir = path.dirname(require.main.filename);
const githubTrendingLanguage = require(path.join(serverDir, 'services/github-trending-language'));

const controllers = {
    main: (req, res) => {
        res.sendFile('index.html')
    },
    trendingLanguage: async (req, res) => {
        const data = await githubTrendingLanguage.getRepoLanguages();
        res.json(data)

    }
}


module.exports = controllers;