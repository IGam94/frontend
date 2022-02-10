<template>
    <div>
        <p>123</p>
    </div> 
</template>

<script>
export default {
    data(){
        return {
            token:''
        }
    },
    created(){
        this.token = this.$getSession()
    },
    methods: {

    }
}
</script>

<style>

</style>