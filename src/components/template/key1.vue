<template>
  <div>
    {{text}}:
    <input v-model="x">
    <button @click="onDelete">delete</button>
  </div>
</template>

<script>
export default {
  name: 'key1',
  data () {
    return {

    }
  },
  props: ["text"],
  data() {
    return {
      x: "hi"
    };
  },
  methods: {
    onDelete() {
      this.$emit("delete");
    }
  }
}
</script>
