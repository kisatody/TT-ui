<template>
  <div class="t-checkbox-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tCheckboxGroup',
  props: {
    value: {
      type: Array
    }
  },
  provide() {
    return {
      CheckboxGroup: this
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
