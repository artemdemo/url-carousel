import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Options from '../Options';

describe('<Options>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <MuiThemeProvider>
                <Options />
            </MuiThemeProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
