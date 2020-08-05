<template>
  <a-form :form="form" class="message-form" @submit="handleSubmit">
    <a-row>
      <a-col :span="4">
        <a-form-item label="Send Date">
          <a-date-picker class="time" />
        </a-form-item>
      </a-col>
      <a-col :span="4">
        <a-form-item label="Send Time">
          <a-time-picker use12-hours />
        </a-form-item>
      </a-col>
      <a-col :span="16">
        <a-form-item label="Message Content">
          <a-input
            type="textarea"
            :rows="10"
            value="Hi {First Name} –
               This is %%First Name%% from %%Company Name%%.
               I noticed you didn’t complete your purchase of {Product Name}.
               If you are still interested, I’d like to offer you 5% off your order, please use {dynamic code}
               at checkout here: {dynamic link}."
          >
          </a-input>
        </a-form-item>
      </a-col>

      <a-col :offset="22" :span="2">
        <a-button type="primary" class="create" size="large">
          Create
        </a-button>
      </a-col>
    </a-row>
  </a-form>
</template>

<script>
export default {
  name: "MessageForm",

  methods: {
    handleSubmit(e) {
      e.preventDefault();
    },
  },
};
</script>
<style>
.message-form {
  margin-left: 10% !important;
  margin-right: 10% !important;
}
.create {
  float: right;
}
</style>
