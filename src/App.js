import "./App.css"
import { Component } from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: [
				{ name: "Lavi", id: "1234" },
				{ name: "Jen", id: "1235" },
				{ name: "Paola", id: "1236" }
			]
		}
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
