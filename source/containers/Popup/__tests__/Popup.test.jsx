import React from 'react';
import renderer from 'react-test-renderer';
import Popup from '../Popup';

describe('<Popup>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <Popup />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
