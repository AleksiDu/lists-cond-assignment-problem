const app = Vue.createApp({
  data() {
    return {
      tasks: [],
      enteredValue: "",
      btn: true,
      btnTag: "Hide",
    };
  },
  methods: {
    addTasks() {
      this.tasks.push(this.enteredValue);
    },
    hideShowBtn() {
      this.btn = !this.btn;
      if (this.btnTag === "Hide") {
        this.btnTag = "Show List";
      } else {
        this.btnTag = "Hide";
      }
    },
  },
});

app.mount("#assignment");
