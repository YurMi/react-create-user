import UserList from "./components/UserList/UserList";
import SetUserForm from "./components/SetUserForm/SetUserForm";
import {useState} from "react";

const startUsersArray = [
	{id: 'c1', name: "Yurii", age: 30},
]

function App() {
	const [newUsersArray, setNewUsersArray] = useState(startUsersArray);

	const setNewUserHandler = (data) => {
		setNewUsersArray(prev => [
			data,
			...prev
		])
	}
	const removeUserHandler = (data) => {
		setNewUsersArray(prev => prev.filter(el => el.id !== data))
	}

	return (
		<div className="App">
			<div className="container">
				<SetUserForm users_arr={newUsersArray} setNewUser={setNewUserHandler}/>
				<UserList
					users_arr={newUsersArray}
					removeUser={removeUserHandler}
				/>
			</div>
		</div>
	);
}

export default App;
