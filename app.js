// Part One
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getGif();
    // const searchTerm = document.getElementById('searchInput').value;
    // // Get API key by clicking "Create an App" the GIPHY Developer Dashboard
    // const apiKey = 'UiT3hkedZuiC4QTTlzcvRD4j4eDddYAu';

    // axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`)
    //     .then(response => console.log(response.data))
    //     .catch(error => console.log(error))
}
);
// Part Two
async function getGif() {
    const searchTerm = document.getElementById('searchInput').value;
    // // Get API key by clicking "Create an App" the GIPHY Developer Dashboard
    const apiKey = 'UiT3hkedZuiC4QTTlzcvRD4j4eDddYAu';

    let res = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}`);
    form.append(res.data);
    // let img = document.createElement('img');
    // img.src = res.data.images.original[url];
    // form.append(img);
}

// console.log("Let's get this party started!");