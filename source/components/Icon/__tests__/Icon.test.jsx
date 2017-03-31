import React from 'react';
import renderer from 'react-test-renderer';
import Icon from '../Icon';

describe('<Icon>', () => {
    it('Simple render', () => {
        const tree = renderer.create(
            <Icon name='ok' />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With className', () => {
        const tree = renderer.create(
            <Icon name='remove' className='additional-class' />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('flat', () => {
        const tree = renderer.create(
            <Icon name='remove' flat />
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
