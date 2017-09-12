import React from 'react'
import DummyData from '../dummyData.json'
import ColorRow from './colorRow'
import './colorContainer.css';

class ColorContainer extends React.Component {
  constructor() {
    super()

    this.state = { entries: [], count: 0 }
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.setState({ entries: DummyData.slice(0, 5), count: 5 })
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = (e) => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      const count = this.state.count
      const entries = this.state.entries
      const newArray = entries.concat(DummyData.slice(count, count + 5))

      this.setState({
        entries: newArray,
        count: count + 5
      })
    }
  }

  renderRows = () => {
    return this.state.entries.map((entry, index) => {
      return (
        <ColorRow key={index} value={entry} />
      )
    })
  }

  render() {
    return (
      <div className="color-container">
        {this.renderRows()}
      </div>
    )
  }
}

export default ColorContainer