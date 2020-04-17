import React from 'react'
import PersonPage from './components/PersonPage'
import SidePage from './components/SidePage'
import ResultPage from './components/ResultPage'
import './App.scss'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      name: '',
      gender: '',
      side: '',
      page: 1
    }
  }

  setPersonData = (name, gender) => {
    this.setState({
      name: name,
      gender: gender,
      page: 2
    })
  }

  setSide = (side) => {
    this.setState({
      side: side,
      page: 3
    })
  } 

  resetPages = () => {
    this.setState({
      name: '',
      gender: '',
      side: '',
      page: 1
    })
  }

  //TODO: Use enum for pages
  renderPage = () => {
    switch (this.state.page) {
      case 1:
        return <PersonPage setPersonData={this.setPersonData} />

      case 2:
        return <SidePage setSide={this.setSide} />

      case 3:
        return <ResultPage name={this.state.name} gender={this.state.gender} side={this.state.side}/>

      default:
        return <p>Ooops, alguém sabe qual galáxia é essa?</p>
    }
  }

  renderResetButton = () => {
    if (this.state.page > 1) {
      return <button className="reset-button" onClick={this.resetPages}>Reiniciar</button>
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Preciso de um mestre</h1>
        {this.renderPage()}
        {this.renderResetButton()}
      </div>
    )
  }
}

export default App