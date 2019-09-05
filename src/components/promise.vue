<template>
  <div class="hello">
111
  </div>
</template>

<script>
export default {
  data () {
    return {
    };
  },
  computed: {

  },
  created() {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ test: 1 })
            resolve({ test: 2 })
            // reject({ test: 3 })
        }, 1000)
    }).then((data) => {
        console.log('result1', data)
    },(data1)=>{
        console.log('result2',data1)
    }).then((data) => {
        console.log('result3', data)
    })
  },
  methods: {

  },
  components: {

  }
}
</script>
