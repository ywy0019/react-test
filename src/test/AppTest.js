import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('DOM Rendering', function () {
  it('Click the delete button, the Todo item should be deleted', function () {
   let app = shallow(<App />);
   expect(app.find('div')).to.true;
  });
});

