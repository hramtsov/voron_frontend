<template>
   <Form :model="roleForm" ref="roleForm" :rules="roleRules" label-position="top">
      <Divider orientation="left">Общие сведения</Divider>

      <Row :gutter="40">
         <Col :sm="12">
            <FormItem prop="title" label="Название">
               <Input v-model="roleForm.title" placeholder="Название роли"></Input>
            </FormItem>
         </Col>
         <Col :sm="12">
            <FormItem label="Действует в рамках">
               <Select v-model="roleForm.partner">
                  <Option value="all">Всех партнеров</Option>
                  <Option value="group">Группы партнеров</Option>
                  <Option value="partner">Одного партнера</Option>
               </Select>
            </FormItem>
         </Col>
      </Row>

      <Divider orientation="left">Политики доступа</Divider>

      <Checkbox
         :indeterminate="indeterminate"
         :value="checkAll"
         @click.prevent.native="handleCheckAll"
      >Выбрать все</Checkbox>

      <FormItem>
         <CheckboxGroup v-model="roleForm.permissions" @on-change="checkAllGroupChange">
            <div v-for="(group, prefix) in permissions" class="mt-2 mb-4">
               <h4 class="mb-3">{{ group.title }}</h4>
               <Row :gutter="40">
                  <template v-for="(permission, key) in group.permissions">
                     <Col :xs="24" :md="12">
                        <Checkbox :label="prefix + `/` + key">
                           <span class="label-checkbox">
                              {{ permission.title }}
                              <span
                                 v-if="permission.description"
                                 class="permission-description"
                              >{{ permission.description }}</span>
                              <span class="permission-slug">{{ prefix + `/` + key }}</span>
                           </span>
                        </Checkbox>
                     </Col>
                  </template>
               </Row>
            </div>
         </CheckboxGroup>
      </FormItem>

      <!--        <Affix :offset-bottom="50">-->
      <FormItem>
         <!--                <div class="footer-form">-->
         <Button type="primary" @click="save('roleForm')">Сохранить</Button>
         <Button to="/roles">Назад</Button>
         <!--                </div>-->
      </FormItem>
      <!--        </Affix>-->
   </Form>
</template>

<script>
export default {
   name: "RoleForm",
   props: ["roleForm", "permissions"],
   data() {
      return {
         permissions_list: [],

         indeterminate: true,
         checkAll: false,

         roleRules: {
            title: [
               {
                  required: true,
                  message: "Введите название роли",
                  trigger: "change"
               }
            ]
         }
      };
   },

   // async mounted() {
   //     try {
   //         var response = await this.$axios.$get('/permissions/getlist')
   //         this.permissions = response.data
   //
   //         if (this.id !== null) {
   //             var response = await this.$axios.$get('/roles/get/' + this.id)
   //             this.roleForm = response.data
   //         }
   //
   //     } catch (error) {
   //         this.$Notice.error({
   //             title: 'Ошибка',
   //             desc: error.response.data.message
   //         });
   //     }
   // },

   created() {
      for (var prefix in this.permissions) {
         for (var key in this.permissions[prefix]["permissions"]) {
            this.permissions_list.push(prefix + "/" + key);
         }
      }
   },

   methods: {
      handleCheckAll() {
         console.log(this.permissions);
         if (this.indeterminate) {
            this.checkAll = false;
         } else {
            this.checkAll = !this.checkAll;
         }
         this.indeterminate = false;

         if (this.checkAll) {
            this.roleForm.permissions = this.permissions_list;
         } else {
            this.roleForm.permissions = [];
         }
      },

      checkAllGroupChange(data) {
         if (data.length === this.permissions_list.length) {
            this.indeterminate = false;
            this.checkAll = true;
         } else if (data.length > 0) {
            this.indeterminate = true;
            this.checkAll = false;
         } else {
            this.indeterminate = false;
            this.checkAll = false;
         }
      },

      async save(name) {
         this.$refs[name].validate(async valid => {
            if (valid) {
               if (typeof this.$route.params.id === "undefined") {
                  try {
                     await this.$axios.$post("/roles/create/", this.roleForm);
                     this.$Notice.success({
                        title: "Создание роли",
                        desc: "Успешно"
                     });

                     this.$router.push("/roles");
                  } catch (error) {
                     this.$Notice.error({
                        title: "Создание роли",
                        desc: error.response.data.message
                     });
                  }
               } else {
                  try {
                     let c = await this.$axios.$post(
                        "/roles/edit/" + this.$route.params.id,
                        this.roleForm
                     );
                     this.$Notice.success({
                        title: "Изменение роли",
                        desc: "Успешно"
                     });

                     this.$router.push("/roles");
                  } catch (error) {
                     this.$Notice.error({
                        title: "Изменение роли",
                        desc: error.response.data.message
                     });
                  }
               }
            }
         });
      }
   }
};
</script>

<style scoped>
</style>