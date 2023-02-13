<template>
  <div class="t-input" :class="{'t-input__suffix':showSuffix}">
    <input
      :type="showPassword?(passwordVisabled?'text':'password'):type"
      class="t-input__inner"
      :placeholder="placeholder"
      :name="name"
      :disabled="disabled"
      :class="{'is-disabled':disabled,'is-password':(type==='password'),'clearable':clearable}"
      :value="value"
      @input="handleInput"
    />
    <span class="t-input_suffix" v-if="showSuffix">
      <i class="on-input_icon t-icon-cancel" v-if="clearable && value" @click="clearInput"></i>
      <i
        class="on-input_icon"
        :class="passwordVisabled?'t-icon-eye_protection':'t-icon-visible'"
        v-if="showPassword && type=='password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'tInput',
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      // 是否显示密码
      passwordVisabled: false
    }
  },
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clearInput() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisabled = !this.passwordVisabled
    }
  }
}
</script>
<style lang="scss" scoped>
.t-input {
  position: relative;
  font-size: 14px;
  display: inline-block;
  width: 100%;
  .t-input__inner {
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #606266;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    width: 100%;
    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }
  &.t-input__suffix .t-input__inner {
    padding-right: 30px;
  }
  & .is-password.clearable.t-input__inner {
    padding-right: 43px;
  }
  // 后面加suffix的意思是后面如果有后缀的话，触发该样式
  &.t-input__suffix .t-input_suffix {
    position: absolute;
    right: 10px;
    height: 100%;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all 0.3s;
    z-index: 900;
    .t-input_inner {
      padding-right: 30px;
    }
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color 0.2s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
  }
}
</style>
