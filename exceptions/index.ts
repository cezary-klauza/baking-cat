export class FetchProductsError extends Error {
    constructor(message = 'Cannot fetch products from database.'){
        super(message);
        this.name = 'FetchProductsError';
    }
}