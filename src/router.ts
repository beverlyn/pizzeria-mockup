import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue'; 

// export const router = createRouter({
// 	history: createWebHashHistory(),
// 	routes: [
// 		{
// 			path: '/',
// 			name: 'home',
// 			component: App,
// 		},
// 		{
// 			path: '/about',
// 			name: 'about',
// 			component: App,
// 		},
// 		{
// 			path: '/menu',
// 			name: 'menu',
// 			component: App,
// 		},
// 		{
// 			path: '/info',
// 			name: 'info',
// 			component: App,
// 		}
// 	],
// 	scrollBehavior(to, from, savedPosition) {
// 		if (to.hash) {
// 			return {
// 				selector: to.hash,
// 				behavior: 'smooth',
// 			};
// 		}
// 		return { x: 0, y: 0 };
// 	},
// });
