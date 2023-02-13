<template>
  <div id="app">
    <div class="row">
      <t-button>默认</t-button>
      <t-button type="primary">主要</t-button>
      <t-button type="success">成功</t-button>
      <t-button type="info">信息</t-button>
      <t-button type="warning">警告</t-button>
      <t-button type="danger">危险</t-button>
    </div>
    <div class="row">
      <t-button plain>默认</t-button>
      <t-button plain type="primary">主要</t-button>
      <t-button plain type="success">成功</t-button>
      <t-button plain type="info">信息</t-button>
      <t-button plain type="warning">警告</t-button>
      <t-button plain type="danger">危险</t-button>
    </div>
    <div class="row">
      <t-button round icon="t-icon-delete">默认</t-button>
      <t-button round icon="t-icon-delete" type="primary">主要</t-button>
      <t-button round icon="t-icon-delete" type="success">成功</t-button>
      <t-button round icon="t-icon-delete" type="info">信息</t-button>
      <t-button round icon="t-icon-delete" type="warning">警告</t-button>
      <t-button round icon="t-icon-delete" type="danger">危险</t-button>
    </div>
    <div class="row">
      <t-button circle icon="t-icon-delete"></t-button>
      <t-button circle icon="t-icon-delete" type="primary"></t-button>
      <t-button circle icon="t-icon-delete" type="success"></t-button>
      <t-button circle icon="t-icon-delete" type="info"></t-button>
      <t-button circle icon="t-icon-delete" type="warning"></t-button>
      <t-button circle icon="t-icon-delete" type="danger"></t-button>
    </div>
    <div class="row">
      <t-button disabled>默认</t-button>
      <t-button disabled type="primary">主要</t-button>
      <t-button disabled type="success">成功</t-button>
      <t-button disabled type="info">信息</t-button>
      <t-button disabled type="warning">警告</t-button>
      <t-button disabled type="danger">危险</t-button>
    </div>
    <div class="row">
      <t-button disabled plain>默认</t-button>
      <t-button disabled plain type="primary">主要</t-button>
      <t-button disabled plain type="success">成功</t-button>
      <t-button disabled plain type="info">信息</t-button>
      <t-button disabled plain type="warning">警告</t-button>
      <t-button disabled plain type="danger">危险</t-button>
    </div>
    <div class="row">
      <t-button type="primary" @click="visible=!visible">显示/隐藏</t-button>
    </div>
    <!-- <t-dialog>
      <template v-slot:title>
        <h3>4566</h3>
      </template>
    </t-dialog>-->
    <!-- <t-dialog title="温馨提示"></t-dialog> -->
    <!-- sync修饰符 语法糖 -->
    <t-dialog width="40%" top="100px" :visible.sync="visible">
      <template v-slot:footer>
        <t-button @click="visible=false">取 消</t-button>
        <t-button type="primary" @click="visible=false">确 定</t-button>
      </template>
      123456
    </t-dialog>
    <div class="row">
      <t-input placeholder="请输入用户名" type="text" :value="username"></t-input>
      <t-input placeholder="请输入用户名" type="password" disabled></t-input>
      <t-input placeholder="v-model=username" type="text" name="t" v-model="username"></t-input>
      <t-input type="text" v-model="username" clearable></t-input>
      <t-input type="password" v-model="username" show-password></t-input>
      <t-input type="password" v-model="username" clearable show-password></t-input>
      <!-- v-model 实质上是一个语法糖，等价于 -->
      <!-- <input type="text" v-model="username" />
      <input type="text" :value="username" @input="username=$event.target.value" />-->
    </div>
    <div class="row">
      <t-switch v-model="active1"></t-switch>
      <t-switch v-model="active" active-color="red" inactive-color="green" name="switchname"></t-switch>
    </div>
    <div class="row">
      <t-radio :label="1" v-model="gender">男</t-radio>
      <t-radio :label="0" v-model="gender">女</t-radio>
    </div>
    <div class="row">
      <t-radio-group v-model="gender">
        <t-radio :label="1">男</t-radio>
        <t-radio :label="0">女</t-radio>
      </t-radio-group>
    </div>
    <div class="row">
      <t-checkbox v-model="active">123</t-checkbox>
    </div>
    <div class="row">
      <t-checkbox-group v-model="checkboxList">
        <t-checkbox :label="1"></t-checkbox>
        <t-checkbox :label="3"></t-checkbox>
        <t-checkbox :label="5"></t-checkbox>
      </t-checkbox-group>
    </div>
    <div class="row">
      <t-form :model="model" label-width="70px" label-position="right" inline>
        <t-form-item label="用户名">
          <t-input placeholder="请输入用户名" v-model="model.username"></t-input>
        </t-form-item>
        <t-form-item label="密码" type="password">
          <t-input placeholder="请输入密码" type="password" v-model="model.password"></t-input>
        </t-form-item>
        <t-form-item label="确认密码">
          <t-input placeholder="确认密码" type="password" show-password v-model="model.password1"></t-input>
        </t-form-item>
        <t-form-item label="选中">
          <t-switch v-model="model.active"></t-switch>
        </t-form-item>
      </t-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      visible: false,
      username: 'username',
      active: false,
      active1: true,
      gender: 1,
      checkboxList: [1, 2, 3],
      model: {
        username: '',
        active: false,
        password: '100000',
        password1: '1234561'
      }
    }
  },
  methods: {
    handle(v) {
      console.log(v)
    }
  }
}
</script>

<style lang="scss" scoped>
.row {
  margin-bottom: 20px;
  .t-button {
    margin-right: 20px;
  }
  .t-input {
    width: 180px;
    margin-right: 15px;
  }
  .t-switch {
    margin-right: 15px;
  }
  .t-radio {
    margin-right: 15px;
  }
}
</style>
