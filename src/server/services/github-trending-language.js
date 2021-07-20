const axios = require('axios');

const dateFormat = require("dateformat");

const today = new Date();
const last_30_days_date = new Date().setDate(today.getDate() - 30);


const date = dateFormat(last_30_days_date, "yyyy-mm-dd");
const NUM_OF_REPOS = 100;

const  GITHUB_REPO_ENDPOINT = `https://api.github.com/search/repositories?q=created:>${date}&sort=stars&order=desc&per_page=${NUM_OF_REPOS}`;

console.log(GITHUB_REPO_ENDPOINT)


const fetch = async (endpoint) => {
    return await axios.get(endpoint)
    .then((response) => {
        return response.data;
    })
    .catch(e => console.log(e));
}


const getTrendingRepos = async () => {
    return await fetch(GITHUB_REPO_ENDPOINT).then(res => res.items);
}

const getRepoLanguages = async () => {

    let languagesInfo = {};

    const trendingRepos = await getTrendingRepos();
    trendingRepos.forEach((repo) => {
        if(repo.language != null){
            if(!(repo.language in languagesInfo)){
                languagesInfo[repo.language] = [];
            }
            languagesInfo[repo.language].push(repo.html_url);
        }
        
    });
    return languagesInfo
}


module.exports = {getRepoLanguages}
