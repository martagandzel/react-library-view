import './BrowseByButton.css'

function BrowseByButton(props) {

    return (
        <button
            onClick={() => props.handleBrowseBy(props.bookCollection, '')}
        >{props.text}</button>
    )
}

export default BrowseByButton;