import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import toJSON from 'enzyme-to-json';
import Input from '../Input';

describe('<Input>', () => {
    it('Render empty', () => {
        const tree = renderer.create(
            <Input />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('With placeholder', () => {
        const tree = renderer.create(
            <Input
                placeholder='Some placeholder' />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Disabled', () => {
        const tree = renderer.create(
            <Input
                placeholder='Some placeholder'
                disabled />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Set value', () => {
        let changed = false;
        const newValue = 'new value';
        const wrapper = mount(
            <Input
                value=''
                onChange={value => changed = value}
                placeholder='Some placeholder' />
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
        const input = wrapper.find('input');
        input.simulate('change', {target: {value: 'new value'}});
        expect(changed).toEqual(newValue);
    });

    describe('Error', () => {
        it('boolean', () => {
            const tree = renderer.create(
                <Input
                    placeholder='Some placeholder'
                    error />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });

        it('text', () => {
            const tree = renderer.create(
                <Input
                    placeholder='Some placeholder'
                    error='Some error' />
            ).toJSON();
            expect(tree).toMatchSnapshot();
        });
    });
});
