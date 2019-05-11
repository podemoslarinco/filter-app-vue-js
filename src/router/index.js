import Vue from 'vue';
import Router from 'vue-router';
import SearchPage from '@/components/SearchPage';
import CandidatoPage from '@/components/CandidatoPage';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'SearchPage',
			component: SearchPage
		},
		{
			path: '/candidato',
			name: 'CandidatoPage',
			component: CandidatoPage
		},
	]
});
