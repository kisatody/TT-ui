<template>
  <button
    class="t-button"
    :class="[`t-button-${type}`,{
      'is-plain':plain,
      'is-round':round,
      'is-circle':circle,
      'is-disabled':disabled
      }]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="icon"></i>
    <!-- 如果没有传入任何内容 -->
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>
<script>
export default {
  name: 'tButton',
  // 封装一个通用的组件，会对props做一个约束，props进行效验
  props: {
    type: {
      // 数据类型：字符串
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick(e) {
      this.$emit('click', e)
    }
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.t-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #ffffff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  font-weight: 500;
  //禁止元素的文字被选中
  -moz-user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;
  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}
.t-button-primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;
  &:hover,
  &:focus {
    background: #66b1ff;
    background-color: #66b1ff;
    color: #fff;
  }
}
.t-button-success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;
  &:hover,
  &:focus {
    background: #85ce61;
    background-color: #85ce61;
    color: #fff;
  }
}
.t-button-info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;
  &:hover,
  &:focus {
    background: #a6a9ad;
    background-color: #a6a9ad;
    color: #fff;
  }
}
.t-button-warning {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;
  &:hover,
  &:focus {
    background: #ebb563;
    background-color: #ebb563;
    color: #fff;
  }
}
.t-button-danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;
  &:hover,
  &:focus {
    background: #f78989;
    background-color: #f78989;
    color: #fff;
  }
}
// 朴素按钮样式
.t-button.is-plain {
  &:hover,
  &:focus {
    background: #fff;
    border-color: #489eff;
    color: #409eff;
  }
}
.t-button-primary.is-plain {
  color: #409eff;
  background: #ecf5ff;
  &:hover,
  &:focus {
    background: #409eff;
    border-color: #409eff;
    color: #fff;
  }
}
.t-button-success.is-plain {
  color: #67c23a;
  background: #c2e7b0;
  &:hover,
  &:focus {
    background: #67c23a;
    border-color: #67c23a;
    color: #fff;
  }
}
.t-button-info.is-plain {
  color: #909399;
  background: #d3d4d6;
  &:hover,
  &:focus {
    background: #909399;
    border-color: #909399;
    color: #fff;
  }
}
.t-button-warning.is-plain {
  color: #e6a23c;
  background: #f5dab1;
  &:hover,
  &:focus {
    background: #e6a23c;
    border-color: #e6a23c;
    color: #fff;
  }
}
.t-button-danger.is-plain {
  color: #f56c6c;
  background: #fbc4c4;
  &:hover,
  &:focus {
    background: #f56c6c;
    border-color: #f56c6c;
    color: #fff;
  }
}
// round属性
.t-button.is-round {
  border-radius: 20px;
  padding: 12px 23px;
}
// circle属性
.t-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}
// icon配套样式
.t-button [class*='t-icon-'] + span {
  margin-left: 5px;
}
// disabled属性
.t-button.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.t-button-primary.is-disabled {
  color: #fff;
  background-color: #a0cfff;
  border-color: #a0cfff;
}
.t-button-success.is-disabled {
  color: #fff;
  background-color: #b3e19d;
  border-color: #b3e19d;
}
.t-button-info.is-disabled {
  color: #fff;
  background-color: #c8c9cc;
  border-color: #c8c9cc;
}
.t-button-warning.is-disabled {
  color: #fff;
  background-color: #f3d19e;
  border-color: #f3d19e;
}
.t-button-danger.is-disabled {
  color: #fff;
  background-color: #fab6b6;
  border-color: #fab6b6;
}
.t-button.is-plain.is-disabled {
  color: #c0c4cc;
  cursor: not-allowed;
  background-image: none;
  background-color: #fff;
  border-color: #ebeef5;
}
.t-button-primary.is-plain.is-disabled {
  color: #8cc5ff;
  background-color: #ecf5ff;
  border-color: #d9ecff;
}
.t-button-success.is-plain.is-disabled {
  color: #a4da89;
  background-color: #f0f9eb;
  border-color: #e1f3d8;
}
.t-button-info.is-plain.is-disabled {
  color: #bcbec2;
  background-color: #f4f4f5;
  border-color: #e9e9eb;
}
.t-button-warning.is-plain.is-disabled {
  color: #f0c78a;
  background-color: #fdf6ec;
  border-color: #faecd8;
}
.t-button-danger.is-plain.is-disabled {
  color: #f9a7a7;
  background-color: #fef0f0;
  border-color: #fde2e2;
}
</style>
