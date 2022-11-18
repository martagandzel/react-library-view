import './BrowseByButton.css'

function BrowseByButton(props) {

    return (
        <button
            onClick={() => props.handleBrowseBy()}
        >{props.text}</button>
    )
}

export default BrowseByButton;