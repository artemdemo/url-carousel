import React from 'react';
import renderer from 'react-test-renderer';
import Button from '../Button';

describe('<Button>', () => {
    it('Simple render with text', () => {
        const tree = renderer.create(
            <Button>
                button name
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With className', () => {
        const tree = renderer.create(
            <Button className='additional-class'>
                button name
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With className and "primary"', () => {
        const tree = renderer.create(
            <Button className='additional-class' primary>
                button name
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
