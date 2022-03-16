console.log('this is working for now')

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