//新建一个Vue实例
new Vue({
    //根DOM元素的CSS选择器
    el : '#notebook',

    //一些数据
    data : {
        content : 'This is a note',
    },

    //计算属性
    computed: {
        //笔记预览
        notePreview () {
            // Markdown 渲染为Html
            return marked(this.content)
        }
    },
})