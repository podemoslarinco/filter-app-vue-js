import Vue from 'vue';
import Router from 'vue-router';
import SearchPage from '@/components/SearchPage';
import CandidatoPage from '@/components/CandidatoPage';
import EquipoPage from '@/components/EquipoPage';
import PlanPage from '@/components/PlanPage';

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
		{
			path: '/planes',
			name: 'PlanPage',
			component: PlanPage
		},
		{
			path: '/equipo',
			name: 'EquipoPage',
			component: EquipoPage
		},
		
	]
});
