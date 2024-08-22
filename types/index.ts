export type Product = {
    _id: string,
    name: string,
    description: string,
    price: number,
    image: string,
    flavores: Flavore[],
    category: Category
}

export type Category = 'cookies' | 'bread' | 'cakes';

export type Flavore = 'chocolate' | 'creamy' | 'fruits' | 'vanilia';

export type ApiResponse<T> = {
    data: [
        Product
    ],
    meta: {}
}