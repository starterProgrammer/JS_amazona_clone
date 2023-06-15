import Error404screen from './screens/Error404screen';
import Homescreen from './screens/Homescreen';
import Productscreen from './screens/Productscreen';
import { parsRequestUrl } from './tools/utils';

const routes = {
    '/': Homescreen,
    '/product/:id': Productscreen,
}

const router = async () => {
    const request = parsRequestUrl()
    const parsUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.action ? `/${request.action}` : '')

    // routes[parsUrl] ==> if this item exist
    // ? routes[parsUrl] ==> return thats url

    const showScreen = routes[parsUrl] ? routes[parsUrl] : Error404screen

    const main = document.getElementById('main-container')
    main.innerHTML = await showScreen.render()
}

window.addEventListener('load', router())
// to reload page when change router
window.addEventListener('hashchange', () => { router() })
