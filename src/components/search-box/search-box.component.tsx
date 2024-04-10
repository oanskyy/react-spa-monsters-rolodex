import { ChangeEvent } from "react"
import "./search-box.styles.css"

// interface ISearchBoxProps {
// 	className: string
// 	placeholder: string
// 	onChangeHandler: ()
// }

type SearchBoxProps = {
	className: string
	placeholder: string
	onChangeHandler: (event: ChangeEvent<HTMLInputElement>) => void
}

const SearchBox = ({
	className,
	placeholder,
	onChangeHandler
}: SearchBoxProps) => (
	<input
		className={`search-box ${className}`}
		type='search'
		placeholder={placeholder}
		onChange={onChangeHandler}
	/>
)

export default SearchBox

// NOTE
// 3rd party library types that we can inherit. type paramaters that we can pass known as generics
// function definition
// onChangeHandler: ChangeEventHandler<HTMLInputElement>
// more precise, event def, instead of function def
// func: ChangeEventHandler; this is the same as below just typed more manually.
