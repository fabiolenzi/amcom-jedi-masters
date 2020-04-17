import React from 'react'
import './IconButton.scss'

class IconButton extends React.Component {

    render() {
        return (
            <button
                className="icon-button"
                onClick={() => this.props.handleClick(this.props.value)}>
                <img src={this.props.icon} alt={this.props.label} />
                <p>{this.props.label}</p>
            </button>
        );
    }
}

export default IconButton