<template>
   <div class="problem-item">
      <Checkbox
         v-model="checkbox"
         disabled2
         @on-change="toggle"
         v-if="($can('cars/problems_done') && !problem.deleted) || ($can('cars/problems_revoke') && problem.deleted)"
      >
         <del v-if="problem.deleted">{{ problem.reason }}</del>
         <span v-else>{{ problem.reason }}</span>
         <div>
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
         <div>
            <span
               class="created"
            >{{ problem.add_date | date_d }} {{ problem.add_date | date_t }} {{ problem.manager_add_lastname }} {{ problem.manager_add_firstname }}</span>
            <span
               class="deleted"
               v-if="problem.deleted"
            >{{ problem.del_date | date_d }} {{ problem.del_date | date_t }} {{ problem.manager_del_lastname }} {{ problem.manager_del_firstname }}</span>
         </div>
      </div>
   </div>
</template>

// <span>
// 	<label for="problem-toggle-36">после 100 км ч температура поднимается до критической</label>
// 	<br>
// 	<span style="margin-left: 0;" class="graytext">07.06.2020 14:51 Ган Игорь</span>
// </span>
// <span style="float: right; margin-left: 15px; padding-top: 5px;">
// 	<i data-id="36" style="cursor: pointer;" class="far fa-trash-alt orange-icon gray-icon delete-problem"></i>
// </span>

<script>
import Problem from "@/components/cars/problems/Problem";

export default {
   props: ["problem"],
   components: {
      Problem
   },
   data() {
      return {
         checkbox: this.problem.deleted
      };
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
</style>