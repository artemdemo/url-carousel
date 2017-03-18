import React from 'react';
import renderer from 'react-test-renderer';
import ContentBlock from '../ContentBlock';

describe('<ContentBlock>', () => {
    it('Render empty', () => {
        const tree = renderer.create(
            <ContentBlock />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('Render with content', () => {
        const tree = renderer.create(
            <ContentBlock>
                Some text
            </ContentBlock>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
