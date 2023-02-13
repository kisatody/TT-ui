<template>
  <div class="t-form" :class="[`t-form--labt-${labelPosition}`,{'t-form--inline':inline}]">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tForm',
  props: {
    model: {
      type: Object,
      required: true
    },
    labelWidth: {
      type: String,
      default: '80px'
    },
    inline: {
      type: Boolean,
      default: false
    },
    labelPosition: {
      type: String,
      default: 'right'
    }
  },
  provide() {
    return {
      Form: this
    }
  }
}
</script>

<style>
</style>
