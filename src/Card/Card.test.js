import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Card'
import renderer from 'react-test-renderer'


describe('Card component', ()=>{
	it('renders Card without crashing', () => {
		const div = document.createElement('div')

		ReactDOM.render(<Card/>, div);

		ReactDOM.unmountComponentAtNode(div)	
	})

	it('renders the UI as expected with Card', ()=>{
		const tree = renderer.create(<Card/>).toJSON()

		expect(tree).toMatchSnapshot()
	})
})
