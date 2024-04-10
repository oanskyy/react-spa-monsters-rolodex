import { useState, useEffect, ChangeEvent } from "react"

import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"
import "./App.css"

import { getData } from "./utils/data.utils"

export type Monster = {
	name: string
	id: string
	email: string
}

const App = () => {
	console.log("render")
	const [searchField, setSearchField] = useState("") //[value, setValue]
	const [monsters, setMonsters] = useState<Monster[]>([])
	const [filteredMonsters, setFilteredMonsters] = useState(monsters)

	useEffect(() => {
		console.log("effect fired")

		const fetchUsers = async () => {
			const users = await getData<Monster[]>(
				"https://jsonplaceholder.typicode.com/users"
			)
			setMonsters(users)
		}
		fetchUsers()

		// fetch("https://jsonplaceholder.typicode.com/users")
		// 	.then(response => response.json())
		// 	.then(users => setMonsters(users))
	}, [])

	useEffect(() => {
		const newFilteredMonsters = monsters.filter(monster => {
			return monster.name.toLowerCase().includes(searchField)
		})

		setFilteredMonsters(newFilteredMonsters)
	}, [monsters, searchField])

	const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const searchFieldString = event.target.value.toLocaleLowerCase()
		setSearchField(searchFieldString)
	}

	return (
		<div className='App'>
			<h1 className='app-title'>Monsters Rolodex</h1>
			<SearchBox
				className='search-box'
				onChangeHandler={onSearchChange}
				placeholder='search monsters'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	)
}

export default App
