const core = require("@actions/core");
const github = require("@actions/github");

async function run() {
    try {
        const issueTitle = core.getInput("issue-title");
        const jokebody = core.getInput("joke");
        const token = core.getInput("repo-token");

        const octokit = github.getOctokit(token);

        const newIssue = await octokit.rest.issues.create({
            repo: github.context.repo.repo,
            owner: github.context.repo.owner,
            title: issueTitle,
            body: jokebody
        });
         
    } catch (error) {
        core.setFailed(error.message);
    }
}

run();
