<template>
  <div class="t-switch" @click="handleClick" :class="{'is-checked':value}">
    <input type="checkbox" :checked="value" class="t-switch_input" :name="name" />
    <span class="t-switch__core" ref="core">
      <span class="t-switch__button"></span>
    </span>
  </div>
</template>
<script>
export default {
  name: 'tSwitch',
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  methods: {
    async handleClick() {
      await this.$emit('input', !this.value)
      this.changeSwitchColor()
    },
    changeSwitchColor() {
      // 修改开关的颜色
      // await this.$nextTick()
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.core.style.borderColor = color
        this.$refs.core.style.backgroundColor = color
      }
    }
  },
  mounted() {
    this.changeSwitchColor()
  },
  watch: {
    value() {
      this.changeSwitchColor()
    }
  }
}
</script>
<style lang="scss" scoped>
.t-switch {
  display: inline-block;
  align-items: center;
  position: relative;
  font-size: 14px;
  line-height: 20px;
  vertical-align: middle;
  .t-switch__core {
    margin: 0;
    display: inline-block;
    position: relative;
    width: 40px;
    height: 20px;
    border: 1px solid #dcdfe6;
    outline: none;
    border-radius: 10px;
    box-sizing: border-box;
    background: #dcdfe6;
    cursor: pointer;
    transition: border-color 0.3s, background-color 0.3s;
    vertical-align: middle;
    .t-switch__button {
      position: absolute;
      top: 1px;
      left: 1px;
      border-radius: 100%;
      transition: all 0.3s;
      width: 16px;
      height: 16px;
      background-color: #fff;
    }
  }
}
// 选中样式
.is-checked {
  .t-switch__core {
    border-color: #409eff;
    background-color: #409eff;
    .t-switch__button {
      transform: translateX(20px);
    }
  }
}
// 隐藏input标签
.t-switch_input {
  position: absolute;
  width: 0;
  height: 0;
  opacity: 0;
  margin: 0;
}
</style>
