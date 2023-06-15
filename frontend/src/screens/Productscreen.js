/* eslint-disable prefer-template */
import Rating from '../components/Rating'
import api from '../tools/api'
import { parsRequestUrl } from '../tools/utils'

const Productscreen = {
    render: async () => {
        const _id = parsRequestUrl().id
        const product = await api.getProduct(_id)
        return `
            <div class="product-wrapper">
                <div class="p-left">
                    <a class="back-btn" href="/#"><i class="fa fa-arrow-left"></i></a>
                    <img src='${product.image}' />
                </div>
                <div class="p-right">
                   <div class="details">
                        <span>${product.name}</span>
                        <span>${product.brand}</span>
                        <span>${Rating.render({ value: product.rating, text: product.numberReviews + 'reviews' })}</span>
                        <span><i class="bold-text">price: </i> ${product.price + '$'}</span>
                        <span><i class="bold-text">Description: </i> ${product.description}</span>
                   </div> 

                   <div class="add-card">
                        <span><i class="bold-text">price: </i> ${product.price + '$'}</span>
                        <span><i class="bold-text">Status: </i> ${product.countInStock >= 1 ? 'In Stock' : 'Out Of Stock'}</span>
                        <button type="button">Add To Cart</button>
                   </div>
                </div>
            </div>
        `
    },
}


export default Productscreen
