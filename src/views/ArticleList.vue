<template>

  <div>
      <group>
          <cell title="one" value="rightsssss"></cell>
          <cell title="two" is-link></cell>
          <cell title="three" value="value"></cell>
      </group>
           <div class="pad20">
           </div>
  </div>
</template>

<script>
    export default {
    data () {
      return {
        page: 1,
        limit: 20,
        articleList: [],
        status: {
          pullupStatus: 'default',
          pulldownStatus: 'default'
        }
      }
    },
    mounted(){
      this.onRefresh()
    },

    methods: {
      onRefresh () {
        this.$loading.show()
        setTimeout(()=>{ this.$loading.hide()},3000)
      },

    },
    computed: {
      minHeight: () => {
        return (document.body.clientHeight >= 400 && document.body.clientHeight <= 736) ? document.body.clientHeight : window.screen.height
      },
    },
  }
</script>
