import React from 'react';
import renderer from 'react-test-renderer';
import { Options } from '../Options';

describe('<Options>', () => {
    it('Simple render: no list, empty input', () => {
        const tree = renderer.create(
            <Options
                urlList={{
                    urls: [],
                }} />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
