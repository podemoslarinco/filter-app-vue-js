<template>
  <div class="container-fluid">
		<div class="search-wrapper">
			<!-- the search bar form -->
      <form v-on:submit="getfilteredData">
        <div class="form-row">
          <div class="input-group col-12">
			<input type="text" class="form-control" placeholder="Buscar planes . .  . " v-model="search" v-on:keyup="getfilteredData">
			<div class="input-group-prepend">
				<button type="submit" class="btn btn-primary"><i class="fa fa-search"></i></button>
			</div>
          </div>
        </div>
			<div class="form-row mt-3">
			<!-- check boxes -->
				<div id="checkboxes" class="col-12">
					<div v-for="(tag,index) in tags" :key="index" class="form-check form-check-inline mr-1">
						<div class="btn-group-toggle" data-toggle="buttons">
							<label class="btn btn-outline-info mt-2" :class="{'focus active' : tag.checked}">
								<input type="checkbox" autocomplete="off" v-model="tag.checked" @change="getfilteredData"> {{ tag.value }}
							</label>
						</div>
					</div>
				</div>
			</div>
      </form>
		</div>
		<div class="row">
			<item-plan-card v-for="(item, index) in filteredData" :key="index" :item="item"></item-plan-card>
		</div>
  </div>
</template>

<script>
import ItemPlanCard from './ItemPlanCard';
import data from '../data/data';

export default {
	name: 'PlanPage',
	components: {
		'item-plan-card': ItemPlanCard
	},
	computed: {
		selectedFilters: function() {
			let filters = [];
			let checkedFiters = this.tags.filter(obj => obj.checked);
			checkedFiters.forEach(element => {
				filters.push(element.value);
			});
			return filters;
		}
	},
	data() {
		return {
			filteredData: [],
			search: '',
			tags: [
				{
					checked: false,
					value: 'Turismo'
				},
				{
					checked: false,
					value: 'Agricultura, Ganadería y Alimentación'
				},
				{
					checked: false,
					value: 'Autónom@s, Pymes y Economía social'
				},
				{
					checked: false,
					value: 'Empleo'
				},
				{
					checked: false,
					value: 'Banca, Sistema financiero'
				},
				{
					checked: false,
					value: 'Animalismo'
				},
				{
					checked: false,
					value: 'Ciencia, innovación y desarrollo'
				},
				{
					checked: false,
					value: 'Cuidados'
				},
				{
					checked: false,
					value: 'Cultura'
				},
				{
					checked: false,
					value: 'Democracia y Participación'
				},
				{
					checked: false,
					value: 'Deporte'
				},
				{
					checked: false,
					value: 'Identidad de género'
				},
				{
					checked: false,
					value: 'Feminismos'
				},
				{
					checked: false,
					value: 'Jóvenes'
				},
				{
					checked: false,
					value: 'Mayores'
				},
				{
					checked: false,
					value: 'Niñ@s y adolescentes'
				},
				{
					checked: false,
					value: 'Servicios públicos'
				}
			]
		};
	},
	methods: {
		getfilteredData: function() {
			this.filteredData = data.plans;
			let filteredDataByfilters = [];
			let filteredDataBySearch = [];
			// first check if filters where selected
			if (this.selectedFilters.length > 0) {
				filteredDataByfilters= this.filteredData.filter(obj => this.selectedFilters.every(val => obj.tags.indexOf(val) >= 0));
				this.filteredData = filteredDataByfilters;
			} 
			// then filter according to keyword, for now this only affects the name attribute of each data
			if (this.search !== '') {
				filteredDataBySearch = this.filteredData.filter(obj => obj.name.toLowerCase().indexOf(this.search.toLowerCase().normalize()) >= 0 || obj.description.toLowerCase().indexOf(this.search.toLowerCase().normalize()) >= 0);
				this.filteredData = filteredDataBySearch;
			}
		}
	},
	mounted() {
		this.getfilteredData();
	}
};
</script>
