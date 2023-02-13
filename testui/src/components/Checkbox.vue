<template>
  <label class="t-checkbox" :class="{'is-checked':isChecked}">
    <span class="t-checkbox__input">
      <span class="t-checkbox__inner"></span>
      <input
        type="checkbox"
        class="t-checkbox__original"
        :value="label"
        :name="name"
        v-model="model"
      />
    </span>
    <span class="t-checkbox__label">
      <slot>{{label}}</slot>
    </span>
  </label>
</template>

<script>
export default {
  name: 'tCheckbox',
  inject: {
    CheckboxGroup: {
      default: ''
    }
  },
  props: {
    label: {
      typr: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    isGroup() {
      return !!this.CheckboxGroup
    },
    isChecked() {
      return this.isGroup ? this.model.includes(this.label) : this.value
    },
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit('input', value)
          : this.$emit('input', value)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.t-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .t-checkbox__input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .t-checkbox__inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s, cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &::after {
        box-sizing: content-box;
        content: '';
        border: 1px solid #fff;
        border-top-color: rgb(255, 255, 255);
        border-top-style: solid;
        border-top-width: 1px;
        border-left-color: rgb(255, 255, 255);
        border-left-style: solid;
        border-left-width: 1px;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) scaleY(0);
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .t-checkbox__original {
      opacity: 0;
      outline: none;
      position: absolute;
      left: 10px;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .t-checkbox__label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.t-checkbox.is-checked {
  .t-checkbox__input {
    .t-checkbox__inner {
      background-color: #409eff;
      border-color: #409eff;
      &::after {
        transform: rotate(45deg) scaleY(1);
      }
    }
  }
  .t-checkbox__label {
    color: #409eff;
  }
}
</style>
