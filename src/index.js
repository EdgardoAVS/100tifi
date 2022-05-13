import "regenerator-runtime/runtime"; 
import { router } from './routes/';

window.addEventListener('load', router);
window.addEventListener('hashchange', router);