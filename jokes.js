
const button = document.querySelector('button');
const jokes = document.querySelector('#jokes');

const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement('li');
    newLI.append(jokeText);
    jokes.append(newLI)
}


const getDadJoke = async () => {
    try{
        const config = {headers: {Accept: 'application/json' }}
        const res = await axios.get('https://icanhazdadjoke.com/', config );
        return res.data.joke;
    } catch(e){
        return "No jokes available! Sorry :("
    }
    
}

button.addEventListener('click',addNewJoke )