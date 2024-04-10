import Card from "../card/card.component.tsx"
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
