import Card from "../card.component.jsx/card.component"
import "./card-list.styles.css"

const CardList = ({ monsters }) => {
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
