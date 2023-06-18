import {API} from "./config/config"
import fork from "./assets/fork.svg"
import star from "./assets/star.svg"

const generate_repository_html = repository_data => `
    <div class="repository">
        <div>
            <div class="title">${repository_data.name}</div>
            <div class="info">
                <div class="language">${repository_data.language}</div>
                <div class="commit-time">Updated: ${repository_data.updated_at.substring(0, 10)}</div>
            </div>
        </div>
        <div class="statistics">
            <div class="forks">
                <img src="${fork}" alt="fork"/>
                ${repository_data.forks_count}
            </div>
            <div class="stars">
                <img src="${star}" alt="star"/>
                ${repository_data.stargazers_count}
            </div>
        </div>
    </div>
    `

const user_repositories = async () => {
    const username = document.getElementById("username").value
    const response = await fetch(`${API}/users/${username}/repos`, {
        method: "GET",
        headers: {"Content-Type": "application/json",}
    })
    if(response.status === 500){
        document.getElementById("repositories").innerHTML = ""
        return
    }

    const repositories_data = await response.json()
    let repositories_html = ""
    repositories_data.forEach(repository_data => repositories_html += generate_repository_html(repository_data))
    document.getElementById("repositories").innerHTML = repositories_html
}

document.getElementById("find").addEventListener("click", user_repositories, false)
