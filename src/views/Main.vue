<template>
  <div>
    <a-modal
      :visible="visible"
      title="Abandoned Items"
      @ok="handleOk"
      @cancel="handleCancel"
    >
      <p>
        You have abandoned items. You need to set up Conversational Cart
        Recovery. Would you like to do so now?
      </p>
    </a-modal>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showModal: true,
    };
  },
  computed: {
    visible() {
      return this.getHasAbandonedItems() && this.showModal;
    },
  },
  methods: {
    ...mapGetters("main", ["getHasAbandonedItems"]),

    handleOk(e) {
      console.log(e);
      this.$router.replace({ name: "message_form" });
    },
    handleCancel(e) {
      //do nothing
      console.log(e);
    },
  },
};
</script>
