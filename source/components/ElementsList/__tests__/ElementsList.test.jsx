import React from 'react';
import renderer from 'react-test-renderer';
import Input from '../../Input/Input';
import Dropdown from '../../Dropdown/Dropdown';
import ElementsList from '../ElementsList';

describe('<ElementsList>', () => {
    it('Render <ElementsList>', () => {
        const tree = renderer.create(
            <ElementsList>
                <Input />
                <span>Some dropdown:</span>
                <Dropdown list={['First item in dropdown', 'Second item in dropdown']} />
            </ElementsList>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Render <ElementsList inline>', () => {
        const tree = renderer.create(
            <ElementsList inline>
                <div>First</div>
                <div>First</div>
            </ElementsList>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Render <ElementsList> with null', () => {
        const tree = renderer.create(
            <ElementsList inline>
                {null}
                <div>First</div>
            </ElementsList>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
