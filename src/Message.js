import './App.css';

function Message(props) {
    return (
        <div className="message">
            <header className="Message-header">
                <h5>Hello, {props.name}!</h5>
            </header>
        </div>
    );
}

export default Message;