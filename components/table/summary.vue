<template>
   <div style="overflow:hidden;">
      <table
         class="ivu-table-summary"
         cellspacing="0"
         cellpadding="0"
         border="0"
         :style="styleObject"
      >
         <colgroup>
            <col v-for="(column, index) in columns" :width="setCellWidth(column)" />
         </colgroup>
         <tbody :class="[prefixCls + '-tbody']">
            <tr class="ivu-table-row">
               <td v-for="(column, index) in columns" :class="alignCls(column)">
                  <div class="ivu-table-cell" :class="cellCls(column)">
                     <slot :name="`${column.key}_summary`" :value="data_values">
                        <!-- data[column.key].value -->
                        <b>{{ data[column.key].value }}</b>
                     </slot>
                     <!-- <span>{{ data[column.key].value }}</span> -->
                  </div>
               </td>
            </tr>
         </tbody>
      </table>
   </div>
</template>
<script>
import Mixin from "./mixin";

export default {
   name: "TableSummary",
   mixins: [Mixin],
   props: {
      prefixCls: String,
      styleObject: Object,
      columns: Array,
      data: Object, // rebuildData
      columnsWidth: Object,
      fixed: {
         type: [Boolean, String],
         default: false,
      },
   },

   data() {
      return {
         data_values: {},
      };
   },

   mounted() {
      let vm = this;
      let array = {};
      Object.keys(vm.data).map(function (objectKey, index) {
         let key = vm.data[objectKey]["key"];
         let value = vm.data[objectKey]["value"];
         array[key] = value;
      });
      this.data_values = array;
      // console.log(this.data_values);
   },

   methods: {
      cellCls(column) {
         return [
            {
               ["ivu-table-hidden"]:
                  (this.fixed === "left" && column.fixed !== "left") ||
                  (this.fixed === "right" && column.fixed !== "right") ||
                  (!this.fixed &&
                     column.fixed &&
                     (column.fixed === "left" || column.fixed === "right")),
            },
         ];
      },
   },
};
</script>
