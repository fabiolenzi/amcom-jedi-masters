import React from 'react'
import IconButton from '../IconButton'
import './SidePage.scss'
import JediIcon from '../../icons/jedi.svg'
import SithIcon from '../../icons/sith.svg'

class SidePage extends React.Component {

    handleSideButtonClick = (side) => {
        this.props.setSide(side)
    }

    render() {
        return (
            <div className="side-page">
                <h2>Escolha seu lado da força</h2>
                <div className="buttons-group">
                    <IconButton
                        value="jedi"
                        icon={JediIcon}
                        label="Jedi"
                        handleClick={this.handleSideButtonClick} />
                    <IconButton
                        value="sith"
                        icon={SithIcon}
                        label="Sith"
                        handleClick={this.handleSideButtonClick} />
                </div>
            </div>
        )
    }
}

export default SidePage