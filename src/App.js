import React from 'react';
import './App.css';
import List from './List/List'

function App(props) {
	
	let allCards = props.store.allCards
	let lists = props.store.lists
	console.log(allCards, lists)
	
	
	let ListOfList = lists.map((item)=>{
		return <List header={item.header} cards={item.cardIds.map(id => allCards[id])} key={item.id}/>
	})
	
	console.log(ListOfList)

	
	
	
  return (
    <main className="App">
    	<header className="App-header">
    		<h1>Trelloyes!</h1>
    		<div className="App-list">
    			{ListOfList}
    		</div>
    	</header>
    </main>
  );
}

export default App;
