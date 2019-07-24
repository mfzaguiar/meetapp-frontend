import React, { useRef, useEffect, useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import pt from 'date-fns/locale/pt';
import { useField } from '@rocketseat/unform';

// import { DTPicker, Container } from './styles.js';
import './styles.css';
import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);
  const [selected, setSelected] = useState(defaultValue);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
    // eslint-disable-next-line
  }, [ref.current, fieldName]);

  return (
    <>
      <ReactDatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        minDate={new Date()}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="dd/MM/yyyy - HH:mm"
        ref={ref}
        autoComplete="off"
        locale={pt}
        placeholderText={placeholder}
      />
      {error && <span>{error}</span>}
    </>
  );
}
