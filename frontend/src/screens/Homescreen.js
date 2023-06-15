/* eslint-disable prefer-template */
import Rating from '../components/Rating';
import api from '../tools/api';

const Homescreen = {
    render: async () => {
        // Load Data
        const products = await api.getProducts()

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
                                <span>${Rating.render({ value: product.rating, text: product.numberReviews + 'reviews' })}</span>
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
