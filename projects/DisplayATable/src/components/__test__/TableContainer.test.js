import React from 'react';
import { shallow, configure } from 'enzyme';
import TableContainer from '../TableContainer';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

configure({adapter: new Adapter()});

const mockStore = configureStore();
const store = mockStore();

describe('TableContainer', () => {
    it('renders TableContainer', () => {
        const component = shallow(
            <Provider store={store}>
                <TableContainer />
            </Provider>
        );
        expect(component).toMatchSnapshot();
    });
})
