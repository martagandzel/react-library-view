import './AddBookForm.css'

function AddBookForm(props) {

    return (
        <section className="addABook">

            <form
                className="addABookForm"
                onSubmit={props.handleSubmit}
            >
                <label htmlFor="title">
                    Add title
                    <input
                        id="title"
                        className="book-search"
                        type="text"
                        placeholder="add title"
                        value={props.titleInput}
                        onChange={props.addTitleInputValue}
                    />
                </label>

                <label htmlFor="name">
                    Add author’s name
                    <input
                        id="name"
                        className="book-search"
                        type="text"
                        placeholder="add author’s name"
                        value={props.nameInput}
                        onChange={props.addNameInputValue}
                    />
                </label>

                <label htmlFor="surname">
                    Add author’s surname
                    <input
                        id="surname"
                        className="book-search"
                        type="text"
                        placeholder="add author’s surname"
                        value={props.surnameInput}
                        onChange={props.addSurnameInputValue}
                    />
                </label>

                <label htmlFor="year">
                    Add release year
                    <input
                        id="year"
                        className="book-search"
                        type="text"
                        placeholder="add release year"
                        value={props.yearInput}
                        onChange={props.addYearInputValue}
                    />
                </label>

                <label htmlFor="category">
                    Add book’s category
                    <input
                        id="category"
                        className="book-search"
                        type="text"
                        placeholder="add book’s category"
                        value={props.categoryInput}
                        onChange={props.addCategoryInputValue}
                    />
                </label>

                <label htmlFor="image">
                    Add link to cover
                    <input
                        id="image"
                        className="book-search"
                        type="text"
                        placeholder="paste link to cover"
                        value={props.coverInput}
                        onChange={props.addCoverInputValue}
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
    )
}

export default AddBookForm