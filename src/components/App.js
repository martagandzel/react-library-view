import './App.css';
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'

function App() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [library, setLibrary] = useState([])

  const [titleInput, setTitleInput] = useState('')
  const [surnameInput, setSurnameInput] = useState('')
  const [nameInput, setNameInput] = useState('')
  const [yearInput, setYearInput] = useState('')
  const [categoryInput, setCategoryInput] = useState('')
  const [coverInput, setCoverInput] = useState('')

  const URL = 'http://localhost:5000/library'

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data => setLibrary(data))
      .catch(err => console.log(err))

  }, [])

  const handleInputChange = event => {
    setSearchInputValue(event.target.value);
  }

  const handleSearch = event => {
    event.preventDefault();
    const matchingBooks = library.filter(book => book.title.toLowerCase().includes(searchInputValue.toLowerCase()))
    setLibrary(matchingBooks);
  }

  const handleBrowseBy = (bookCollection, key) => {
    const sortedBooks = bookCollection.sort((a, b) => a[key] > b[key] ? 1 : -1);
    console.log(sortedBooks);
    setLibrary(sortedBooks);
  }

  const handleBookRemove = id => {
    const booksLeftInTheLibrary = library.filter(book => book.id !== id)
    setLibrary(booksLeftInTheLibrary)

    fetch(`${URL}/${id}`, {
      method: 'DELETE'
    })
  }


  const addTitleInputValue = event => {
    setTitleInput(event.target.value);
  }
  const addNameInputValue = event => {
    setNameInput(event.target.value);
  }
  const addSurnameInputValue = event => {
    setSurnameInput(event.target.value);
  }
  const addYearInputValue = event => {
    setYearInput(event.target.value);
  }
  const addCategoryInputValue = event => {
    setCategoryInput(event.target.value);
  }
  const addCoverInputValue = event => {
    setCoverInput(event.target.value);
  }

  const handleSubmit = event => {
    event.preventDefault()

    const newBook =
    {
      id: uuidv4(),
      title: titleInput,
      surname: surnameInput,
      name: nameInput,
      year: yearInput,
      category: categoryInput,
      image: coverInput,
      alt: `Cover for ${titleInput}`
    }

    const updatedLibrary = library.concat(newBook)
    setLibrary(updatedLibrary)

    fetch(URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })

    setTitleInput('')
    setNameInput('')
    setSurnameInput('')
    setYearInput('')
    setCategoryInput('')
    setCoverInput('')
  }

  return (
    <div className="App">
      {/* Header */}
      <header className="header">
        <h1>Welcome to the Garden Library</h1>
        <p>“If you have a garden and a library, you have everything you need.”</p>
        <small>Marcus Tullius Cicero</small>
      </header>

      {/* Search */}
      <section className="search">
        <form
          onKeyUp={handleSearch}
        >
          <label htmlFor="book-search">
            Search for a book:
            <input
              id="book-search"
              className="book-search"
              type="text"
              placeholder="search for a title"
              onChange={handleInputChange}
              value={searchInputValue}
            />
          </label>
          <button
            type='submit'
            className="reset-button"
          >Reset search</button>
        </form>
      </section>

      {/* Browse by buttons */}
      <section className="browse-by">
        <button
          onClick={() => handleBrowseBy(library, 'category')}
        >Category</button>
        <button
          onClick={() => handleBrowseBy(library, 'surname')}
        >Author</button>
        <button
          onClick={() => handleBrowseBy(library, 'title')}
        >Title</button>
        <button
          onClick={() => handleBrowseBy(library, 'year')}
        >Year</button>
      </section>

      {/* Book view */}
      <h2>Our Books</h2>
      <section
        className="book-view"
      >
        {
          library.map(book => (
            <section className="book-item"
              key={book.id}
            // onClick={showDetails}
            >
              <div><img
                src={book.image}
                alt={book.alt}
              /></div>
              <p className="book-title">{book.title}</p>
              <p>By: <span className="book-author">{book.name} {book.surname}</span></p>
              <p>Release year: <span className="book-year">{book.year}</span></p>
              <p>Category: <span className="book-category">{book.category}</span></p>
              <button
                className="removeABookButton"
                onClick={() => handleBookRemove(book.id)}
              >
                Remove this book
              </button>
            </section>
          ))
        }
      </section>

      {/* Adding a book */}
      <h2>Add a book of your own</h2>
      <section className="addABook">

        <form
          className="addABookForm"
          onSubmit={handleSubmit}
        >
          <label htmlFor="title">
            Add title
            <input
              id="title"
              className="book-search"
              type="text"
              placeholder="add title"
              value={titleInput}
              onChange={addTitleInputValue}
            />
          </label>

          <label htmlFor="name">
            Add author’s name
            <input
              id="name"
              className="book-search"
              type="text"
              placeholder="add author’s name"
              value={nameInput}
              onChange={addNameInputValue}
            />
          </label>

          <label htmlFor="surname">
            Add author’s surname
            <input
              id="surname"
              className="book-search"
              type="text"
              placeholder="add author’s surname"
              value={surnameInput}
              onChange={addSurnameInputValue}
            />
          </label>

          <label htmlFor="year">
            Add release year
            <input
              id="year"
              className="book-search"
              type="text"
              placeholder="add release year"
              value={yearInput}
              onChange={addYearInputValue}
            />
          </label>

          <label htmlFor="category">
            Add book’s category
            <input
              id="category"
              className="book-search"
              type="text"
              placeholder="add book’s category"
              value={categoryInput}
              onChange={addCategoryInputValue}
            />
          </label>

          <label htmlFor="image">
            Add link to cover
            <input
              id="image"
              className="book-search"
              type="text"
              placeholder="paste link to cover"
              value={coverInput}
              onChange={addCoverInputValue}
            />
          </label>

          <button
            type="submit"
            className="addABookButton"
          >
            Add your book
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <h2>Garden Library Project</h2>
        <p>&copy; 2022</p>
      </footer>

    </div >
  );
}

export default App;
