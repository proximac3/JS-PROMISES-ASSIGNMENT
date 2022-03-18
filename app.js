
// miltiple numbers html element
const multipleNumbersFactsElement = document.querySelector('.multiple_numbers_facts')
// favorite number html element
const favoriteNumbeElement = document.querySelector('.favorite_numbers_facts')

// Number Facts URL 
const url = 'http://numbersapi.com/random/year?json' 

let results = []

for (let i = 1; i < 8; i++) {
    results.push(
        axios.get(`http://numbersapi.com/random/year?json` )
    )
};

Promise.all(results)
    .then(Element => {
        // loop through returns array of results
        for (elem of Element) {
            // create page element
            let node = document.createElement('li')
            node.innerText = elem.data.text
            multipleNumbersFactsElement.appendChild(node)
        }
    })
    .catch(err => console.log(err))


favoriteNumberPromise = axios.get('http://numbersapi.com/6/year?json')

favoriteNumberPromise
    .then(elem => {
        let node = document.createElement('li')
        node.innerText = elem.data.text
        favoriteNumbeElement.appendChild(node)

        return axios.get('http://numbersapi.com/9/year?json')
    })
    .then(elem => {
        let node = document.createElement('li')
        node.innerText = elem.data.text
        favoriteNumbeElement.appendChild(node)

        return axios.get('http://numbersapi.com/7/year?json')
    })
    .then(elem => {
        let node = document.createElement('li')
        node.innerText = elem.data.text
        favoriteNumbeElement.appendChild(node)

        return axios.get('http://numbersapi.com/1/year?json')
    })
    .then(elem => {
        let node = document.createElement('li')
        node.innerText = elem.data.text
        favoriteNumbeElement.appendChild(node)
    })
    .catch(err => console.log(err))



//////////////////////////////////////////////////////////////////////////////////
// part two deck of cards with await and async

// pokemon promises


async function pokemonApi() {
    let results = await axios.get('https://pokeapi.co/api/v2/pokemon')
    
    let pokeUrl = []

    for (let i = 0; i < 4; i++){
        pokeUrl.push(
            axios.get(results.data.results[Math.floor(Math.random()
                * results.data.results.length)].url))
    }

    // pokemon data
    let poke1=await pokeUrl[0]
    let poke2=await pokeUrl[1]
    let poke3=await pokeUrl[2]
    let poke4=await pokeUrl[3]

    // species data from pokemon
    let poke1Species = axios.get(poke1.data.species.url)
    let poke2Species = axios.get(poke2.data.species.url)
    let poke3Species = axios.get(poke3.data.species.url)
    let poke4Species = axios.get(poke4.data.species.url)
        
    // returned species data
    let sp1Data = await poke1Species
    let sp2Data = await poke2Species
    let sp3Data = await poke3Species
    let sp4Data = await poke4Species

    console.log(`${poke1.data.name}, ${sp1Data.data.flavor_text_entries[0].flavor_text}`)

    console.log(`${poke2.data.name}, ${sp2Data.data.flavor_text_entries[0].flavor_text}`)

    console.log(`${poke3.data.name}, ${sp3Data.data.flavor_text_entries[0].flavor_text}`)

    console.log(`${poke4.data.name}, ${sp4Data.data.flavor_text_entries[0].flavor_text}`)


    return pokeUrl
};

pokemonApi()

