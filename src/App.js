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

	render() {
		console.log("render")
		return (
			<div className='App'>
				<input
					className='search-box'
					type='search'
					placeholder='search monster'
					onChange={event => {
						const filteredMonsters = this.state.monsters.filter(monster => {
							return monster.name
								.toLowerCase()
								.includes(event.target.value.toLowerCase())
						})
						this.setState(() => {
							return { monsters: filteredMonsters }
						})
						console.log("event", event.target.value)
					}}
				/>
				{this.state.monsters.map(monster => {
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
