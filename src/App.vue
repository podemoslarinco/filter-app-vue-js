<template>
	<div id="app">
		<router-view/>
  </div>
</template>

<script>
export default {
	name: 'App',
	watch: {
		'$route' () {
		  $('.navbar-collapse').collapse('hide');
		}
	  }
};
</script>

<style>
.search-wrapper {
	margin: 20px;
}

.badge {
	margin-left: 0.5em;
}

.badge-sport {
	background-color: #872534;
	color: white
}

.badge-care {
	background-color: #aa0da5;
	color: white;
}

.badge-travel {
	background-color: #135104;
	color: white;
}

.badge-democracy {
	background-color: #7900a0;
	color: white;
}

.badge-inn {
	background-color: cadetblue;
	color: white
}

.badge-animals {
	background-color: cornflowerblue;
	color: white
}

.badge-gen {
	background-color: #872534;
	color: white;
}

.badge-fem {
	background-color: #bc00f9
}

.badge-jov {
	background-color: #dbdb0d
}

.badge-nin {
	background-color: bisque;
}

.badge-may {
	background-color: green;
	color: white
}

.badge-public {
	background-color: brown;
	color: white
}

</style>

