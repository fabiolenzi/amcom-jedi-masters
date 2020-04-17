import React from 'react'
import './ResultPage.scss'

class ResultPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            filteredPersons: null
        }
    }

    componentDidMount = () => {
        this._asyncRequest = fetch('https://cdn.rawgit.com/akabab/starwars-api/0.2.1/api/all.json')
            .then(res => res.json())
            .then(data => {
                this._asyncRequest = null;
                let filteredData = this.filterBySide(data)
                this.setState({ filteredPersons: filteredData })
            })
            .catch(console.log)
    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel()
        }
    }

    filterBySide(data) {
        return data.filter(person => this.isPersonAffiliated(person))
    }

    isPersonAffiliated = (person) => {
        try {
            switch (this.props.side) {
                case 'jedi':
                    return person.affiliations.includes('Jedi Order')

                case 'sith':
                    return person.affiliations.includes('Sith')

                default:
                    return true
            }
        } catch (error) {
            console.log(error)
        }
    }

    getRandomPersonFromList = (list) => {
        return list[Math.floor(Math.random() * list.length)]
    }

    renderWelcomeMessage = () => {
        switch (this.props.gender) {
            case 'male':
                return <h2>{`Bem-vindo, ${this.props.name}!`}</h2>

            case 'female':
                return <h2>{`Bem-vinda, ${this.props.name}!`}</h2>

            default:
                return <h2>{`Olá, ${this.props.name}!`}</h2>
        }
    }

    renderResult = () => {
        let message = ''
        let master = ''

        let list = this.state.filteredPersons

        if (list.length === 0) {
            message = `Parece que não há mestres diponíveis nos bancos de dados da República neste momento. Tente novamente mais tarde.`
        } else {
            message = `Encontramos um mestre para você!`
            master = this.getRandomPersonFromList(list)
        }

        return (
            <div className="result">
                <h3>{message}</h3>
                {master ? this.renderMastarData(master) : ""}
            </div>
        )
    }

    renderMastarData = (master) => {
        return <div>
            <p>{master.name}</p>
            <img src={master.image} alt={`${master.name}`} />
            <p>
                {`Saiba mais sobre seu novo mestre `}
                <a href={master.wiki} target="_blank" rel="noopener noreferrer">aqui</a>
            </p>
        </div>
    }

    render() {
        if (this.state.filteredPersons == null) {
            return <></>
        } else {
            return (
                <div className="result-page">
                    {this.renderWelcomeMessage()}
                    {this.renderResult()}
                </div>
            )
        }
    }
}

export default ResultPage