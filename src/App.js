import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import TodoApp from './components/TodoApp';


function App() {
  
 return (
    <div className="App">
      {/* <TodoInput addTodo={(text) => { console.log(text) }} /> */}
      {/* <TodoItem todo="asd" /> */}
      <TodoApp />
    </div>
  );

};


export default App;
