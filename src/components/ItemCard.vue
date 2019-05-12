<template>
		<div class="card">
			<div :id="`cabecera-medida${item.id}`" class="card-header" @click="onCollapse" data-toggle="collapse" :data-target="`#medida${item.id}`" aria-expanded="true" :aria-controls="`medida${item.id}`">
				<h2 class="mb-0">{{ item.id }}. {{ item.name }}</h2>
				<div>
					<span v-for="(group, index) in item.tags" :key="index" :class="`badge badge-pill badge-${tags[group]}`">{{ group }}</span>
				</div>
				<social-sharing 
				:url="url" 
				:title="`Podemos La Rinconada 2019. Medida ${item.id}. ${ item.name }`" 
				:quote="`Podemos La Rinconada 2019. Medida ${item.id}. ${ item.description }`" 
				twitter-user="podemoslarinco"
				inline-template>
					<div>
						<network network="facebook">
							<i class="fab fa-facebook-f"></i> Facebook
						</network>
						<network network="telegram">
							<i class="fab fa-telegram"></i> Telegram
						</network>
						<network network="linkedin">
							<i class="fab fa-fw fa-linkedin"></i> LinkedIn
						</network>
						<network network="pinterest">
							<i class="fab fa-fw fa-pinterest"></i> Pinterest
						</network>
						<network network="reddit">
							<i class="fab fa-fw fa-reddit"></i> Reddit
						</network>
						<network network="twitter">
							<i class="fab fa-fw fa-twitter"></i> Twitter
						</network>
						<network network="whatsapp">
							<i class="fab fa-fw fa-whatsapp"></i> Whatsapp
						</network>
					</div>
				</social-sharing>
			</div>
			<div :id="`medida${item.id}`" class="collapse" :class="{'show' : item.id == 1}" :aria-labelledby="`cabecera-medida${item.id}`" data-parent="#medidas">
				<div class="card-body">
					{{ item.description }}
				</div>
			</div>
		</div>
</template>

<script>
import Vue from 'vue';
var SocialSharing = require('vue-social-sharing');
Vue.use(SocialSharing);

export default {
	components: {
		SocialSharing
	},
	data() {
		return {
			// list of tags to giving each stack a different color
			tags: {
				'Turismo': 'travel',
				'Agricultura, Ganadería y Alimentación': 'success',
				'Autónom@s, Pymes y Economía social': 'primary',
				'Empleo': 'warning',
				'Banca, Sistema financiero': 'danger',
				'Animalismo': 'animals',
				'Ciencia, innovación y desarrollo': 'inn',
				'Cuidados': 'care',
				'Cultura': 'dark',
				'Democracia y Participación': 'democracy',
				'Deporte': 'sport',
				'Identidad de género': 'gen',
				'Feminismos': 'fem',
				'Jóvenes': 'jov',
				'Mayores': 'may',
				'Niñ@s y adolescentes': 'nin',
				'Servicios públicos': 'public',
			},
			url: window.location.href
		};
	},
	props: {
		// this component expects a prop of type object
		item: {
			type: Object,
			required: true
		}
	},
	methods: {
		onCollapse: function(self, cos) {
			this.item.uncollapsed = !this.item.uncollapsed			
		}
	}
};
</script>

