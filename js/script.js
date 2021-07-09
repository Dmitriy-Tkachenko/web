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

$(document).ready(function() {
    $('#toggle-theme').change(function() {
        var link = document.getElementById("theme-link");
        let lightTheme = "css/light.css";
        let darkTheme = "css/dark.css";
        var currTheme = link.getAttribute("href");
        var theme = "";
        if(this.checked==true) {
            currTheme = darkTheme;
            theme = "dark";
        } else {
            currTheme = lightTheme;
            theme = "light";
        }

        link.setAttribute("href", currTheme);
    });
});


main.mount('#main') 