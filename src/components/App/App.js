import './App.css';
import Header from '../Header/Header'
import Search from '../Search/Search';
import Button from '../Button/Button'
import BookCard from '../BookCard/BookCard';
import AddBookForm from '../AddBookForm/AddBookForm';
import Footer from '../Footer/Footer';
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
    const sortedBooks = [...bookCollection].sort((a, b) => a[key] > b[key] ? 1 : -1);
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
      <Header />

      <Search
        handleSearch={handleSearch}
        handleInputChange={handleInputChange}
        searchInputValue={searchInputValue}
      />

      <section className="browse-by">
        <Button
          text="Category"
          handleBrowseBy={() => handleBrowseBy(library, 'category')}
          bookCollection={library}
        ></Button>
        <Button
          text="Author"
          handleBrowseBy={() => handleBrowseBy(library, 'surname')}
          bookCollection={library}
        ></Button>
        <Button
          text="Title"
          handleBrowseBy={() => handleBrowseBy(library, 'title')}
          bookCollection={library}
        ></Button>
        <Button
          text="Year"
          handleBrowseBy={() => handleBrowseBy(library, 'year')}
          bookCollection={library}
        ></Button>
      </section>

      <h2>Our Books</h2>
      <section
        className="book-view"
      >
        {
          library.map(book => (
            <BookCard
              key={book.id}
              book={book}
              handleBookRemove={handleBookRemove}
            />
          ))
        }
      </section>

      <h2>Add a book of your own</h2>
      <AddBookForm
        handleSubmit={handleSubmit}
        titleInput={titleInput}
        addTitleInputValue={addTitleInputValue}
        nameInput={nameInput}
        addNameInputValue={addNameInputValue}
        surnameInput={surnameInput}
        addSurnameInputValue={addSurnameInputValue}
        yearInput={yearInput}
        addYearInputValue={addYearInputValue}
        categoryInput={categoryInput}
        addCategoryInputValue={addCategoryInputValue}
        coverInput={coverInput}
        addCoverInputValue={addCoverInputValue}
      />

      <Footer />

    </div >
  );
}

export default App;
