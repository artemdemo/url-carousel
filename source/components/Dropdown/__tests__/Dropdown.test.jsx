import React from 'react';
import renderer from 'react-test-renderer';
import Dropdown from '../Dropdown';

const simpleList = ['one', 'two', 'three'];

describe('<Dropdown />', () => {
    it('Render with empty list', () => {
        const tree = renderer.create(
            <Dropdown list={[]} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Array of strings', () => {
        const tree = renderer.create(
            <Dropdown list={simpleList} />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Error', () => {
        const tree = renderer.create(
            <Dropdown list={simpleList} error />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Error and text', () => {
        const tree = renderer.create(
            <Dropdown list={simpleList} error='Error text' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Disabled', () => {
        const tree = renderer.create(
            <Dropdown list={simpleList} disabled />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('With array of strings and placeholder', () => {
        const tree = renderer.create(
            <Dropdown list={simpleList} placeholder='Placeholder string' />,
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
