import "./App.css"
import { Component } from "react"

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: []
		}
		console.log("constructor")
	}

	componentDidMount() {
		console.log("componentDidMount")
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

	// Optimization: not initialize unnecessary anonymous functions whenever the re-render calls. only gets called once when our class component initializes
	onSeachChange = event => {
		const searchField = event.target.value.toLowerCase()

		this.setState(() => {
			return { searchField }
		})
		console.log("event", event.target.value)
	}

	render() {
		console.log("render")

		// Optimization: destructuring
		const { monsters, searchField } = this.state
		const { onSeachChange } = this

		const filteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField)
		})

		return (
			<div className='App'>
				<input
					className='search-box'
					type='search'
					placeholder='search monster'
					onChange={onSeachChange}
				/>
				{filteredMonsters.map(monster => {
					return (
						<div key={monster.id}>
							<h1>{monster.name}</h1>
						</div>
					)
				})}
			</div>
		)
	}
}

export default App
