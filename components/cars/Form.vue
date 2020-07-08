<template>
   <Modal v-model="show" :title="title" width="700">
      <!-- {{ form }} -->
      <Form :model="form" ref="form" :rules="rules" label-position="top">
         <!-- {{ form.model }} -->
         <!--  <br />
         {{ value }}
         <br />
         {{ action }}-->
         <Tabs :value="tab" :animated="false">
            <TabPane label="Модель" name="model">
               <Row :gutter="30">
                  <Col :sm="24">
                     <FormItem prop="model_existing">
                        <RadioGroup v-model="form.model_existing" vertical>
                           <Radio label="0">Создать новую модель</Radio>
                           <Radio label="1">Выбрать из существующих</Radio>
                        </RadioGroup>
                     </FormItem>
                  </Col>
               </Row>

               <template v-if="form.model_existing == 1">
                  <Row :gutter="30">
                     <Col :sm="24">
                        <FormItem prop="model_model" label="Выберите модель">
                           <Select v-model="form.model_id" :transfer="true" :filterable="true">
                              <Option
                                 v-for="(row, key) in select.models"
                                 :value="key"
                                 :key="key"
                              >{{ row.title }}</Option>
                           </Select>
                        </FormItem>
                     </Col>
                  </Row>
               </template>

               <template v-if="form.model_existing == 0">
                  <Divider orientation="left">Общие сведения</Divider>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_title" label="Название">
                           <Input v-model="form.model_title" placeholder="E-class 200"></Input>
                        </FormItem>
                     </Col>
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_category" label="Категория">
                           <Cascader
                              :data="select.categories"
                              trigger="hover"
                              :filterable="true"
                              v-model="form.model_category"
                              :transfer="true"
                           />
                        </FormItem>
                     </Col>
                  </Row>

                  <!--  -->
                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_fuelMax" label="Обьем бака топлива, литров">
                           <Input v-model="form.model_fuelMax"></Input>
                        </FormItem>
                     </Col>

                     <Col :sm="24" :md="12">
                        <FormItem prop="model_fuelType" label="Вид топлива">
                           <Input v-model="form.model_fuelType" placeholder="Бензин АИ 95"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_tachometer1" label="Повышенные обороты">
                           <Input v-model="form.model_tachometer1"></Input>
                        </FormItem>
                     </Col>

                     <Col :sm="24" :md="12">
                        <FormItem prop="model_tachometer2" label="Критические обороты">
                           <Input v-model="form.model_tachometer2"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30">
                     <Col :sm="24">
                        <FormItem prop="model_description" label="Описание">
                           <Input
                              v-model="form.model_description"
                              type="textarea"
                              :autosize="true"
                           />
                        </FormItem>
                     </Col>
                  </Row>

                  <Divider orientation="left">Требования к клиенту</Divider>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_minAgeDriver" label="Минимальный возраст">
                           <Input v-model="form.model_minAgeDriver" placeholder="18"></Input>
                        </FormItem>
                     </Col>

                     <Col :sm="24" :md="12">
                        <FormItem prop="model_minAgeDriversLicence" label="Минимальный стаж">
                           <Input v-model="form.model_minAgeDriversLicence" placeholder="3"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_lockedSum" label="Залог, рублей">
                           <Input v-model="form.model_lockedSum"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Divider orientation="left">Тарификация</Divider>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_TimeUnit" label="Единица измерения времени">
                           <Select v-model="form.model_TimeUnit" :transfer="true">
                              <Option
                                 v-for="(title, key) in select.TimeUnit"
                                 :value="key"
                                 :key="key"
                              >{{ title }}</Option>
                           </Select>
                        </FormItem>
                     </Col>

                     <Col :sm="24" :md="12">
                        <FormItem prop="model_minTime" :label="label.minTime">
                           <Input v-model="form.model_minTime"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_CountTariff" label="Выберите количество тарифов">
                           <Select v-model="form.model_CountTariff" :transfer="true">
                              <Option
                                 v-for="(title, key) in select.CountTariff"
                                 :value="key"
                                 :key="key"
                              >{{ title }}</Option>
                           </Select>
                        </FormItem>
                     </Col>
                     <Col :sm="24" :md="12" v-if="form.model_CountTariff == 1">
                        <FormItem prop="model_costPerHour" :label="label.cost">
                           <Input v-model="form.model_costPerHour"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row
                     :gutter="30"
                     v-if="form.model_CountTariff > 1"
                     type="flex"
                     align="middle"
                     class="mb-2"
                  >
                     <Col :sm="6" :md="4">До</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_time2" :show-message="false" required>
                           <Input v-model="form.model_time2"></Input>
                        </FormItem>
                     </Col>
                     <Col
                        :sm="6"
                        :md="4"
                     >{{ form.model.time2 | declOfNum(label.unit_time_skl, false) }}</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_cost2" :show-message="false" required>
                           <Input v-model="form.model_cost2"></Input>
                        </FormItem>
                     </Col>

                     <Col
                        :sm="6"
                        :md="8"
                     >{{ form.model_cost2 | declOfNum(["рубль", "рубля", "рублей"], false) }} / {{ 1 | declOfNum(label.unit_time, false) }}</Col>
                  </Row>

                  <Row
                     :gutter="30"
                     v-if="form.model_CountTariff > 2"
                     type="flex"
                     align="middle"
                     class="mb-2"
                  >
                     <Col :sm="6" :md="4">До</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_time3" :show-message="false" required>
                           <Input v-model="form.model_time3"></Input>
                        </FormItem>
                     </Col>
                     <Col
                        :sm="6"
                        :md="4"
                     >{{ form.model_time3 | declOfNum(label.unit_time_skl, false) }}</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_cost3" :show-message="false" required>
                           <Input v-model="form.model_cost3"></Input>
                        </FormItem>
                     </Col>

                     <Col
                        :sm="6"
                        :md="8"
                     >{{ form.model_cost3 | declOfNum(["рубль", "рубля", "рублей"], false) }} / {{ 1 | declOfNum(label.unit_time, false) }}</Col>
                  </Row>

                  <Row
                     :gutter="30"
                     v-if="form.model_CountTariff > 3"
                     type="flex"
                     align="middle"
                     class="mb-2"
                  >
                     <Col :sm="6" :md="4">До</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_time4" :show-message="false" required>
                           <Input v-model="form.model_time4"></Input>
                        </FormItem>
                     </Col>
                     <Col
                        :sm="6"
                        :md="4"
                     >{{ form.model_time4 | declOfNum(label.unit_time_skl, false) }}</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_cost4" :show-message="false" required>
                           <Input v-model="form.model_cost4"></Input>
                        </FormItem>
                     </Col>

                     <Col
                        :sm="6"
                        :md="8"
                     >{{ form.model_cost4 | declOfNum(["рубль", "рубля", "рублей"], false) }} / {{ 1 | declOfNum(label.unit_time, false) }}</Col>
                  </Row>

                  <Row
                     :gutter="30"
                     v-if="form.model_CountTariff > 4"
                     type="flex"
                     align="middle"
                     class="mb-2"
                  >
                     <Col :sm="6" :md="4">До</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_time5" :show-message="false" required>
                           <Input v-model="form.model_time5"></Input>
                        </FormItem>
                     </Col>
                     <Col
                        :sm="6"
                        :md="4"
                     >{{ form.model_time5 | declOfNum(label.unit_time_skl, false) }}</Col>
                     <Col :sm="6" :md="4">
                        <FormItem prop="model_cost5" :show-message="false" required>
                           <Input v-model="form.model_cost5"></Input>
                        </FormItem>
                     </Col>

                     <Col
                        :sm="6"
                        :md="8"
                     >{{ form.model_cost5 | declOfNum(["рубль", "рубля", "рублей"], false) }} / {{ 1 | declOfNum(label.unit_time, false) }}</Col>
                  </Row>

                  <Row
                     :gutter="30"
                     v-if="form.model_CountTariff > 1"
                     type="flex"
                     align="middle"
                     class="mb-2"
                  >
                     <Col :sm="6" :md="12">Далее</Col>

                     <Col :sm="6" :md="4">
                        <FormItem prop="model_costPerHour2" :show-message="false" required>
                           <Input v-model="form.model_costPerHour2"></Input>
                        </FormItem>
                     </Col>

                     <Col
                        :sm="6"
                        :md="8"
                     >{{ form.model_costPerHour2 | declOfNum(["рубль", "рубля", "рублей"], false) }} / {{ 1 | declOfNum(label.unit_time, false) }}</Col>
                  </Row>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem
                           prop="model_weekendTariff"
                           label="Наценка в выходной / праздник, +%"
                        >
                           <Input v-model="form.model_weekendTariff" placeholder="0"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <!-- <Divider orientation="left">Самовывоз</Divider> -->

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_allowPickup">
                           <Checkbox v-model="form.model_allowPickup" label="1">Самовывоз</Checkbox>
                        </FormItem>
                     </Col>
                  </Row>

                  <Divider
                     orientation="left"
                     v-if="form.model_allowPickup == 1 && form.model_booking == 1"
                  >Бронирование</Divider>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12" v-if="form.model_allowPickup == 1">
                        <FormItem prop="model_booking">
                           <Checkbox v-model="form.model_booking" label="1">Разрешить бронирование</Checkbox>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30" v-if="form.model_booking == 1">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_BookingCost" label="Штраф при неявке, руб">
                           <Input v-model="form.model_BookingCost"></Input>
                        </FormItem>
                     </Col>
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_BookingTime" label="Длительность бронирования, час">
                           <Input v-model="form.model_BookingTime"></Input>
                        </FormItem>
                     </Col>
                  </Row>

                  <Divider orientation="left" v-if="form.model_allowDelivery == 1">Доставка</Divider>

                  <Row :gutter="30">
                     <Col :sm="24" :md="12">
                        <FormItem prop="model_allowDelivery">
                           <Checkbox v-model="form.model_allowDelivery" label="1">Доставка</Checkbox>
                        </FormItem>
                     </Col>
                  </Row>

                  <Row :gutter="30" v-if="form.model_allowDelivery == 1">
                     <Col :sm="24" :md="12">
                        <FormItem
                           prop="model_deliveryRange"
                           label="Дальность доставки от проката, км"
                        >
                           <Input v-model="form.model_deliveryRange"></Input>
                        </FormItem>
                     </Col>
                     <Col :sm="24" :md="12">
                        <FormItem
                           prop="model_deliveryCost"
                           label="Стоимость доставки / забора по адресу, руб"
                        >
                           <Input v-model="form.model_deliveryCost"></Input>
                        </FormItem>
                     </Col>
                  </Row>
               </template>
            </TabPane>
            <TabPane label="Автомобиль" name="car">
               <Row :gutter="30">
                  <Col :sm="24" :md="12">
                     <FormItem prop="car_number" label="Номер авто">
                        <Input v-model="form.car_number" placeholder="М449УН777"></Input>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_partner" label="Партнер">
                        <Select v-model="form.car_partner" :transfer="true" :filterable="true">
                           <Option
                              v-for="partner in select.partners"
                              :value="partner.id"
                              :key="partner.id"
                           >{{ partner.title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24" :md="12">
                     <FormItem prop="car_vin" label="VIN">
                        <Input v-model="form.car_vin" placeholder="WDD2130421A032043"></Input>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_sts" label="СТС">
                        <Input v-model="form.car_sts" placeholder="7760986727"></Input>
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24" :md="24">
                     <FormItem prop="car_idMongeo" label="id Mongeo">
                        <Input v-model="form.car_idMongeo" placeholder="5436138"></Input>
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24" :md="12">
                     <FormItem prop="car_parkingType" label="Завершение на платной">
                        <Select v-model="form.car_parkingType" :transfer="true">
                           <Option
                              v-for="(title, key) in select.parkingType"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_disabled" label="Видимость в приложении">
                        <Select v-model="form.car_disabled" :transfer="true">
                           <Option
                              v-for="(title, key) in select.disabled"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_notifyDisable" label="Рассылка когда освободится">
                        <Select v-model="form.car_notifyDisable" :transfer="true">
                           <Option
                              v-for="(title, key) in select.notifyDisable"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_penaltyTracking" label="Отслеживание штрафов">
                        <Select v-model="form.car_penaltyTracking" :transfer="true">
                           <Option
                              v-for="(title, key) in select.penaltyTracking"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24" :md="12">
                     <FormItem prop="car_tyre" label="Резина">
                        <Select v-model="form.car_tyre" :transfer="true">
                           <Option
                              v-for="(title, key) in select.tyre"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_brush" label="Щетка">
                        <Select v-model="form.car_brush" :transfer="true">
                           <Option
                              v-for="(title, key) in select.brush"
                              :value="key"
                              :key="key"
                           >{{ title }}</Option>
                        </Select>
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24">
                     <FormItem prop="car_defects" label="Повреждения">
                        <Input v-model="form.car_defects" type="textarea" :autosize="true" />
                     </FormItem>
                  </Col>
               </Row>

               <Row :gutter="30">
                  <Col :sm="24" :md="12">
                     <FormItem prop="car_startDate" label="Дата акта приема-передачи">
                        <DatePicker
                           v-model="form.car_startDate"
                           type="date"
                           format="dd.MM.yyyy"
                           placeholder="Выберите дату"
                           :transfer="true"
                        ></DatePicker>
                     </FormItem>
                  </Col>

                  <Col :sm="24" :md="12">
                     <FormItem prop="car_osago" label="ОСАГО">
                        <DatePicker
                           v-model="form.car_osago"
                           type="date"
                           format="dd.MM.yyyy"
                           placeholder="Выберите дату"
                           :transfer="true"
                        ></DatePicker>
                     </FormItem>
                  </Col>
               </Row>
            </TabPane>
         </Tabs>
      </Form>

      <template slot="footer">
         <Button type="primary" @click="save('form')">Сохранить</Button>
      </template>
   </Modal>
</template>


<script>
export default {
   props: ["value", "action"],
   data() {
      return {
         title: "Добавить авто",
         show: false,
         tab: null,

         label: {
            minTime: "",
            cost: "",
            unit_time: [],
            unit_time_skl: []
         },

         select: {
            partners: {},
            models: {},
            categories: [],
            parkingType: {
               allow_paid: "Разрешено с переключателем",
               allow_free: "Разрешено, не требуется оплата",
               restricted: "Запрещено"
            },
            disabled: {
               0: "Виден",
               1: "Не виден"
            },
            notifyDisable: {
               0: "Включена",
               1: "Остановлена"
            },
            penaltyTracking: {
               1: "Включено",
               0: "Не включено"
            },
            tyre: {
               summer: "Летняя",
               winter: "Зимняя",
               all: "Всесезонная"
            },
            brush: {
               1: "Есть",
               0: "Нет"
            },

            TimeUnit: {
               0: "Минута",
               1: "Час",
               2: "День",
               3: "Неделя",
               4: "Месяц"
            },
            CountTariff: {
               1: "Постоянная стоимость",
               2: "Два варианта стоимости",
               3: "Три варианта стоимости",
               4: "Четыре варианта стоимости",
               5: "Пять вариантов стоимости"
            }
         },

         form: {
            model_existing: "0",
            model_id: null,
            model_title: null,
            model_category: [],
            model_fuelMax: null,
            model_fuelType: null,
            model_minAgeDriver: 18, // мин возраст
            model_minAgeDriversLicence: 0, // мин стаж
            model_lockedSum: null, // залог руб
            model_TimeUnit: "0", // Единица измерения времени
            model_minTime: null, // Минимальное время проката в минутах
            model_CountTariff: "1", // Выберите количество тарифов
            model_costPerHour: null, // Стоимость тарифа
            model_time2: null,
            model_time3: null,
            model_time4: null,
            model_time5: null,
            model_cost2: null,
            model_cost3: null,
            model_cost4: null,
            model_cost5: null,
            model_costPerHour2: null,
            model_weekendTariff: null,
            model_allowPickup: "0",
            model_booking: "0",
            model_allowDelivery: "0",
            model_BookingCost: null,
            model_BookingTime: null,
            model_deliveryRange: null,
            model_deliveryCost: null,
            model_description: "",
            model_tachometer1: null,
            model_tachometer2: null,

            car_number: null,
            car_partner: null,
            car_osago: null,
            car_vin: null,
            car_sts: null,
            car_idMongeo: null,
            car_defects: null,
            car_parkingType: "allow_paid",
            car_disabled: "0",
            car_notifyDisable: "1",
            car_penaltyTracking: "0",
            car_startDate: null,
            car_tyre: "summer",
            car_brush: "0"
         },

         rules: {
            car_number: [
               {
                  required: true,
                  message: "Введите номер автомобиля",
                  trigger: "change"
               }
            ],
            car_partner: [
               {
                  required: true,
                  message: "Выберите партнера, которому принадлежит автомобиль",
                  trigger: "change"
               }
            ],

            model_title: [
               {
                  required: true,
                  message: "Введите название модели",
                  trigger: "change"
               }
            ],

            model_category: [
               {
                  type: "array",
                  required: true,
                  message: "Выберите категорию",
                  trigger: "change"
               }
            ],

            model_lockedSum: [
               {
                  required: true,
                  message: "Введите сумму залога",
                  trigger: "change"
               }
            ],

            model_costPerHour: [
               {
                  required: true,
                  message: "Введите стоимость проката",
                  trigger: "change"
               }
            ]
         }
      };
   },

   watch: {
      value: function(id) {
         this.tab = "car";

         if (id == 0) {
            this.form.model_existing = "0";
            this.tab = "model";
         }
         if (id > 0) {
            this.form.model_existing = "1";
         }
         if (id !== null) {
            this.load();
         }
      },
      show: function(val) {
         if (!val) {
            this.$emit("input", null);
            this.select = {};
         }
      },

      form: {
         handler: function(val) {
            this.label.unit_time_skl = ["минуты", "минут", "минут"];

            if (val.model_TimeUnit == 0) {
               this.label.minTime = "Минимальное время проката в минутах";
               this.label.cost = "Стоимость проката, рублей / минута";
               this.label.unit_time = ["минута", "минуты", "минут"];
               this.label.unit_time_skl = ["минуты", "минут", "минут"];
            }
            if (val.model_TimeUnit == 1) {
               this.label.minTime = "Минимальное время проката в часах";
               this.label.cost = "Стоимость проката, рублей / час";
               this.label.unit_time = ["час", "часа", "часов"];
               this.label.unit_time_skl = ["часа", "часов", "часов"];
            }
            if (val.model_TimeUnit == 2) {
               this.label.minTime = "Минимальное время проката в днях";
               this.label.cost = "Стоимость проката, рублей / день";
               this.label.unit_time = ["день", "дня", "дней"];
               this.label.unit_time_skl = ["дня", "дней", "дней"];
            }
            if (val.model_TimeUnit == 3) {
               this.label.minTime = "Минимальное время проката в неделях";
               this.label.cost = "Стоимость проката, рублей / неделя";
               this.label.unit_time = ["неделя", "недели", "недель"];
               this.label.unit_time_skl = ["недели", "недель", "недель"];
            }
            if (val.model_TimeUnit == 4) {
               this.label.minTime = "Минимальное время проката в месяцах";
               this.label.cost = "Стоимость проката, рублей / месяц";
               this.label.unit_time = ["месяц", "месяца", "месяцев"];
               this.label.unit_time_skl = ["месяца", "месяцев", "месяцев"];
            }
         },
         deep: true
      }
   },

   methods: {
      async load() {
         this.form.model_id = this.value;

         let categories = await this.$axios.$get("/categories/getlist/", {
            progress: false
         });
         this.select.categories = categories.data;

         let models = await this.$axios.$get("/cars/getmodels/", {
            progress: false
         });
         this.select.models = models.data;

         // if (this.form.model.existing) {
         //    let model = await this.$axios.$get(
         //       "/cars/getmodel/" + this.form.model.id,
         //       {
         //          progress: false
         //       }
         //    );
         //    this.title = "Новый автомобиль " + model.data.title;
         // } else {
         //    this.title = "Новый автомобиль";
         // }

         let partners = await this.$axios.$get("/partners/getlist/", {
            progress: false
         });
         this.select.partners = partners.data;
         this.show = true;
      },

      async save(name) {
         this.$refs[name].validate(async valid => {
            if (valid) {
               try {
                  await this.$axios.$post("/cars/create/", this.form, {
                     progress: false
                  });

                  this.$Notice.success({
                     title: "Добавление автомобиля",
                     desc: "Успешно"
                  });

                  this.$emit("carsRefresh");
                  this.show = false;
               } catch (error) {
                  this.$Notice.error({
                     title: "Добавление автомобиля",
                     desc: error.response.data.message
                  });
               }
            } else {
               this.$Notice.error({
                  title: "Заполните форму",
                  desc:
                     "Вы допустили ошибки в форме, проверьте и попробуйте еще раз"
               });
            }
         });
      }
   }
   // beforeDestroy() {
   //    console.log("beforeDestroy");
   // }
};
</script>


<style lang="scss" scoped>
</style>
