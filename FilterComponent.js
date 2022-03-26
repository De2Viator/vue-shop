Vue.component('vue-filter', {
    data(){
        return {
            userSearch: ''
        }
    },
    methods:{
        filter() {
            this.$parent.userSearch = this.userSearch;
            this.$parent.filter()
        }
    },
    template: `
    <form action="#" class="search-form">
      <input type="text" class="search-field" v-model="userSearch" @input='filter()'>
      <button class="btn-search" type="submit">
          <i class="fas fa-search"></i>
      </button>
  </form>`,
  });