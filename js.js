const url = 'https://api.github.com/users/SlinkAlex/repos';

const boton_buscar = document.getElementById('buscar');
boton_buscar.addEventListener("click",fetchRepos);
    
async function fetchRepos() {    
    try { 
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            }
        
        const data = await response.json(); // Parsea la respuesta como JSON
        

        data.forEach(element => document.getElementById("repos-container").innerHTML += `<p>  el nombre de repositorio es: ${element.name}</p>`)
    } 
    
    catch (error) {
    console.error('Error al hacer fetch:', error);
    }
}



