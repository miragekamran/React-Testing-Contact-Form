import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import ContactForm from './ContactForm';

test('It is rendering', () => {
    render(<ContactForm />)
})