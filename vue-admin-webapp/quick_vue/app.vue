<template>
    <div class="app">
        <h1>这是我的单页内容</h1>
        <p>{{ msg }}</p>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg : '这是一条消息'
            }
        },
        mounted() {
            console.log('hhhh')
        },
    }
</script>