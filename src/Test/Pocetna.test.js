import React from 'react';
import Pocetna from '../components/Pocetna';
import { act, screen, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from 'react-router-dom';


const mockData = {
    customer: {
        name: "emir",
        adress: {
            street: 'testna ulica bb',
            zipCode: '134124',
            country: 'BiH'
        }
    }
}


describe("Posts", () => {
    beforeEach(() => {
        global.fetch = jest.fn(() =>
            Promise.resolve({
                json: () => Promise.resolve(mockData)
            }))
    });


    test("fetch and render", async () => {
        await act((async) => render(
            <BrowserRouter>
                <Pocetna />
            </BrowserRouter>
        ));
        expect(screen.getByText("Emir")).toBeInTheDocument()
    })
})