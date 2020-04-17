import React from 'react'
import IconButton from '../IconButton'
import './PersonPage.scss'
import MaleIcon from '../../icons/male.svg'
import FemaleIcon from '../../icons/female.svg'

class PersonPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            isNameValid: null,
            errorMessage: ''
        }

        this.handleChange = this.handleChange.bind(this)
    }

    validateName = (name) => {

        if (name === '') {
            this.updateMessage('Desculpa, todo mundo precisa ter um nome nesta galáxia')
            return false
        }

        if (!/^[a-zA-Z]+$/.test(name)) {
            this.updateMessage('Desculpa, nesta galáxia só aceitamos nomes com letras')
            return false
        }

        this.updateMessage('')
        return true
    }

    handleChange = (event) => {
        let fieldValue = event.target.value
        if (this.validateName(fieldValue)) {
            this.setState({ name: fieldValue })
        }
    }

    handleGenderButtonClick = (gender) => {
        if (this.state.isNameValid) {
            this.props.setPersonData(this.state.name, gender)
        } else {
            this.updateMessage('Não podemos te encontrar um mestre sem antes saber teu nome')
        }
    }

    updateMessage = (message) => {
        this.setState({
            isNameValid: message === '',
            errorMessage: message
        })
    }

    render() {
        return (
            <div className='person-page'>
                <h2>Qual é o seu nome, padawan?</h2>

                <input
                    className="name-field"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleChange} />

                <h2>Qual é o seu gênero?</h2>

                <div className="buttons-group">
                    {/* TODO: Use enum for gender */}
                    <IconButton 
                        value="male"
                        icon={MaleIcon}
                        label="Homem" 
                        handleClick={this.handleGenderButtonClick} />
                    <IconButton 
                        value="female"
                        icon={FemaleIcon}
                        label="Mulher"
                        handleClick={this.handleGenderButtonClick} />
                </div>

                <p className="message">{this.state.errorMessage}</p>

            </div>
        );
    }
}

export default PersonPage