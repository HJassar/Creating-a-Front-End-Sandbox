// Tutorial here: https://www.youtube.com/watch?v=t1xFzqxYS4g

console.log('Please 👍 and subscribe')

const bookCount = 3;
const url = 'https://fakerapi.it/api/v1/texts?_quantity='+bookCount+'&_characters=500'

const fetchBooks = async () => {
    const response = await fetch(url)
    const parsed = await response.json()
    return parsed.data
}

// 📚 The book stack is empty, time to fill it!
let bookStack = '';
const bookStackDiv = document.querySelector('#bookStackDiv')
const printBooks = async () => {
    const mybooks = await fetchBooks()
    mybooks.map(b=>{
        bookStack += `
        <div class="book">
            <h2 class='title'>${b.title}</h2>
            <em class='author'>${b.author}</em>
            <p class='content'>${b.content}</p>
        </div>`
    })
    bookStackDiv.innerHTML = bookStack;
}

printBooks()