<template>
   <Modal v-model="show" :title="title" width="700" :footer-hide="true">
      <div>
         <div :class="[(key > 0 ? 'mt-4' : '')]" v-for="(message, key) in messages" :key="key">
            <div>
               <b v-html="message.title"></b>
               <span v-if="message.delivered == 0" class="ml-1">
                  <Tooltip content="Не доставлено" placement="top" :transfer="true">
                     <i class="fad fa-ban red-color p-2"></i>
                  </Tooltip>
               </span>
            </div>
            <div v-html="message.text"></div>
            <div>
               <span class="sended gray-color">
                  <span
                     v-if="message.send_date"
                  >{{ message.send_date | date_d }} {{ message.send_date | date_t }}</span>
                  <span v-else>Даты нет</span>
               </span>

               <span class="ml-2 opened gray-color" v-if="message.channel != 'sms'">
                  <span class="mr-2">/</span>
                  <span
                     v-if="message.open_date"
                  >{{ message.open_date | date_d }} {{ message.open_date | date_t }}</span>
                  <span v-else>Не открыто</span>
               </span>

               <span class="ml-2 manager" v-if="message.manager_fio">
                  <span class="mr-2">—</span>
                  {{ message.manager_fio }}
               </span>
            </div>
         </div>
      </div>
   </Modal>
</template>


<script>
export default {
   props: ["value"],
   data() {
      return {
         show: false,
         title: "История сообщений",
         client: [],
         messages: []

         // grid: {
         //    label: {
         //       sm: 8,
         //       xs: 12
         //    },
         //    value: {
         //       sm: 16,
         //       xs: 12
         //    },
         //    gutter: 30
         // }
      };
   },

   watch: {
      value: function(id) {
         if (id !== null) this.load(id);
      },
      show: function(val) {
         if (!val) this.$emit("input", null);
      }
   },

   methods: {
      async load(id) {
         let response = await this.$axios.$get("/clients/info/" + id, {
            progress: false
         });
         this.client = response.data;
         this.title = "История сообщений. " + this.client.fio;

         let messages = await this.$axios.$get(
            "/clients/messages_history/" + id,
            {
               progress: false
            }
         );
         this.messages = messages.data;

         this.show = true;
      }
   }
};
</script>


<style lang="scss" scoped>
.sended,
.opened,
.manager {
   display: inline-block;
}

.manager {
   @include font-medium();
}
</style>
