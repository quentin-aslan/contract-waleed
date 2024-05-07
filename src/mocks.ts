export type MockType = {
    price: number,
    date: string,
    type: string,
    isForSale: boolean,
    image: string,
    rooms: number,
    bathrooms: number,
    parking: number,
    address: string,
    agency?: string
}

export const MOCKS: MockType[] = [
    {
        date: new Date().toISOString(),
        price: 1000000,
        type: "Condo Apt",
        isForSale: true,
        image: "https://cache15.housesigma.com/file/pix-exclusive/HSE03059/8d514_617cc.jpg?d0ec3717",
        rooms: 3,
        bathrooms: 2,
        parking: 2,
        address: "1234 Main St, Toronto, ON",
        agency: "Royal LePage"
    },
    {
        date: new Date().toISOString(),
        price: 2000000,
        type: "House",
        isForSale: true,
        image: "https://cache14.housesigma.com/file/pix-exclusive/HSE03184/b01c6_89448.jpg?303753bd",
        rooms: 4,
        bathrooms: 3,
        parking: 3,
        address: "5678 Park Ave, Montreal, QC",
        agency: "Century 21"
    },
    {
        date: new Date().toISOString(),
        price: 3000000,
        type: "House",
        isForSale: true,
        image: "https://cache15.housesigma.com/file/pix-exclusive/HSE03248/8c708_19506.jpg?c7f3b956",
        rooms: 5,
        bathrooms: 4,
        parking: 4,
        address: "91011 King St, Vancouver, BC",
        agency: "Remax"
    },
    {
        date: new Date().toISOString(),
        price: 1000000,
        type: "Condo Apt",
        isForSale: true,
        image: "https://cache15.housesigma.com/file/pix-exclusive/HSE03059/8d514_617cc.jpg?d0ec3717",
        rooms: 3,
        bathrooms: 2,
        parking: 2,
        address: "1213 Queen St, Halifax, NS",
        agency: "Royal LePage"
    },
    {
        date: new Date().toISOString(),
        price: 590000,
        type: "House",
        isForSale: true,
        image: "https://cache14.housesigma.com/file/pix-exclusive/HSE03184/b01c6_89448.jpg?303753bd",
        rooms: 4,
        bathrooms: 3,
        parking: 3,
        address: "1415 Wellington St, Ottawa, ON",
        agency: "Century 21"
    },
    {
        date: new Date().toISOString(),
        price: 3000000,
        type: "House",
        isForSale: true,
        image: "https://cache15.housesigma.com/file/pix-exclusive/HSE03248/8c708_19506.jpg?c7f3b956",
        rooms: 5,
        bathrooms: 4,
        parking: 4,
        address: "1617 Dundas St, London, ON",
        agency: "Aslan & Co"

    }
]
