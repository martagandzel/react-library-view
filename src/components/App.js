import './App.css';
import { useState } from 'react'

function App() {

  const [searchInputValue, setSearchInputValue] = useState('');
  const [library, setLibrary] = useState([
    {
      id: 31,
      title: "Vlad: The Last Confession",
      surname: "Humphreys",
      name: "C.C.",
      year: "2008",
      category: "historical fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546092935i/4712458.jpg",
      alt: "Cover for Vlad: The Last Confession"
    },
    {
      id: 32,
      title: "Frankenstein",
      surname: "Shelley",
      name: "Mary",
      "year": "1818",
      category: "horror",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1631088473i/35031085.jpg",
      alt: "Cover for Frankenstein"
    },
    {
      id: 33,
      title: "Shadowplay",
      surname: "O'Connor",
      name: "Joseph",
      year: "2019",
      category: "historical fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1546223576i/41723505.jpg",
      alt: "Cover for Shadowplay"
    },
    {
      id: 34,
      title: "The Historian",
      surname: "Kostova",
      name: "Elizabeth",
      year: "2005",
      category: "historical fiction",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1592232171i/30236962.jpg",
      alt: "Cover for The Historian"
    },
    {
      id: 6,
      title: "Dracula",
      surname: "Stoker",
      name: "Bram",
      year: "1897",
      category: "horror",
      image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1387151694i/17245.jpg",
      alt: "Cover for Dracula"
    }
  ])

  const handleInputChange = (event) => {
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
            </section>
          ))
        }
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
