<template>
   <Modal v-model="show" :title="title" width="600">
      <Form :model="form" ref="form" :rules="rules">
         <Row :gutter="30">
            <Col :sm="24" :md="12">
               <FormItem prop="amount" label="Сумма компенсации">
                  <Input v-model="form.amount" />
               </FormItem>
            </Col>

            <Col :sm="24" :md="12">
               <FormItem prop="reason" label="Тип компенсации">
                  <Select v-model="form.reason" placeholder="Выберите тип" :transfer="true">
                     <template v-if="mode == 'clients'">
                        <template v-if="section == 'clients'">
                           <Option value="gift">Подарок</Option>
                           <Option value="promo">Промо</Option>
                        </template>
                        <template v-if="section == 'drivers'">
                           <Option value="transport">Транспорт</Option>
                           <Option value="zp">ЗП</Option>
                           <Option value="paid">Перевод средств</Option>
                        </template>
                     </template>
                     <template v-if="mode == 'trip'">
                        <template v-if="service == 0">
                           <Option value="fuel">Топливо</Option>
                           <Option value="cleaning">Мойка</Option>
                           <Option value="recosting">Перерасчет</Option>
                           <Option value="service">Сервис</Option>
                           <Option value="gift">Подарок</Option>
                           <Option value="cashback">Кэшбэк</Option>
                        </template>

                        <template v-if="['1','2'].includes(service)">
                           <option value="fuel">Топливо</option>
                           <Option value="cleaning">Мойка</Option>
                           <Option value="delivery">Доставка</Option>
                           <Option value="service">Сервис</Option>
                           <Option value="logistic">Логистика</Option>
                           <Option value="repair_fund">Ремонт (фонд ущербов)</Option>
                           <Option value="repair">Ремонт (из выручки)</Option>
                           <Option value="owner">Расход владельца</Option>
                        </template>
                     </template>
                  </Select>
               </FormItem>
            </Col>
         </Row>
         <Row>
            <Col v-if="mode == 'clients'">
               <FormItem prop="new_date" label="Сменить дату">
                  <DatePicker
                     v-model="form.new_date"
                     type="date"
                     format="dd.MM.yyyy"
                     placeholder="Выберите дату"
                     :transfer="true"
                  ></DatePicker>
               </FormItem>
            </Col>

            <Col v-if="['1','2'].includes(service)">
               <FormItem prop="pay" label="Способ оплаты">
                  <Select v-model="form.pay" placeholder="Выберите способ" :transfer="true">
                     <Option value="cash">Наличные</Option>
                     <Option value="card">Безнал</Option>
                  </Select>
               </FormItem>
            </Col>

            <Col>
               <FormItem prop="about" label="Основание">
                  <Input v-model="form.about" type="textarea" :autosize="true" />
               </FormItem>
            </Col>
         </Row>
      </Form>

      <div slot="footer">
         <Button type="primary" @click="save('form')">Компенсировать</Button>
      </div>
   </Modal>
</template>


<script>
export default {
   props: ["value", "mode", "section"],
   data() {
      return {
         show: false,
         title: "Добавление компенсации",
         service: null,

         form: {
            amount: null,
            reason: null,
            new_date: new Date(),
            about: "",
            pay: "cash",
         },

         rules: {
            amount: [
               {
                  required: true,
                  message: "Введите сумму компенсации",
                  trigger: "blur",
               },
            ],
            reason: [
               {
                  required: true,
                  message: "Выберите тип компенсации",
                  trigger: "blur",
               },
            ],
            pay: [
               {
                  required: true,
                  message: "Выберите способ оплаты",
                  trigger: "blur",
               },
            ],
            new_date: [
               {
                  required: true,
                  type: "date",
                  message: "Выберите дату",
                  trigger: "blur",
               },
            ],
         },
      };
   },

   watch: {
      value: function (id) {
         if (id !== null) this.load(id);
      },
      show: function (val) {
         if (!val) this.$emit("input", null);
      },
   },

   methods: {
      async load(id) {
         let trip = await this.$axios.$get("/trips/get_service/" + id, {
            progress: false,
         });
         this.service = trip.data;
         this.show = true;
      },
      async save(name) {
         this.$refs[name].validate(async (valid) => {
            if (valid) {
               try {
                  let response = await this.$axios.$post(
                     "/trips/add_compensation/" + this.value,
                     {
                        mode: this.mode,
                        section: this.section,
                        amount: this.form.amount,
                        reason: this.form.reason,
                        about: this.form.about,
                        new_date: this.form.new_date,
                        pay: this.form.pay,
                     },
                     {
                        progress: false,
                     }
                  );

                  this.$Notice.success({
                     title: "Добавление компенсации",
                     desc: "Успешно",
                  });

                  this.form.amount = null;
                  this.form.reason = null;
                  this.form.about = "";

                  this.$emit("carsRefresh");
                  this.show = false;
               } catch (error) {
                  this.$Notice.error({
                     title: "Добавление компенсации",
                     desc: error.response.data.message,
                  });
               }
            }
         });
      },
   },
};
</script>


<style lang="scss" scoped>
</style>
