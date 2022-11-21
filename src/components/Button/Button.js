import './Button.css'

function Button(props) {

    return (
        <button
            onClick={() => props.handleBrowseBy()}
        >
            {props.text}
        </button>
    )
}

export default Button;