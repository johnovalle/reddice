import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import FlashMessage from './FlashMessage';
import {deleteFlashMessage} from '../../actions/flashMessages';

class FlashMessageList extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick(id) {
    this.props.deleteFlashMessage(id);
  }


  render() {
    const messages = this.props.messages.map(message => 
      <FlashMessage key={message.id} {...message} handleClick={this.onClick.bind(null, message.id)}></FlashMessage>
    );
    return (
      
      <div>
        {messages}
      </div>
      
    );
  }
};

FlashMessageList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    messages: state.flashMessages
  };
};

export default connect(mapStateToProps, {deleteFlashMessage})(FlashMessageList);