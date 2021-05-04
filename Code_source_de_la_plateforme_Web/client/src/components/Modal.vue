<template>
	<div class="modal fade" :id="s_id" tabindex="-1" role="dialog" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
				<div class="modal-header">
					<h5 class="modal-title">{{s_title}}</h5>
				</div>
				<div class="modal-body">
					{{s_content}}
				</div>
				<div class="modal-footer">
					<button class="custom-btn cancel-btn" data-dismiss="modal">Annuler</button>
					<button class="custom-btn" data-dismiss="modal" v-on:click="f_action">{{s_actionText}}</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "Modal",
		props: {
			s_id: String,
			f_action: Function,
			s_title: String,
			s_content: String,
			s_actionText: String
		}
	};
</script>

<style scoped>
	.custom-btn {
		height: 38px;
		padding: 0 15px;
	}

	.cancel-btn {
		color: white;
		background-color: #818285;
	}

	.cancel-btn:hover {
		background-color: #97989b;
	}
</style>