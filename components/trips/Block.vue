<template>
   <Modal v-model="show" :title="title" width="700">
      <template v-if="action == 'on'">
         <p class="mb-3">Напишите причину почему данную поездку нужно заблокировать</p>

         <Form :model="form" ref="form" :rules="rules">
            <Row>
               <Col>
                  <FormItem prop="text" label="Причина">
                     <Input v-model="form.text" type="textarea" :autosize="true" />
                  </FormItem>
               </Col>
            </Row>
         </Form>

         <div slot="footer">
            <Button type="primary" @click="save('form')">Добавить</Button>
         </div>
      </template>
      <template v-if="action == 'off'">
         <Table stripe :columns="blockeds_columns" :data="blockeds">
            <template slot-scope="{ row }" slot="reason">{{ row.reason }}</template>
            <template slot-scope="{ row }" slot="fullname">{{ row.lastName }} {{ row.firstName }}</template>
            <template
               slot-scope="{ row }"
               slot="date"
            >{{ row.lockdate | date_d }} {{ row.lockdate | date_t }}</template>
         </Table>
         <div slot="footer">
            <Button type="primary" @click="save('form')">Разблокировать</Button>
         </div>
      </template>
   </Modal>
</template>


<script>
export default {
   props: ["value", "section", "action"],
   data() {
      return {
         show: false,
         title: "",

         form: {
            text: "",
         },

         validate: false,

         rules: {
            text: [
               {
                  required: true,
                  message: "Введите описание",
                  trigger: "blur",
               },
            ],
         },

         blockeds: [],

         blockeds_columns: [
            {
               title: "Причина",
               slot: "reason",
               key: "reason",
            },
            {
               title: "Менеджер",
               slot: "fullname",
               width: 200,
            },
            {
               title: "Дата",
               slot: "date",
               width: 200,
               key: "lockdate",
               sortable: true,
            },
         ],
      };
   },

   watch: {
      value: function (id) {
         if (this.action == "off") {
            this.title = "Информация о блокировке";
            if (id !== null) this.load(id);
         } else {
            this.title = "Блокировка поездки";
            if (id !== null) {
               this.show = true;
            }
         }
      },
      show: function (val) {
         console.log(val);
         if (!val) this.$emit("input", null);
      },
   },

   methods: {
      async load(id) {
         let response = await this.$axios.$post(
            "/trips/get_block/" + id,
            {
               section: this.section,
            },
            {
               progress: false,
            }
         );
         this.blockeds = response.data;
         this.show = true;
      },
      async save(name) {
         this.validate = false;

         if (this.action == "on") {
            this.$refs[name].validate(async (valid) => {
               if (valid) {
                  this.validate = true;
               }
            });
         }
         if (this.action == "off") {
            this.validate = true;
         }

         console.log(this.action);
         console.log(this.validate);

         if (this.validate) {
            try {
               let response = await this.$axios.$post(
                  "/trips/block/" + this.value,
                  {
                     section: this.section,
                     text: this.form.text,
                     action: this.action,
                  },
                  {
                     progress: false,
                  }
               );

               let title = "Блокировка поездки";
               if (this.action == "off") {
                  title = "Снятие блокировки поездки";
               }

               this.$Notice.success({
                  title: title,
                  desc: "Успешно",
               });
               this.form.text = "";
               this.$emit("carsRefresh");
               this.show = false;
            } catch (error) {
               this.$Notice.error({
                  title: title,
                  desc: error.response.data.message,
               });
            }
         }
      },
   },
};
</script>


<style lang="scss" scoped>
</style>
