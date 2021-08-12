import React from 'react';
import Purchase from '../components/Pocetna';
import { fireEvent, render } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import axios from 'axios';

test("List behaves correctly", () => {
    const {getByTestid} = render(<Pocetna />);
    const listEl = getByTestid("listEl");

    fireEvent.change(listEl, {
        target: {
            value:"Sarajevo"
        }
    })

    expect(listEl.value).toBe("Sarajevo")
})

jest.mock('axios');
test("should fetch users", () => {
    const users = [{name: "Emir"}];
    const resp = {data: users}
    axios.post.mockImplementation(() => Promise.resolve(resp));

    return Purchase.all().then(data => expect(data).toEqual(users))
})

/* test("change value on input", () => {
    const {getByTestid} = render(<Pocetna />);
    const 
}) */