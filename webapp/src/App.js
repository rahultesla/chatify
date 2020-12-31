import logo from './logo.svg';
import './App.css';
import socketClient from "socket.io-client";

const SERVER = "http://localhost:8080";

function App() {
    var socket = socketClient(SERVER);
    socket.on('connection', () => {
        console.log(`I'm connected with the back-end`);

        const [input, setinput] = useState()

        function inputhandler(event) {
            setinput(event.target.value)
        }
    });
    return ( <
        div className = "App" >

        // display-output   


        { input }


        // input-box

        <
        input className = "chatbox"
        onChange = { inputhandler }

        placeholder = "type here to chat" /
        >

        // button

        <
        button > send < /button>



        <
        header className = "App-header" >
        <
        img src = {
            logo
        }
        className = "App-logo"
        alt = "logo" / >
        <
        p >

        Edit < code > src / App.js < /code> and save to . < /
        p > <
        a className = "App-link"
        href = "https://reactjs.org"
        target = "_blank"
        rel = "noopener noreferrer" >
        Learn React <
        /a> < /
        header > <
        /div>
    );
}


export default App;