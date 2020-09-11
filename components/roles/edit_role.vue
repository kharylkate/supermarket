<template>
 
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";

export default {
  name: "modal-editRole",
  data() {
    return {
      role_code: "",
      role_name: "",
      
    }
  },
  components: {
    
  },
  computed: {
    ...mapGetters({
      selectedRole: 'getSelectedRole'
    })
  },
  methods: {
    update() {
      console.log('clicked_update', role_code, ' + ', this.role_name)

      // this.$store("updateRole", {
      //   role_code: this.role_code,
      //   role_name: this.role_name,
      // })
    }
  },
  created() {
      const role = this.$store.dispatch("getSelectedRole");
  }
};
</script>
