<template>
   <Modal v-model="show" :title="title" width="500">
      <Form :model="form" ref="form" :rules="rules">
         <Row>
            <Col>
               <FormItem label="Канал отправки" prop="channel">
                  <Select v-model="form.channel" placeholder="Выберите канал">
                     <Option value="sms">SMS-сообщение</Option>
                     <Option value="push">PUSH-уведомление</Option>
                  </Select>
               </FormItem>
            </Col>
            <Col v-if="form.channel == 'push'">
               <FormItem prop="title" label="Заголовок">
                  <Input v-model="form.title" />
               </FormItem>
            </Col>
            <Col>
               <FormItem prop="text" label="Текст сообщения">
                  <Input v-model="form.text" type="textarea" :autosize="true" />
               </FormItem>
            </Col>
         </Row>
      </Form>

      <div slot="footer">
         <Button type="primary" @click="save('form')">Отправить</Button>
      </div>
   </Modal>
</template>


<script>
export default {
   props: ["value", "type", "mode"],
   data() {
      return {
         show: false,
         title: "Отправка сообщения клиенту",
         form: {
            title: null,
            text: null,
            channel: "push"
         },

         rules: {
            channel: [
               {
                  required: true,
                  message: "Выберите канал отправки сообщения",
                  trigger: "blur"
               }
            ],
            title: [
               {
                  required: true,
                  message: "Введите заголовок сообщения",
                  trigger: "blur"
               }
            ],
            text: [
               {
                  required: true,
                  message: "Введите текст сообщения",
                  trigger: "blur"
               }
            ]
         }
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
      load(id) {
         // async
         // let response = await this.$axios.$get("/clients/info/" + id, {
         //    progress: false
         // });
         this.show = true;
      },
      async save(name) {
         this.$refs[name].validate(async valid => {
            if (valid) {
               try {
                  let response = await this.$axios.$post(
                     "/clients/messages_send/",
                     {
                        client: this.value,
                        mode: this.mode,
                        channel: this.form.channel,
                        title: this.form.title,
                        text: this.form.text,
                        type: this.type
                     },
                     {
                        progress: false
                     }
                  );
                  this.$Notice.success({
                     title: "Отправка сообщения",
                     desc: "Успешно"
                  });
                  this.form.title = "";
                  this.form.text = "";

                  // console.log(response.data);

                  this.show = false;
               } catch (error) {
                  this.$Notice.error({
                     title: "Отправка сообщения",
                     desc: error.response.data.message
                  });
               }
            }
         });
      }
   }
};
</script>


<style lang="scss" scoped>
</style>
