const express = require('express')
const {Octokit} = require("octokit")
const cors = require("cors");

const app = express()
const PORT = 3000
app.use(express.json())
app.use(cors());

const octokit = new Octokit()

app.get('/users/:username/repos', async (req, res) => {
    const { username } = req.params;
    try {
        const { data } = await octokit.rest.repos.listForUser({
            username
        });
        const repositories = data.map(repo => ({
            name: repo.name,
            language: repo.language,
            updated_at: repo.updated_at,
            forks_count: repo.forks_count,
            stargazers_count: repo.stargazers_count,
        }))
        res.json(repositories);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user repositories' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})