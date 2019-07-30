<template>
  <div class="key">
    <!-- <key1 v-for="(item,i) in array" :text="item" @delete="remove(i)"></key1>
    <key1 v-for="(item,i) in array" :text="item" :key="i" @delete="remove(i)"></key1> -->
    <key1 v-for="(item,i) in array" :text="item" :key="item" @delete="remove(i)"></key1>
  </div>
</template>

<script>
import key1 from './template/key1'
export default {
  name: 'Key',
  data () {
    return {
      array: [1, 2, 3]
    };
  },
  computed: {

  },
  methods: {
    remove(i) {
      this.array.splice(i, 1);
    }
  },
  components: {
    key1
  }
}
</script>
