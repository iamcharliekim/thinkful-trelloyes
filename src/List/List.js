import React from 'react'
import './List.css'
import Card from '../Card/Card'

const list = (props) => {
	let header = props.header
	let cards = props.cards
	
	let listCards = cards.map((card, i) => {
		return <Card title = {card.title} content = {card.content} key = {i} deleteHandler = {()=> props.deleteHandler(card.id)}/> 
	})
	return (
		<section className="List">
			<header className="List-header"><h2>{header}</h2></header>
			<div className="List-cards">
				{listCards}
				<button type="button" className="List-add-button" onClick={()=>props.randomCardHandler(props.id)}>
              + Add Random Card
            </button>
			</div>
		</section>
	
	)
}

export default list