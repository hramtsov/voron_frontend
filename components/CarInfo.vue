<template>

  <Modal v-model="show" :title="title" width="1000" :footer-hide="true" :transition-names2="[]">
        <Row>
            <Col :md="14">

                <Row v-if="car.lockedSum">
                    <Col :xs="12" :sm="10" class="list-title">Страховой депозит</Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.lockedSum | number }}</span><span class="unit">₽</span>
                    </Col>
                </Row>


                <Row v-if="car.minTime != 0">
                    <Col :xs="12" :sm="10" class="list-title">Минимальное время проката в {{ car.ed2 }}</Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.minTime }}</span>
                    </Col>
                </Row>


                <Row v-if="car.CountTariff == 1">
                    <Col :xs="12" :sm="10" class="list-title">Поездка</Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.costPerHour | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>



                <Row v-if="car.CountTariff > 1" class="mt-3">
                    <Col class="list-title">Поездка</Col>
                </Row>


                <Row v-if="car.CountTariff > 1">
                    <Col :xs="12" :sm="10">
                        до {{ car.time2 }} {{ car.ed3 }}
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.cost2 | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>

                <Row v-if="car.CountTariff > 2">
                    <Col :xs="12" :sm="10">
                        до {{ car.time3 }} {{ car.ed3 }}
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.cost3 | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>


                <Row v-if="car.CountTariff > 3">
                    <Col :xs="12" :sm="10">
                        до {{ car.time4 }} {{ car.ed3 }}
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.cost4 | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>

                <Row v-if="car.CountTariff > 4">
                    <Col :xs="12" :sm="10">
                        до {{ car.time5 }} {{ car.ed3 }}
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.cost5 | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>

                <Row v-if="car.CountTariff > 1" class="mb-3">
                    <Col :xs="12" :sm="10">
                        Далее
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.costPerHour | number }}</span><span class='unit'>₽/{{ car.ed4 }}</span>
                    </Col>
                </Row>



                <Row v-if="car.weekendTariff != 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Стоимость в праздник/выходной
                    </Col>
                    <Col :xs="12" :sm="14">
                        + <span class="number">{{ car.weekendTariff | number }}</span><span class='unit'>%</span>
                    </Col>
                </Row>

                <Row v-if="!car.Booking">
                    <Col :xs="12" :sm="10" class="list-title">
                        Бронирование
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span>запрещено</span>
                    </Col>
                </Row>




                <Row v-if="car.Booking && car.BookingCost != 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Штраф при неявке
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.BookingCost | number }}</span><span class='unit'>₽</span>
                    </Col>
                </Row>

                <Row v-if="car.Booking && car.BookingTime != 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Длительность бронирования
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.BookingTime | number }}</span><span class='unit'>час</span>
                    </Col>
                </Row>


                <Row v-if="car.waitingCost > 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Парковка
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.waitingCost | number }}</span><span class='unit'>₽/мин</span>
                    </Col>
                </Row>


                <Row v-if="car.parkingCost > 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        На платной парковке
                    </Col>
                    <Col :xs="12" :sm="14">
                        + <span class="number">{{ car.parkingCost | number }}</span><span class='unit'>₽/мин</span>
                    </Col>
                </Row>



                <Row>
                    <Col :xs="12" :sm="10" class="list-title">
                        Доставка
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span v-if="car.allowDelivery == 1 && car.deliveryRange > 0">включена</span>
                        <span v-else>отключена</span>
                    </Col>
                </Row>


                <Row class="mt-3">
                    <Col :xs="12" :sm="10" class="list-title">
                        Объем бака
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.fuelMax | number }}</span><span class='unit'>л</span>
                    </Col>
                </Row>

                <Row>
                    <Col :xs="12" :sm="10" class="list-title">
                        Топливо
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span>{{ car.fuelType }}</span>
                    </Col>
                </Row>


                <Row class="mt-4 mb-3">
                    <Col>
                        <span class="text-justify" v-html="car.description"></span>
                    </Col>
                </Row>



                <Row v-if="car.minAgeDriversLicence > 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Минимальный стаж
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.minAgeDriversLicence | number }}</span><span class='unit'>{{ car.minAgeDriversLicence | declOfNum(['год', 'года', 'лет'], false) }}</span>
                    </Col>
                </Row>

                <Row v-if="car.minAgeDriver > 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Минимальный возраст
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.minAgeDriver | number }}</span><span class='unit'>{{ car.minAgeDriver | declOfNum(['год', 'года', 'лет'], false) }}</span>
                    </Col>
                </Row>

                <Row v-if="car.description_ses">
                    <Col :xs="12" :sm="10" class="list-title">
                        Описание повреждений в акте
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span>{{ car.description_ses }}</span>
                    </Col>
                </Row>

                <Row v-if="car.priceNew > 0">
                    <Col :xs="12" :sm="10" class="list-title">
                        Стоимость продажи
                    </Col>
                    <Col :xs="12" :sm="14">
                        <span class="number">{{ car.priceNew | number }}</span><span class='unit'>₽</span>
                    </Col>
                </Row>

            </Col>
            <Col :md="10">
                <img v-if="car.img" style="float: left;" width="100%" :src='`https://img.everent.me/${car.img}`' alt='Изображение устройства' />
            </Col>
        </Row>
  </Modal>

</template>


<script>
    export default {
        props: [
          'id',
          'value'
        ],
        data () {
            return {
                title: 'Информация об авто',
                car: [],
                show: false
            }
        },

      watch: {
        value: function (val) {
          if (val) {
            this.load()
          }
        },

        show: function(val) {
          this.$emit('input', val);
        }
      },

      methods: {
          async load() {
              let response = await this.$axios.$get('/cars/info/' + this.id)
              this.car = response.data
              this.title = this.car.title

              this.show = true
          }
      },

    }
</script>


<style lang="scss" scoped>
    .list-title {
        @include font-medium();
    }
</style>
