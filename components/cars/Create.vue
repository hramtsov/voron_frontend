<template>

  <Modal v-model="show" :title="title" width="700">

      {{ step }}
      <Steps :current="step">
        <Step title="Основные" />
        <Step title="Комплект" content="Подсказка" />
      </Steps>
      <Button type="primary" @click="next">Next step</Button>



      <Form :model="form" ref="form" :rules="rules" label-position="top">


              <Row :gutter="30" v-show="step == 1">
                <Col :sm="24" :md="12">
                  <FormItem prop="number" label="Номер авто">
                    <Input v-model="form.number" placeholder="М449УН777"></Input>
                  </FormItem>
                </Col>

                <Col :sm="24" :md="12">
                  <FormItem prop="partner" label="Партнер">
                    <Select v-model="form.partner" :transfer="true" :filterable="true">
                      <Option v-for="partner in partners" :value="partner.id" :key="partner.id">{{ partner.title }}</Option>
                    </Select>
                  </FormItem>
                </Col>
              </Row>


        <Row :gutter="30">
          <Col :sm="24" :md="12">
            <FormItem prop="vin" label="VIN">
              <Input v-model="form.vin" placeholder="WDD2130421A032043"></Input>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="sts" label="СТС">
              <Input v-model="form.sts" placeholder="7760986727"></Input>
            </FormItem>
          </Col>
        </Row>



        <Row :gutter="30">
          <Col :sm="24" :md="24">
            <FormItem prop="idMongeo" label="id Mongeo">
              <Input v-model="form.idMongeo" placeholder="5436138"></Input>
            </FormItem>
          </Col>
        </Row>



        <Row :gutter="30">
          <Col :sm="24" :md="12">
            <FormItem prop="parkingType" label="Завершение на платной">
              <Select v-model="form.parkingType" :transfer="true">
                <Option v-for="(title, key) in select.parkingType" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="disabled" label="Видимость в приложении">
              <Select v-model="form.disabled" :transfer="true">
                <Option v-for="(title, key) in select.disabled" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="notifyDisable" label="Рассылка когда освободится">
              <Select v-model="form.notifyDisable" :transfer="true">
                <Option v-for="(title, key) in select.notifyDisable" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="penaltyTracking" label="Отслеживание штрафов">
              <Select v-model="form.penaltyTracking" :transfer="true">
                <Option v-for="(title, key) in select.penaltyTracking" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

        </Row>




        <Row :gutter="30">
          <Col :sm="24" :md="12">
            <FormItem prop="tyre" label="Резина">
              <Select v-model="form.tyre" :transfer="true">
                <Option v-for="(title, key) in select.tyre" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="brush" label="Щетка">
              <Select v-model="form.brush" :transfer="true">
                <Option v-for="(title, key) in select.brush" :value="key" :key="key">{{ title }}</Option>
              </Select>
            </FormItem>
          </Col>

        </Row>


        <Row :gutter="30">
          <Col :sm="24">
            <FormItem prop="defects" label="Повреждения">
              <Input v-model="form.defects" type="textarea" :autosize="true" placeholder="Повреждения" />
            </FormItem>
          </Col>
        </Row>


        <Row :gutter="30">
          <Col :sm="24" :md="12">
            <FormItem prop="startDate" label="Дата акта приема-передачи">
              <DatePicker v-model="form.startDate" type="date" format="dd.MM.yyyy" placeholder="Выберите дату" :transfer="true"></DatePicker>
            </FormItem>
          </Col>

          <Col :sm="24" :md="12">
            <FormItem prop="osago" label="ОСАГО">
              <DatePicker v-model="form.osago" type="date" format="dd.MM.yyyy" placeholder="Выберите дату" :transfer="true"></DatePicker>
            </FormItem>
          </Col>
        </Row>




      </Form>

    <template slot="footer">
      <Button type="primary" @click="save('form')">Сохранить</Button>
    </template>

  </Modal>

</template>


<script>
    export default {
        props: [
          'value'
        ],
        data () {
            return {
                title: 'Добавить авто',
                partners: [],
                show: false,

                step: 1,

                select: {
                  parkingType: {
                    'allow_paid': 'Разрешено с переключателем',
                    'allow_free': 'Разрешено, не требуется оплата',
                    'restricted': 'Запрещено'
                  },
                  disabled: {
                    0: 'Виден',
                    1: 'Не виден'
                  },
                  notifyDisable: {
                    0: 'Включена',
                    1: 'Остановлена'
                  },
                  penaltyTracking: {
                    1: 'Включено',
                    0: 'Не включено'
                  },
                  tyre: {
                    'summer': 'Летняя',
                    'winter': 'Зимняя',
                    'all': 'Всесезонная',
                  },
                  brush: {
                    1: 'Есть',
                    0: 'Нет',
                  },
                },

                form: {
                  model: null,
                  number: null,
                  partner: null,
                  osago: null,
                  vin: null,
                  sts: null,
                  idMongeo: null,
                  defects: null,
                  parkingType: 'allow_paid',
                  disabled: "0",
                  notifyDisable: "1",
                  penaltyTracking: "0",
                  startDate: null,
                  tyre: 'summer',
                  brush: "0",
                },

                rules: {
                  number: [
                    { required: true, message: 'Введите номер автомобиля', trigger: 'change' },
                  ],
                  partner: [
                    { required: true, message: 'Выберите партнера, которому принадлежит автомобиль', trigger: 'change' },
                  ],
                },
            }
        },


      watch: {
        value: function (id) {
          if (id !== null) {
            this.load()
          }
        },
        show: function (val) {
          if (!val)
            this.$emit('input', null);
        }
      },


      methods: {
          async load() {
              this.form.model = this.value

              let model = await this.$axios.$get('/cars/getmodel/' + this.form.model, {
                progress: false
              })
              this.title = 'Новый автомобиль ' + model.data.title


              let partners = await this.$axios.$get('/partners/getlist/', {
                progress: false
              })
              this.partners = partners.data
              this.show = true
          },

          next () {
            if (this.step == 2) {
              this.step = 1;
            } else {
              this.step += 1;
            }
          },


          async save (name) {
            this.$refs[name].validate(async (valid) => {
              if (valid) {

                    try {
                        await this.$axios.$post('/cars/create/', this.form, {
                          progress: false
                        })

                        this.$Notice.success({
                          title: 'Добавление автомобиля',
                          desc: 'Успешно'
                        });

                        this.$emit('carsRefresh')
                        this.show = false

                      } catch (error) {
                        this.$Notice.error({
                          title: 'Добавление автомобиля',
                          desc: error.response.data.message
                        });
                      }

              } else {
                this.$Notice.error({
                  title: 'Заполните форму',
                  desc: 'Вы допустили ошибки в форме, проверьте и попробуйте еще раз'
                });
              }
            })
          },
      },

    }
</script>


<style lang="scss" scoped>

</style>
