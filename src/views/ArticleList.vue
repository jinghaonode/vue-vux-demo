<template>

  <div>
      <group>
          <cell title="模板渲染" value="value"></cell>
          <cell title="指令" is-link></cell>
          <cell title="组件,表单控件" value="value"></cell>
          <cell title="状态管理" value="value"></cell>
          <cell title="webpack构建工具" value="value"></cell>
          <cell title="你需要一款强大的IDE环境 webstrom " value="value"></cell>
      </group>
      <div class="pad20">{{time | formatDate('yyyy-MM-dd hh:mm')}}</div>
  </div>
</template>

<script>
    export default {
    data () {
      return {
        page: 1,
        limit: 20,
        time:100
      }
    },
    mounted(){
      this.onRefresh()
    },

    methods: {
      onRefresh () {
        this.time=new Date();
        this.$loading.show()
        setTimeout(()=>{ this.$loading.hide()},2000)
      },

    },
    computed: {
      minHeight: () => {
        return (document.body.clientHeight >= 400 && document.body.clientHeight <= 736) ? document.body.clientHeight : window.screen.height
      },
    },
  }
</script>
