import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Popup from '../Popup';

describe('<Popup>', () => {
    it('Render', () => {
        const tree = renderer.create(
            <MuiThemeProvider>
                <Popup />
            </MuiThemeProvider>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
