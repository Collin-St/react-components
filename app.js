// TODO
// var groceryItems = ['apples', 'oranges'];
var GroceryList = (props) => (
  <ul>
    <li>{props.todos[0]}</li>
    <li>{props.todos[1]}</li>
  </ul>
);



var App = () => (
  <div>
    <h2>My Todo List</h2>
    <GroceryList todos={['apples', 'oranges']}/>
  </div>
);

ReactDOM.render(
  <GroceryList />, 
  document.getElementById('app')
);