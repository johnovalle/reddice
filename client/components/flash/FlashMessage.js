import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const FlashMessage = (props) => {
  const { id, type, text, handleClick } = props;
  return(
    <div className={classnames('alert', {
      'alert-success': type === 'success',
      'alert-danger': type === 'error',
    })}>
      <button onClick={handleClick} className='close'><span>&times;</span></button>
      {text}
    </div>
  );
};

FlashMessage.propTypes = {
  type: PropTypes.string.isRequired, 
  text: PropTypes.string.isRequired, 
  handleClick: PropTypes.func.isRequired,
}

export default FlashMessage;