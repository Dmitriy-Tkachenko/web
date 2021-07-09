const main = Vue.createApp({
	data() {
		return {
			visible: false,
			textTask: '',
			tasks: [
				{
					textTask: ''
				}
			]
		}
	},
	methods: {
		openModal() {
			this.visible = true
		},
		closeModal() {
			this.visible = false
		},
		addTask() {
			if (this.textTask != '') {
				this.tasks.push({
					textTask: this.textTask
				})
			}
		}
	},
})

main.component('small-task', {
	props: ['task'],
	template: `
	<div class="small-card bottom__small-card" v-if="task.textTask != ''">
		<div class="text-task small-card__text-task">{{task.textTask}}</div>
		<button class="delete-card small-card__delete-card">Удалить</button>
	</div>
	`
})

/*main.component('modal', {
	data() {
		return {
			visible: false,
			textTask: '',
			tasks: [
				{
					textTask: ''
				}
			]
		}
	},
	methods: {
		openModal() {
			this.visible = true
		},
		closeModal() {
			this.visible = false
		},
		addTask() {
			if (this.textTask != '') {
				this.tasks.push({
					textTask: this.textTask
				})
			}
		}
	},
	template: `
		<button class="createTask" @click="openModal()">Создать задачу</button>
		<div class="modal" v-if="visible != false">
			<div class="window modal__window">
				<textarea class="desc window__desc" v-model="textTask"></textarea>
				<select size="3" class="importance window__importance">
					<option disabled>Выберите важность</option>
					<option selected value="1">1</option>
					<option value="2">2</option>
					<option value="3">3</option>
				</select>
				<div class="bottom-window window__bottom-window">
					<button class="add-task bottom-window__add-task" @click="addTask()">Добавить</button>
					<button class="close-modal" @click="closeModal()">Закрыть</button>
				</div>
			</div>
		</div>
	`
})*/ 


main.mount('#main') 