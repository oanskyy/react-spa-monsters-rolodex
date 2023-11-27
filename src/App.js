import "./App.css"
import { Component } from "react"
import CardList from "./components/card-list/card-list.component"

class App extends Component {
	constructor() {
		super()
		this.state = {
			monsters: []
		}
		// console.log("1 constructor")
	}

	componentDidMount() {
		// console.log("3 componentDidMount")

		fetch("https://jsonplaceholder.typicode.com/users")
			.then(response => response.json())
			.then(users =>
				this.setState(
					() => {
						return { monsters: users }
					},
					() => {
						// console.log(this.state, 'componentDidMount async')
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
		// console.log("event", event.target.value)
	}

	render() {
		// console.log("2 render")

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
			
				<CardList monsters={filteredMonsters} />
			</div>
		)
	}
}

export default App
