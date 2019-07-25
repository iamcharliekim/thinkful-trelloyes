import React from 'react'
import ReactDOM from 'react-dom'
import List from './List'
import renderer from 'react-test-renderer'

describe('List component', ()=>{
	it('renders List without crashing', ()=>{
		let div = document.createElement('div')

		ReactDOM.render(<List header='example header' cards={[{title: 'exampleTitle', content: 'exampleContent'}]}/>, div)

		ReactDOM.unmountComponentAtNode(div)
	})

	it('renders the UI of List as expected', ()=> {
		const tree = renderer.create(<List header='example header' cards={[{title: 'exampleTitle', content: 'exampleContent'}]} />).toJSON();

		expect(tree).toMatchSnapshot()
	})
	
	
})
