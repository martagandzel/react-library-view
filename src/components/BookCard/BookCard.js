import './BookCard.css'

function BookCard(props) {

    return (
        <section className="book-item"
            key={props.book.id}
        // onClick={showDetails}
        >
            <div><img
                src={props.book.image}
                alt={props.book.alt}
            /></div>
            <p className="book-title">{props.book.title}</p>
            <p>By: <span className="book-author">{props.book.name} {props.book.surname}</span></p>
            <p>Release year: <span className="book-year">{props.book.year}</span></p>
            <p>Category: <span className="book-category">{props.book.category}</span></p>
            <button
                className="removeABookButton"
                onClick={() => props.handleBookRemove(props.book.id)}
            >
                Remove this book
            </button>
        </section>
    )
}

export default BookCard