const main = Vue.createApp({
	data() {
		return {
			visible: false,
			textTask: '',
			selectedOption: null,
			smallTasks: [
				{
					textTask: ''
				}
			],
			middleTasks: [
				{
					textTask: ''
				}
			],
			bigTasks: [
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
			this.textTask = ''
			this.selectedOption = null
		},
		addTask() {
			if (this.textTask != '') {
				if (this.selectedOption == 1) {
					this.smallTasks.unshift({
						textTask: this.textTask
					})
					this.closeModal()
				} else if (this.selectedOption == 2) {
					this.middleTasks.unshift({
						textTask: this.textTask
					})
					this.closeModal()
				} else if (this.selectedOption == 3) {
					this.bigTasks.unshift({
						textTask: this.textTask
					})
					this.closeModal()
				}
			}
		},
		deletesmall(index) {
			this.smallTasks.splice(index, 1);
		},
		deletemiddle(index) {
			this.middleTasks.splice(index, 1);
		},
		deletebig(index) {
			this.bigTasks.splice(index, 1);
		},
		switchTheme() {
			$(document).ready(function() {
			    $('#toggle-theme').change(function() {
			        var link = document.getElementById("theme-link");
			        let lightTheme = "css/light.css";
			        let darkTheme = "css/dark.css";
			        var currTheme = link.getAttribute("href");
			        var theme = "";
			        if(this.checked==false) {
			            currTheme = darkTheme;
			            theme = "dark";
			        } else {
			            currTheme = lightTheme;
			            theme = "light";
			        }

			        link.setAttribute("href", currTheme);
			        Save(theme);
			    });
			});
		}
	}
})

main.component('small-task', {
	props: ['task'],
	methods: {
		deletesmall() {
			this.$emit('deletesmall');
		}
	},
	template: `
	<div class="small-card bottom__small-card" v-if="task.textTask != ''">
		<div class="text-task small-card__text-task">{{task.textTask}}</div>
		<button class="delete-card small-card__delete-card" @click="deletesmall()">Удалить</button>
	</div>
	`
})

main.component('middle-task', {
	props: ['task'],
	methods: {
		deletemiddle() {
			this.$emit('deletemiddle');
		}
	},
	template: `
	<div class="middle-card bottom__middle-card" v-if="task.textTask != ''">
		<div class="text-task middle-card__text-task">{{task.textTask}}</div>
		<button class="delete-card middle-card__delete-card" @click="deletemiddle()">Удалить</button>
	</div>		
	`
})

main.component('big-task', {
	props: ['task'],
	methods: {
		deletebig() {
			this.$emit('deletebig');
		}
	},
	template: `
	<div class="big-card bottom__big-card" v-if="task.textTask != ''">
		<div class="text-task big-card__text-task">{{task.textTask}}</div>
		<button class="delete-card big-card__delete-card" @click="deletebig()">Удалить</button>
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