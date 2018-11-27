// // TODO

class GroceryListItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			done: false
		};
	}

	onListItemClick() {
		this.setState({
			done: !this.state.done
		});
	}

	render() {
		var style = {
			fontWeight: this.state.done ? 'bold' : 'normal'
		};

		return (
			<li style = {style} onMouseOver={this.onListItemClick.bind(this)}>{this.props.todo}</li>
		);
	}
}

var GroceryList = (props) => (
	<ul>
		{
			props.grocery.map(todo => <GroceryListItem todo={todo}/>)
		}
	</ul>
)

ReactDOM.render(
  <GroceryList grocery={['Apples', 'Oranges']}/>, 
  document.getElementById('app')
);

// // var groceryItems = ['apples', 'oranges'];
// // var GroceryList = (props) => (
// //   // var onListItemClick() {
// //   //   this.setState({
// //   //     done: !this.state.done
// //   //   });
// //   // }
// //   <ul>
// //     <li>{props.todos[0]}</li>
// //     <li>{props.todos[1]}</li>
// //   </ul>
// // );

// // var onListItemClick = (event) => {
// //   console.log('I got clicked');
// // };

// // var App = () => (
// //   <div>
// //     <h2>My Todo List</h2>
// //     <GroceryList todos={['apples', 'oranges']}/>
// //   </div>
// // );

// // var TodoList = (props) => {

// //   var onListItemClick = (event) => {
// //     console.log('I got clicked');
// //   };
// //   return (
// //   <ul>
// //     <li onClick={onListItemClick}>{props.todos[0]}</li>
// //     <li>{props.todos[1]}</li>
// //     <li>{props.todos[2]}</li>
// //   </ul>
// //   );
// // }

// // var App = () => (
// //   <div>
// //     <h2>My Todo List</h2>
// //     <TodoList todos={['apples', 'oranges']}/>
// //   </div>
// // );

// // ReactDOM.render(
// //   <TodoList />, 
// //   document.getElementById('app')
// // );

// // ReactDOM.render(<App />, document.getElementById('app'));

// // A class component can be defined as an ES6 class
// // that extends the base Component class included in the React library
// // class TodoListItem extends React.Component {

// //   // A `constructor` method is expected on all ES6 classes
// //   // When React instantiates the component,
// //   // it will pass `props` to the constructor
// //   constructor(props) {
// //     // Equivalent to ES5's React.Component.call(this, props)
// //     super(props);
// //   }

// //   // Every class component must have a `render` method
// //   // Stateless functional components are pretty much just this method
// //   render() {

// //     // `props` is no longer passed as an argument,
// //     // but instead accessed with `this.props`
// //     return (
// //       <li>{this.props.todo}</li>
// //     );

// //   }

// // }

// // // Update our `TodoList` to use the new `TodoListItem` component
// // // This can still be a stateless function component!
// // var TodoList = (props) => (
// //   <ul>
// //     {props.todos.map(todo =>
// //       <TodoListItem todo={todo} />
// //     )}
// //   </ul>
// // );

// class TodoListItem extends React.Component {
//   constructor(props) {
//     super(props);

//     // `state` is just an object literal
//     this.state = {
//       done: false
//     };
//   }

//   // When a list item is clicked, we will toggle the `done`
//   // boolean, and our component's `render` method will run again
//   onListItemClick() {
//     this.setState({
//       done: !this.state.done
//     });
//   }

//   render() {
//     // Making the style conditional on our `state` lets us 
//     // update it based on user interactions.
//     var style = {
//       textDecoration: this.state.done ? 'line-through' : 'none'
//     };

//     // You can pass inline styles using React's `style` attribute to any component
//     // snake-cased css properties become camelCased this this object
//     return (
//       <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.todo}</li>
//     );
//   }
// }

// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );