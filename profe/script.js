const url = "https://api.github.com/users/SlinkAlex/repos"

const boton_buscar = document.getElementById("buscar");
boton_buscar.addEventListener("click", fetchRepos);


async function fetchRepos() {
    try {
        const repos = await fetch(url);

        if (!repos.ok) {
            throw new Error("No se pudieron obtener los repositorios");
        }

        const lista_repos = await repos.json();

        // console.log(lista_repos);

        lista_repos.forEach(repositorio => 
            document.getElementById("repo-container").innerHTML += `
            <p> El nombre del repositorio es: ${repositorio.name}</p>
            <p> El enlace del repositorio es: <a href="${repositorio.html_url}" target="_blank">${repositorio.html_url}</a></p>
            `
        )

    } catch (error) {
        console.log(error);
    }
}

