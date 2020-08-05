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
      <a-row type="flex" :gutter="[12, 1]">
        <a-col :offset="18" :span="3">
          <a-upload
            name="file"
            :multiple="true"
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            :headers="headers"
            @change="handleChange"
          >
            <a-button> <a-icon type="upload" /> Upload Image </a-button>
          </a-upload>
        </a-col>

        <a-col :span="3">
          <a-button type="primary" class="create">
            Create Message
          </a-button>
        </a-col>
      </a-row>
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
  width: 100% !important;
}
</style>
