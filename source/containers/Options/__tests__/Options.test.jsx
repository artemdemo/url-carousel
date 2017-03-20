import React from 'react';
import renderer from 'react-test-renderer';
import Options from '../Options';

describe('<Options>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <Options />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
