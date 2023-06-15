
const baseUrl = 'http://localhost:3000'
const options = {
    headers: {
        'Content-type': 'application/json',
    },
}
const errorHtml = '<h1>Error in getting data</h1>'


const api = {

    // Fetch product by id
    getProduct: async (id) => {
        let product;
        try {
            const response = await fetch(`${baseUrl}/api/product/${id}`, options)
            console.log(response);
            if (response.status !== 200 || !response.ok) return errorHtml

            product = response.json()
        } catch (err) {
            throw new Error(err.message)
        }
        return product
    },
    // get all products
    getProducts: async () => {
        let products;
        try {
            const response = await fetch(`${baseUrl}/api/products`, options)

            if (!response.ok || response.status !== 200) {
                return errorHtml
            }
            products = await response.json()
        } catch (err) {
            console.error(err);
        }
        return products
    },
}
export default api
