import { describe, it, expect } from "vitest";
import { Electronics } from "../src/components/shopping/shop-page";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

describe('Testing shopping page fetch using  component', () => {
    it('fetches a category"s and renders it correctly', async () => {
        const fakeFetched = [
            {
                id:1,
                title: '1',
                price:'1',
                rating: {rate: 5, count: 100},
                category:'electronics',
                description:'1',
                image:'1'
            },
            {
                id:2,
                title: '2',
                price:'2',
                rating: {rate: 5, count: 100},
                category:'electronics',
                description:'2',
                image:'2'
            },
        ]
        render(<BrowserRouter> <Electronics fetchedItems={fakeFetched} loading={false}></Electronics> </BrowserRouter>)
        const electronicsPage = screen.getByRole('region')
        expect(electronicsPage).toBeInTheDocument();
    })
})