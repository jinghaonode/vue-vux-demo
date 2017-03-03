<template>
  <div>

           <div class="pad20">
               <group>
                   <cell title="Vuxsdddddddd" value="Cool" is-link></cell>
               </group>
               <p>页面1</p>
               <p>页面2</p>

           </div>
      

  </div>
</template>

<script>
/*   import Array2stringFilter from 'vux'   ;
   console.log(Array2stringFilter)*/
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
        setTimeout(()=>{ this.$loading.hide()},5000)
      },

    },
    computed: {
      minHeight: () => {
        return (document.body.clientHeight >= 400 && document.body.clientHeight <= 736) ? document.body.clientHeight : window.screen.height
      },
    },
  }
</script>
