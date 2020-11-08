import axios from "axios";

const URL = 'http://jsonplaceholder.typicode.com/todos/7';

// “duck typing” or “structural subtyping”

// interfaces fill the role of naming these types, and
// are a powerful way of defining contracts within your code
// as well as contracts with code outside of your project.
interface Todo {
	id: number;
	title: string;
	completed: boolean;
	userId: number;
}

axios.get(URL).then(response => {
	const todo = response.data as Todo;

	const id = todo.id;
	const title = todo.title;
	const completed = todo.completed;

	// logTodo(id, completed, title);
	logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
	console.log(`${id}, ${title}, ${completed}`);
}