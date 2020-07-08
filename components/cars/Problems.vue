<template>
   <Modal v-model="show" :title="title" width="700" :footer-hide="true">
      <Form :model="form" ref="form" :rules="rules" v-if="$can('cars/problems_create')">
         <Row>
            <Col>
               <FormItem prop="text" label="Опишите подробно проблему">
                  <Input v-model="form.text" type="textarea" :autosize="true" />
               </FormItem>
            </Col>
         </Row>

         <Row>
            <Col align="right">
               <Button type="primary" @click="save('form')">Добавить</Button>
            </Col>
         </Row>
      </Form>

      <div class="problems mt-4" v-if="$can('cars/problems_getlist')">
         <Problem
            v-for="(problem, key) in problems"
            :key="key"
            :problem="problem"
            @problemsRefresh="load"
         />
      </div>
   </Modal>
</template>


<script>
import Problem from "@/components/cars/problems/Problem";

export default {
   props: ["value"],
   components: {
      Problem
   },
   data() {
      return {
         title: "Технические проблемы",
         show: false,

         problems: [],

         form: {
            text: ""
         },

         rules: {
            text: [
               {
                  required: true,
                  message: "Введите описание проблемы",
                  trigger: "change"
               }
            ]
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
         let problems = await this.$axios.$get(
            "/cars/problems_getlist/" + this.value,
            {
               progress: false
            }
         );
         this.problems = problems.data;

         this.show = true;
      },
      async save(name) {
         this.$refs[name].validate(async valid => {
            if (valid) {
               try {
                  await this.$axios.$post(
                     "/cars/problem_create/" + this.value,
                     this.form,
                     {
                        progress: false
                     }
                  );
                  this.$Notice.success({
                     title: "Добавление проблемы",
                     desc: "Успешно"
                  });
                  this.$emit("carsRefresh");
                  this.show = false;
               } catch (error) {
                  this.$Notice.error({
                     title: "Добавление проблемы",
                     desc: error.response.data.message
                  });
               }
            }
         });
      },
      toggle() {
         console.log();
      }
   }
};
</script>


<style lang="scss" scoped>
.problems {
}
</style>
