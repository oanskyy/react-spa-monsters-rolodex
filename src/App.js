import "./App.css"
import { Component } from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [
				// { name: "Lavi", id: "1234" },
				// { name: "Jen", id: "1235" },
				// { name: "Paola", id: "1236" }
			]
		}
	}

	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users =>
				this.setState(
					() => {
						return { monsters: users }
					},
					() => {
						console.log(this.state)
					}
				)
			)
	}

	render() {
		return (
			<div className='App'>
				{this.state.monsters.map(monster => {
					return <h1 key={monster.id}>{monster.name}</h1>
				})}
			</div>
		)
	}
}

export default App
