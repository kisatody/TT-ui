<template>
  <div class="t-radio-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tRadioGroup',
  provide() {
    return {
      RadioGroup: this
    }
  },
  props: {
    value: null
  }
}
</script>

<style>
</style>
