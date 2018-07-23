import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';
import SkiDayCount from './components/SkiDayCount';

Window.React=React

render(
    <div>
        {hello}
        {goodbye}
        <SkiDayCount />
    </div>,

	document.getElementById('react-container')
)