import React from 'react'
import './Card.css'

const card = (props) => {
	let title = props.title
	let content = props.content
	
	
	return (
		<div className="Card">
			<button type="button" onClick={props.deleteHandler}>delete</button>
			<h3>{title}</h3>
			<p>{content}</p>
		</div>
	
	)
}

export default card