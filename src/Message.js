import './App.css';

function Message(props) {
    return (
        <div className="message">
            <header className="Message-header">
                <h6>Hello, {props.name}</h6>
            </header>
        </div>
    );
}

export default Message;