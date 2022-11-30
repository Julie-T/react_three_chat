import React from 'react'
import PropTypes from 'prop-types'
import '../css/main.css'


const MessageHistory = (props) => {
  
    return (
        <div className='container chat '>
        <ul className='chat-history'>
        { props.list.map( message => {
            return (message.type && message.type === 'response' && 
            <li key={message.id}>
                <div className="message-data">
                    <span className="message-data-name">
                        <i className="fa fa-circle online"></i> {message.from.name}</span>
                    <span className="message-data-time">{message.time}</span>
                </div>
                <div className="message my-message">{message.text}</div>
            </li>)

            || (message.type && message.type === 'message' &&
            <li className="clearfix" key={message.id}>
                <div className="message-data align-right">
                    <span className="message-data-time">{message.time}</span> &nbsp; &nbsp;
                    <span className="message-data-name">{message.from.name}</span>
                    <i className="fa fa-circle me"></i>
                </div>
                <div className="message other-message float-right">{message.text}</div>
            </li>)

            || (message.type && message.type === 'message' &&
            <li key={message.id}>
                <div className="message-data">
                    <span className="message-data-name">
                        <i className="fa fa-circle online"></i>{message.from.name}</span>
                    <span className="message-data-time">{message.time}</span>
                </div>
            </li>)
            })
        }
        </ul>
    </div>
    )
}

MessageHistory.defaultProps = {
    list: []
}


MessageHistory.propTypes = {
    list: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string, from: PropTypes.shape({ name: PropTypes.string}), type: PropTypes.string, time: PropTypes.string, text: PropTypes.string }))
}

export default MessageHistory
