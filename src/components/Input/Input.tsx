import React from 'react';

interface Props {
  type: 'text' | 'number' | 'email' | 'password' | 'textarea' | 'date' | 'time'
  id?: string
  title?: string
  value: string | number
  onChange: (_value: string | number, _id: string) => void
  disabled?: boolean
  hasError?: boolean
}

const Input: React.FC<Props> = (props) => {
  const {
    type = 'text',
    id = '',
    title,
    value,
    onChange = () => {},
    disabled = false,
    hasError = false
  } = props;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value, id);
  };

  const typeInputs = {
    text: (
      <input
        id={id}
        type="text"
        onChange={handleChange}
        disabled={disabled}
        value={value}
      />
    ),
    number: (<></>),
    email: (<></>),
    password: (<></>),
    textarea: (<></>),
    date: (<></>),
    time: (<></>)
  };

    return (
        <div className={`input input--${type} ${hasError ? 'input--error' : ''}`}>
          <label>
            {title}
            {typeInputs[type]}
          </label>
        </div>
    );
}

export default Input;
