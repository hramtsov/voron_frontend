<template>
   <Modal v-model="show" :title="title" width="700" :footer-hide="true">
      <!-- {{ form }} -->

      <Form :label-width="150">
         <FormItem label="Радиус доставки">
            <Slider
               v-model="form.radius"
               :step="1"
               :min="slider.radius.min"
               :max="slider.radius.max"
               :marks="marks_radius"
               :show-stops="true"
               show-tip="always"
               @on-change="save"
            ></Slider>
         </FormItem>
         <FormItem label="Время доставки">
            <Slider
               v-model="form.time"
               :step="10"
               :min="slider.time.min"
               :max="slider.time.max"
               :marks="marks_time"
               :show-stops="true"
               show-tip="always"
               @on-change="save"
            ></Slider>
         </FormItem>
      </Form>

      <!-- <template slot="footer">
         <Button type="primary" @click="save('form')">Сохранить</Button>
      </template>-->
   </Modal>
</template>


<script>
export default {
   props: ["value"],
   data() {
      return {
         title: "Изменение данных доставки",
         show: false,

         slider: {
            radius: {
               min: 5,
               max: 15
            },
            time: {
               min: 30,
               max: 180
            }
         },

         form: {
            radius: null,
            time: null
         },

         marks_radius: {
            5: "5 км",
            15: "15 км"
         },
         marks_time: {
            30: "30 мин",
            180: "180 мин"
         }
      };
   },

   watch: {
      value: function(id) {
         if (id !== null) {
            this.load();
         }
      },
      show: function(val) {
         if (!val) {
            this.$emit("carsRefresh");
            this.$emit("input", null);
         }
      }
   },

   methods: {
      async load() {
         let delivery = await this.$axios.$get(
            "/cars/delivery_get/" + this.value,
            {
               progress: false
            }
         );
         this.form.radius = delivery.data.devDeliveryRange;
         this.form.time = delivery.data.devDeliveryTime;

         this.show = true;
      },

      async save() {
         try {
            await this.$axios.$post(
               "/cars/delivery_change/" + this.value,
               this.form,
               {
                  progress: true
               }
            );
            this.$Notice.success({
               title: "Изменение данных доставки",
               desc: "Успешно"
            });
            // this.$emit("carsRefresh");
            // this.show = false;
         } catch (error) {
            this.$Notice.error({
               title: "Изменение данных доставки",
               desc: error.response.data.message
            });
         }
      }
   }
};
</script>


<style lang="scss" scoped>
</style>
