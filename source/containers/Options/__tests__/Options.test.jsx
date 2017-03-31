import React from 'react';
import renderer from 'react-test-renderer';
import { Options } from '../Options';
import MockProvider from '../../../../__mocks__/MockProvider';

describe('<Options>', () => {
    it('Simple render: no list, empty input', () => {
        const tree = renderer.create(
            <MockProvider>
                <Options
                    urlList={{
                        urls: [],
                    }}
                    loadData={() => {}} />
            </MockProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
