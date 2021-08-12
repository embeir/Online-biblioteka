import React from 'react';
import Navbar from '../components/Navbar';
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";


describe('<Navbar />', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = <Navbar/>
    });

    it('should render two <NavigationItem /> elements if not authenticated', () => {
        expect(wrapper.find(Item)).toHaveLength(2);
    });

    it('should render three <Item /> elements if authenticated', () => {
        expect(wrapper.contains(<Item link="/login">Login</Item>)).toEqual(true);
     });
});