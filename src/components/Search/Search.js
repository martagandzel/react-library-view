import './Search.css'

function Search(props) {

    return (
        <section className="search">
            <form
                onKeyUp={props.handleSearch}
            >
                <label htmlFor="book-search">
                    Search for a book:
                    <input
                        id="book-search"
                        className="book-search"
                        type="text"
                        placeholder="search for a title"
                        onChange={props.handleInputChange}
                        value={props.searchInputValue}
                    />
                </label>
                <button
                    type="submit"
                    className="reset-button"
                >Reset search</button>
            </form>
        </section>
    )
}

export default Search