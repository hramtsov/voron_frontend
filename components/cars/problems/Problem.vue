<template>
   <Row class="mt-3" type="flex" justify="space-between" align="middle">
      <Checkbox
         v-model="checkbox"
         @on-change="toggle"
         v-if="($can('cars/problems_done') && !problem.deleted) || ($can('cars/problems_revoke') && problem.deleted)"
      >
         <span class="label-checkbox">
            <del v-if="checkbox">{{ problem.reason }}</del>
            <span v-else>{{ problem.reason }}</span>
         </span>
         <div class="problem-footer">
            <span
               class="created"
            >{{ problem.add_date | date_d }} {{ problem.add_date | date_t }} {{ problem.manager_add_lastname }} {{ problem.manager_add_firstname }}</span>
            <span
               class="deleted"
               v-if="problem.deleted"
            >{{ problem.del_date | date_d }} {{ problem.del_date | date_t }} {{ problem.manager_del_lastname }} {{ problem.manager_del_firstname }}</span>
         </div>
      </Checkbox>

      <div v-else>
         <del v-if="problem.deleted">{{ problem.reason }}</del>
         <span v-else>{{ problem.reason }}</span>
         <div class="problem-footer">
            <span
               class="created"
            >{{ problem.add_date | date_d }} {{ problem.add_date | date_t }} {{ problem.manager_add_lastname }} {{ problem.manager_add_firstname }}</span>
            <span
               class="deleted"
               v-if="problem.deleted"
            >{{ problem.del_date | date_d }} {{ problem.del_date | date_t }} {{ problem.manager_del_lastname }} {{ problem.manager_del_firstname }}</span>
         </div>
      </div>

      <div v-if="$can('cars/problems_delete')">
         <Tooltip content="Удалить" placement="top" :transfer="true">
            <a class="p-2" @click="modal.delete.show = true">
               <i class="far fa-trash-alt gray-color"></i>
            </a>
         </Tooltip>
      </div>

      <Modal v-model="modal.delete.show" title="Вы действительно хотите удалить проблему?">
         Это действие безвозвратно удалит из списка проблем:
         <b>«{{ problem.reason }}»</b>
         <div slot="footer">
            <Button @click="modal.delete.show = false">Нет</Button>
            <Button type="error" @click="remove">Да</Button>
         </div>
      </Modal>
   </Row>
</template>

<script>
import Problem from "@/components/cars/problems/Problem";

export default {
   props: ["problem"],
   components: {
      Problem
   },
   data() {
      return {
         checkbox: this.problem.deleted,
         modal: {
            delete: {
               show: false
            }
         }
      };
   },

   watch: {
      problem: {
         handler: function(val) {
            this.checkbox = val.deleted;
         },
         deep: true
      }
   },

   methods: {
      async toggle() {
         try {
            await this.$axios.$post(
               "/cars/problem_toggle/" + this.problem.id,
               {
                  checked: this.checkbox
               },
               {
                  progress: false
               }
            );
            this.$emit("problemsRefresh");
         } catch (error) {
            this.$Notice.error({
               title: "Изменение состояния проблемы",
               desc: error.response.data.message
            });
         }
      },

      async remove() {
         try {
            await this.$axios.$post("/cars/problem_delete/" + this.problem.id, {
               progress: false
            });
            this.$Notice.success({
               title: "Удаление проблемы",
               desc: "Успешно"
            });
            this.$emit("problemsRefresh");
         } catch (error) {
            this.$Notice.error({
               title: "Удаление проблемы",
               desc: error.response.data.message
            });
         }

         this.modal.delete.show = false;
      }
   }
};
</script>


<style lang="scss" scoped>
.created {
   color: $gray-500;
   display: inline-block;
}
.deleted {
   color: $gray-500;
   display: inline-block;
   margin-left: 20px;
   position: relative;
}
.deleted:before {
   content: "/";
   position: absolute;
   left: -12px;
}

.problem-footer {
   padding-left: 31px;
}

.label-checkbox {
   @include font-medium();
}
</style>