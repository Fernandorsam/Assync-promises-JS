// need import library 'axios'

import axios from 'axios';

 async function fetchRepos(){

try {

    const user = await axios.get("https://api.github.com/users/Fernandorsam");
    const repos = await axios.get(user.data.repos_url)
    console.log(repos.data);
    
} catch(error) {
    console.log(error+'url do repositorio nao acessado')
    
}

 }

 fetchRepos();