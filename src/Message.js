import './App.css';

function Message(props) {
    return (
        <div className="message">
            <header className="Message-header">
                <p className="MessageAuthor">{props.author}: </p>
                <div> {props.text}!</div>
            </header>
        </div>
    );
}

export default Message;