import Rating from '../components/Rating';

const Homescreen = {
    render: async () => {
        // Load Data
        let products;

        try {
            const response = await fetch('http://localhost:3000/api/products', {
                headers: {
                    'Content-type': 'application/json',
                },
            })

            if (!response.ok || response.status !== 200) {
                return '<h1>Error in getting data</h1>'
            }
            products = await response.json()
        } catch (err) {
            console.error(err);
        }


        return `
            <ul class="products">
                    ${products.map((product) => `
                    <li>
                        <div class="product">
                            <a href="/#/product/${product._id}">
                                <img src="${product.image}">
                            </a>
                            <a href="/#/product/1" class="details">
                                <span>${product.name}</span>
                                <span>${product.brand}</span>
                                <span>${Rating.render({ value: product.rating, text: `${product.numberReviews} reviews` })}</span>
                                <span>${product.price} $</span>
                            </a>
                        </div>
                        </li>
                    `).join('\n')}
            </ul>
        `
    },
}

export default Homescreen
