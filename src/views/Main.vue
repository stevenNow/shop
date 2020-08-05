<template>
  <div>
    <a-modal :visible="visible" title="Abandoned Items" @ok="handleOk" @cancel="handleCancel">
      <p>You have abandoned items. Would you like to create a message?</p>
    </a-modal>
  </div>
</template>
<script>
import {mapGetters} from "vuex";
export default {
  data() {
    return {
      showModal: true,
    };
  },
  computed: {
    visible(){
      return this.getHasAbandonedItems() && this.showModal;
    }
  },
  methods: {
    ...mapGetters("main", ["getHasAbandonedItems"]),

    handleOk(e) {
      console.log(e);
    },
    handleCancel(e){
      //do nothing
      console.log(e);
    }
  },
};
</script>