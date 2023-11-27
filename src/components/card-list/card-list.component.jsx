import { Component } from "react"
import Card from "../card.component.jsx/card.component"
import "./card-list.styles.css"

class CardList extends Component {
	render() {
		console.log(this.props.monsters)
		console.log("2.2 render from cardList")
		const { monsters } = this.props

		return (
			<div className='card-list'>
				{monsters.map(monster => {
					
					return (
						<Card monster={monster} key={monster.id}/>
					)
				})}
			</div>
		)
	}
}

export default CardList
