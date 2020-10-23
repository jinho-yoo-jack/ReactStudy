import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import MyComponent from "./MyComponent";
// import Counter from "./Counter";
// import Say from "./Say";
// import EventPractice_c from "./EventPractice_c";
// import EventPractice_f from "./EventPractice_f";
// import ValidationSample from "./ValidationSample";
// import ScrollBox from "./class/ScrollBox";
// import Counter from "./hooks/Counter";
// import CounterReducer from "./hooks/Counter_reducer";
// import Info from "./hooks/Info";
// import Average from "./hooks/Average";
// import CandyDispenser from "./hooks/CandyDispenser";
import SassComponent from "./hooks/SassComponent";

function App() {
    return (
        <div>
            <SassComponent />
            {/*<CounterReducer />*/}
            {/*<CandyDispenser />*/}
            {/*<Average />*/}
            {/*<Info />*/}
            {/*<Counter />*/}
            {/*<ScrollBox ref={(ref) => this.box=ref} />*/}
            {/*<button onClick={() => {this.box.scrollToBottom()}}>아래로</button>*/}
            {/*<ValidationSample />*/}
            {/*<EventPractice_f />*/}
            {/*<EventPractice_c />*/}
            {/*<Say />*/}
            {/*<MyComponent name="Cpt.Jack">Children</MyComponent>*/}
            {/*<Counter />*/}
        </div>
    );
}

// class App extends Component {
//     render() {
//         return (
//             <div>
//                 <ScrollBox ref={(ref) => this.scrollBox = ref}/>
//                 <button onClick={() => {
//                     this.scrollBox.scrollToBottom()
//                 }}>아래로
//                 </button>
//                 {/*<ValidationSample />*/}
//                 {/*<EventPractice_f />*/}
//                 {/*<EventPractice_c />*/}
//                 {/*<Say />*/}
//                 {/*<MyComponent name="Cpt.Jack">Children</MyComponent>*/}
//                 {/*<Counter />*/}
//             </div>
//         );
//     }
// }

export default App;