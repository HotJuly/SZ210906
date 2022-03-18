export default {
    data() {
        return {
            loading: true
        }
    },
    mounted() {
        // console.log(this.$options.name)
        setTimeout(() => {
            this.loading = false;
        }, 3000)
    }
}