<template>
  <div class="t-form-item">
    <label class="t-form-item__label" :style="{'width':Form.labelWidth}">{{label}}</label>
    <div class="t-form-item__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: {
    Form: {
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.t-form-item {
  margin-bottom: 25px;
  .t-form-item__label {
    text-align: right;
    vertical-align: middle;
    float: left;
    font-size: 14px;
    color: #606266;
    line-height: 40px;
    padding: 0 12px 0 0;
    box-sizing: border-box;
  }
  .t-form-item__content {
    line-height: 40px;
    position: relative;
    font-size: 14px;
    overflow: hidden;
  }
}
.t-form {
  &.t-form--labt-left .t-form-item__label {
    text-align: left;
  }
  &.t-form--labt-top .t-form-item__label {
    float: none;
    display: inline-block;
    text-align: left;
    padding: 0 0 10px;
  }
  &.t-form--inline .t-form-item {
    float: none;
    display: inline-block;
  }
}
</style>
