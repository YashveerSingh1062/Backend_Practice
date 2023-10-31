require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

const githubData = {
    "login": "YashveerSingh1062",
    "id": 82874940,
    "node_id": "MDQ6VXNlcjgyODc0OTQw",
    "avatar_url": "https://avatars.githubusercontent.com/u/82874940?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/YashveerSingh1062",
    "html_url": "https://github.com/YashveerSingh1062",
    "followers_url": "https://api.github.com/users/YashveerSingh1062/followers",
    "following_url": "https://api.github.com/users/YashveerSingh1062/following{/other_user}",
    "gists_url": "https://api.github.com/users/YashveerSingh1062/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/YashveerSingh1062/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/YashveerSingh1062/subscriptions",
    "organizations_url": "https://api.github.com/users/YashveerSingh1062/orgs",
    "repos_url": "https://api.github.com/users/YashveerSingh1062/repos",
    "events_url": "https://api.github.com/users/YashveerSingh1062/events{/privacy}",
    "received_events_url": "https://api.github.com/users/YashveerSingh1062/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Yashveer Singh",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "Self Taught Developer",
    "twitter_username": null,
    "public_repos": 30,
    "public_gists": 0,
    "followers": 5,
    "following": 9,
    "created_at": "2021-04-20T09:39:40Z",
    "updated_at": "2023-10-01T12:34:47Z"
  }

app.get("/", (req, res) => {
  res.send("Hello Yashveer!");
});

app.get("/twitter", (req, res) => {
  res.send("Yashveer_Singh_1062");
});

app.get('/login',(req,res) =>{
    res.send('<h1> Please say Hi to Yashveer Singh</h1>')
})

app.get('/leetcode',(req,res) =>{
    res.send("<h2>Rishi tu web seekh palcement ki tension mt le, Bgwaan dekh rhe h kuch n kuch kr hi denge</h2>")
})

app.get('/github', (req,res) =>{
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
