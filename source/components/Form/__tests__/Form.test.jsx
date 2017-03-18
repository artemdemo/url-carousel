import React from 'react';
import renderer from 'react-test-renderer';
import toJSON from 'enzyme-to-json';
import { mount } from 'enzyme';
import Form from '../Form';

describe('<Form>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <Form>
                <input />
            </Form>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('with className', () => {
        const tree = renderer.create(
            <Form className='form-class'>
                <input />
            </Form>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('handle submit', () => {
        let submitted = false;
        const wrapper = mount(
            <Form onSubmit={() => submitted = true}>
                <input />
            </Form>
        );
        expect(toJSON(wrapper)).toMatchSnapshot();
        wrapper.simulate('submit');
        expect(submitted).toEqual(true);
    });
});
