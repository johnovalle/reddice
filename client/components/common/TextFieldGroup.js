import React from 'react';
import classnames from 'classnames';
import Proptypes from 'prop-types';

const TextFieldGroup = ({label, name, type, value, onChange, error, checkUserExists}) => {
  return (
    <div className='form-group'>
          <label className='control-label'>{label}</label>
          <input
            value={value}
            onChange={onChange}
            onBlur={checkUserExists}
            type={type}
            name={name}
            className={classnames('form-control', {'is-invalid': error})}
          />
          {error && <div className='invalid-feedback'>{error}</div>}
        </div>
  );
}

TextFieldGroup.proptypes = {
  label: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
  type: Proptypes.string.isRequired,
  value: Proptypes.string.isRequired,
  onChange: Proptypes.func.isRequired,
  error: Proptypes.string,
  checkUserExists: Proptypes.func
};

TextFieldGroup.defaultProps = {
  type: 'text',
}

export default TextFieldGroup;