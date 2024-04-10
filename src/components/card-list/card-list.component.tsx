import { Monster } from "../../App.js"

import Card from "../card/card.component.js"
import "./card-list.styles.css"

type CardListProps = {
	monsters: Monster[]
}

const CardList = ({ monsters }: CardListProps) => {
	console.log("2.2 render from cardList")

	return (
		<div className='card-list'>
			{monsters.map(monster => {
				return <Card monster={monster} key={monster.id} />
			})}
		</div>
	)
}

export default CardList
