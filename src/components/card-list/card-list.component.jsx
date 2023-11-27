import { Component } from "react"

class CardList extends Component {
	render() {
		console.log(this.props.monsters)
		console.log("2.2 render from cardList")
		const { monsters } = this.props

		return (
			<div>
				Hello I'm the CardList Component
				{monsters.map(monster => (
					<h1 key={monster.id}>{monster.name}</h1>
				))}
			</div>
		)
	}
}

export default CardList
