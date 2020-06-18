<template>
  <div>
    <PageHeader title="Парк автомобилей" icon="fad fa-cars" />

    <div class="mt-4 mb-5">
      <template v-for="(category, index) in tables" v-if="category.count_cars > 0">
        <Badge :count="category.count_cars" class="mr-3" type="normal">
          <Button :type="( index == $route.params.table ? 'primary' : 'default' )" :to="`/cars/${index}`" >{{ category.title }}</Button>
        </Badge>
      </template>
    </div>


    <div class="table-responsive">
      <table class="table	cars-list  table-sm table-borderless">
        <tbody>


        <template v-for="(category, category_id) in table.categories">

          <tr>
            <td class="car_type_title" colspan='30'>{{ category.title }}</td>
          </tr>

          <template v-for="(type, type_id) in category.types">
            <template v-for="(car, car_id) in type.cars">

              <tr :class="['car-' + car.type_ses.name,
                  (car.disabled == 1 ? 'car-disabled' : '')
                ]" >

                <td>
                  <template v-if="type.first_car_id == car.id">
                    <Tooltip content="Информация об авто" placement="top">
                      <a @click="info_car(car.id)">
                        <img class="car_img_mini" :src="`https://img.everent.me/${type.img}`" alt='Изображение авто' />
                      </a>
                    </Tooltip>
                  </template>

                </td>
                <td class="titleline">
                  <template v-if="type.first_car_id == car.id">
                    <span class="car_model_title">
                      {{ type.title }}
                    </span>
                    <span class="gray-color">
                      {{ type.subtitle }}
                    </span>
                  </template>
                </td>

                <td>
                  <template v-if="type.first_car_id == car.id">
                    <Poptip trigger="hover">
                      <span :id="`popover-count-subs-${car.id}`" v-if="type.subs_count > 0" :class="['count_subs', (car.notifyDisable == 1 ? 'notify-opacity' : '')]">{{ type.subs_count }}</span>

                      <div slot="title"><b>Подписчики</b></div>
                      <div slot="content">
                        <span v-html="type.subs"></span>
                      </div>
                    </Poptip>
                  </template>
                </td>


                <td v-if="$auth.user.permissions.widget_ad">
                  <template v-if="type.first_car_id == car.id">
                    <Tooltip v-if="type.ad == 1" content="Реклама запущена" placement="top" >
                      <div class='green-color'><i class='far fa-check'></i></div>
                    </Tooltip>

                    <Tooltip v-else content="Реклама не запущена" placement="top" >
                      <div class='red-color'><i class='far fa-times'></i></div>
                    </Tooltip>
                  </template>
                </td>

                <td v-if="$auth.user.permissions.car_create">
                  <template v-if="type.first_car_id == car.id">
                    <Tooltip content="Добавить авто" placement="top" >
                      <a :href="`/devices/add/${type.id}`"><i class="far fa-plus orange-color"></i></a>
                    </Tooltip>
                  </template>
                </td>

                <td v-if="$auth.user.permissions.car_type_edit">
                  <template v-if="type.first_car_id == car.id">
                    <Tooltip content="Настройка типа авто" placement="top" >
                      <a :href="`/devices/edittype/${type.id}`"><i class="fad fa-cog gray-color"></i></a>
                    </Tooltip>
                  </template>
                </td>

                <td>
                  <CarNumber :number="car.number" />
                </td>

                <td v-if="$auth.user.permissions.car_gallery_all_page">
                  <Tooltip content="Фото повреждений" placement="top" >
                    <a target="_blank"  :href="`/devices/gallerycarall/${car.id}`">
                        <i :class="['fad fa-camera', (car.count_defects == 0 ? 'gray-light-color' : 'gray-color')]"></i>
                    </a>
                  </Tooltip>
                </td>

                <td v-if="$auth.user.permissions.car_problems_page">
                  <Tooltip content="Технические проблемы" placement="top" >
                    <a :data-remote="`/give/deviceproblems/${car.id}`">
                        <i :class="['fad fa-tools', (car.count_problems == 0 ? 'gray-light-color' : 'gray-color')]"></i>
                    </a>
                  </Tooltip>
                </td>



                <td>
                    <div v-if="car.parking.length != 0">
                      <Tooltip placement="top" >
                        <i class='fas fa-parking' style='color: #2929ff;'></i>
                        <div slot="content">
                          На платной парковке<br/>
                          {{ car.parking.parking_id }} - {{ car.parking.price }} ₽/час
                        </div>
                      </Tooltip>

                        <template v-if="car.parking.state == 'paid'">
                          <Tooltip content="Оплачено" placement="top">
                            <a v-if="$auth.user.permissions.car_parking" :data-remote='`/give/parkingpayed/${car.parking.id}`'><i class='fas fa-money-check-alt'></i></a>
                            <i v-else class='fal fa-money-check-alt'></i>
                          </Tooltip>
                        </template>

                        <template v-if="car.parking.state == 'error'">
                          <Tooltip content="Не оплачено" placement="top">
                            <a v-if="$auth.user.permissions.car_parking" :data-remote='`/give/errorparkingaction/${car.parking.id}`'><i class='fa fa-ban red-color'></i></a>
                            <i v-else class='fal fa-ban red-color'></i>
                          </Tooltip>
                        </template>

                      <Tooltip content="Заврешение оплаты" placement="top" v-if="car.parking.state == 'need_stop'">
                        <i class='fal fa-clock gray-color'></i>
                      </Tooltip>

                      <Tooltip content="В процессе оплаты" placement="top" v-if="!['paid', 'error', 'need_stop'].includes(car.parking.state)">
                        <i class='fad fa-clock gray-color'></i>
                      </Tooltip>

                    </div>
                    <div v-else>
                      <Tooltip content="Моспаркинг" placement="top">
                        <a v-if="car.parkingType == 'allow_paid' && $auth.user.permissions.car_parking" :data-remote='`/give/gopay/${car.id}`'><i class='fas fa-parking gray-light-color'></i></a>
                      </Tooltip>
                    </div>
                </td>


                <td>
                  <Tooltip content="Нет данных по ОСАГО" placement="top" v-if="!car.osago">
                    <i class='fad fa-calendar-times gray-color'></i>
                  </Tooltip>

                  <Tooltip :content="`ОСАГО до ${car.osago.date}`" placement="top" v-if="car.osago && car.osago.days_left < 7">
                    <i class='fad fa-calendar-times red-color'></i>
                  </Tooltip>


                  <Tooltip content="Нет ни одного штрафа" placement="top" v-if="car.penaltyTracking == 1">
                    <i v-if="car.count_fines == 0" class="fad fa-traffic-light orange-color"></i>
                  </Tooltip>
                  <Tooltip content="Штрафы не отслеживаются" placement="top" v-else>
                    <i class="fad fa-traffic-light red-color"></i>
                  </Tooltip>
                </td>

                <td align="center">
                  <Tooltip content="Свободно" placement="top" v-if="car.status == 0">
                    <div class="car_status car_status_green"></div>
                  </Tooltip>

                  <Tooltip content="Занято" placement="top" v-if="['1','7','8','9','16','18'].includes(car.status)">
                        <div v-if="car.status == 1 && (($auth.user.permissions.client_info && car.ses.isService == 0) || ($auth.user.permissions.client_service_info && car.ses.isService == 1) || ($auth.user.permissions.client_owner_info && car.ses.isService == 2))" :data-orientation="car.ses.client.selfie_turn" class="car_status car_status_big car_status_black" :style="`background-image: url(/give/resizeimage?fn=${car.ses.client.selfie})`"></div>
                        <div v-else class="car_status car_status_red"></div>
                  </Tooltip>

                  <Tooltip content="Недоступно" placement="top" v-if="car.status == 4">
                    <div class="car_status car_status_red"></div>
                  </Tooltip>

                  <Tooltip content="В резерве" placement="top" v-if="['2','3','5','6','10','11','12','8','13','14','17'].includes(car.status)">
                    <div class="car_status car_status_yellow car_status_middle"></div>
                  </Tooltip>
                </td>



                <td>

                  <Tooltip :content="car.type_ses.text" placement="top" v-if="car.type_ses">
                    <div class="type-ses"><span></span></div>
                  </Tooltip>

                  <Tooltip content="Отключенный авто" placement="top" v-if="car.disabled == 1">
                    <div class="type-ses"><span></span></div>
                  </Tooltip>

                </td>



                <td>
                  <Tooltip content="Информация" placement="top" v-if="['1','12'].includes(car.status) && (($auth.user.permissions.client_info && car.ses.isService == 0) || ($auth.user.permissions.client_service_info && car.ses.isService == 1) || ($auth.user.permissions.client_owner_info && car.ses.isService == 2))">
                      <Button :data-remote="`/give/infoclient/${car.ses.client.id}?mode=park&ses=${car.ses.id}`"><i class="far fa-address-card small-i"></i></Button>
                  </Tooltip>
                </td>

                <td>
                  <Tooltip content="История поездки" placement="top" v-if="['1','12'].includes(car.status)">
                    <Button data-target="#ModalDevice" :data-remote="`/give/historydrive/${car.ses.id}?mode=park`"><i class="far fa-clock small-i"></i></Button>
                  </Tooltip>
                </td>



                <td>
                  <Tooltip content="Управление" placement="top" v-if="['1','12'].includes(car.status)">
                    <Button v-if="type.sharingEnable == 1 && $auth.user.permissions.drive_action" :data-remote="`/give/actionses/${car.ses.id}`"><i class="far fa-car-alt small-i"></i></Button>
                  </Tooltip>
                </td>

                <td>
                  <Tooltip content="Трек поездки" placement="top" v-if="car.status == 1 && $auth.user.permissions.drive_track">
                    <a target="_black" :href="`/devices/track/${car.ses.id}`"><i class="fad fa-route gray-color"></i></a>
                  </Tooltip>
                </td>

                <td>
                  <Tooltip content="Скорость и обороты" placement="top" v-if="car.status == 1 && $auth.user.permissions.drive_speed">
                    <a :data-remote="`/give/speeddrive/${car.ses.id}`"><i class="fad fa-tachometer-alt gray-color"></i></a>
                  </Tooltip>
                </td>




                <td>
                  <template v-if="['1','12'].includes(car.status) && car.ses.client.sos == 1 && $auth.user.permissions.car_sos">
                    <a :href="`/devices/sos/${car.ses.client.id}`" type="button" class="btn btn-round btn-danger"><small><b>SOS</b></small></a>
                  </template>
                </td>

                <td>
                  <Tooltip content="На карте" placement="top" v-if="type.sharingEnable == 1 && car.dLatitude != '0.00000000' && car.dLongitude != '0.00000000'">
                    <a target="_blank" :href="`/map?device=${car.id}`"><i class="far fa-compass small-i"></i></a>
                  </Tooltip>
                </td>

                <td>
                  <template v-if="['1','12'].includes(car.status) && car.ses.defect.show == 1">
                    <Button :class="['btn btn-rounded btn-light', car.ses.defect.class]" :data-remote='`/give/photodrive/${car.ses.id}`'><i class='far fa-camera'></i></Button>
                  </template>
                </td>

                <td>
                  <template v-if="$auth.user.permissions.drive_compensation_create && ['1','12'].includes(car.status)">

                      <Tooltip content="Добавить компенсацию" placement="top">
                        <a data-target='#ModalDevice' :data-remote='`/give/addcompensation/${car.ses.id}`'><i class='far fa-plus orange-color'></i></a>
                      </Tooltip>

                      <Tooltip content="Компенсации" placement="top">
                        <a :data-remote='`/give/aboutcompensation/${car.ses.id}`'><span><b>{{ car.ses.compensation }}</b></span></a> <span class='unit'>₽</span>
                      </Tooltip>

                  </template>
                </td>




                <td>
                  <template v-if="$auth.user.permissions.delivery_allow && type.allowDelivery == 1">

                    <Tooltip content="Доставка включена" placement="top" v-if="car.devAllowDelivery == 1">
                      <i :data-id="car.id" class="deliveryOn fad fa-map-marked-alt orange-color"></i>
                    </Tooltip>

                    <Tooltip content="Доставка выключена" placement="top" v-else>
                      <i :data-id="car.id" class="deliveryOn fad fa-map gray-light-color"></i>
                    </Tooltip>

                  </template>
                </td>

                <td>
                    <Tooltip content="Изменить радиус доставки" placement="top" v-if="$auth.user.permissions.delivery_allow_radius && type.allowDelivery == 1 && car.devAllowDelivery == 1">
                      <a class="changerangelink" :data-remote="`/give/changeradiusdelivery/${car.id}`">
                        <b>{{ car.devDeliveryRange }} км</b>
                      </a>
                    </Tooltip>
                </td>

                <td>
                  <Tooltip content="Изменить время доставки" placement="top" v-if="$auth.user.permissions.delivery_allow_time && type.allowDelivery == 1 && car.devAllowDelivery == 1">
                    <a class="changerangelink" :data-remote="`/give/changeradiusdelivery/${car.id}`">
                      <b>{{ car.devDeliveryTime }} мин</b>
                    </a>
                  </Tooltip>
                </td>




                <td>




                  <template v-if="$auth.user.permissions.car_available && $auth.user.permissions.car_available_manager">
                    <Tooltip content="Доступ клиентам" placement="left" v-if="car.status == 0">
<!--                      car.status == 0 ? 'checked' : ''  -->
<!--                      /give/NotAvailable/${car.id}-->
                      <i-switch size="small" />
                    </Tooltip>

                    <Tooltip placement="top" v-else>
                      <template v-if="car.notavailable">
                        <i-switch size="small" />
                        <div slot="content" v-html='car.notavailable'></div>
                      </template>
                    </Tooltip>
                  </template>


                  <template v-if="$auth.user.permissions.car_available && !$auth.user.permissions.car_available_manager">
                    <Tooltip placement="left" v-if="car.status == 4">
                      <i class="fal fa-info-circle gray-color"></i>
                      <div slot="content" v-html="car.notavailable_manager"></div>
                    </Tooltip>
                  </template>

                  <template v-if="$auth.user.permissions.drive_service && ['1','12'].includes(car.status)">
                    <Tooltip :content="car.ses.isService == 1 ? 'Включен сервисный режим' : 'Отключен сервисный режим'" placement="left" v-if="car.status == 0">
                      <!--                      car.ses.isService == 1 ? 'checked' : ''  -->
                      <!--                      /give/NotAvailable/${car.id}-->
                      <i-switch size="small" />
                    </Tooltip>
                  </template>


                  <template v-if="$auth.user.permissions.drive_lock && ['1','12'].includes(car.status) && car.ses.isOk == 0">
                    <Tooltip content="Заблокировать" placement="left" v-if="car.ses.stop == 0">
<!--                      /give/lockondrive/${car.ses.id}?place=cars-->
                      <i class='fad fa-unlock-alt'></i>
                    </Tooltip>

                    <Tooltip content="Снять блокировку" placement="left" v-else>
<!--                      /give/lockoffdrive/${car.ses.id}?place=cars -->
                      <i class='fad fa-lock'></i>
                    </Tooltip>
                  </template>

                </td>

              </tr>

            </template> <!-- Авто -->
          </template> <!-- Тип авто -->
        </template> <!-- Категория -->

        </tbody>
      </table>
    </div>


    <!--  Инфо об авто -->
    <CarInfo :id="car_data.info.id" :show="car_data.info.show"></CarInfo>


  </div>
</template>


<script>
  import CarNumber from '@/components/CarNumber'
  import CarInfo from '@/components/CarInfo'

export default {
  middleware: ['auth', 'page'],
  components: {
    CarNumber,
    CarInfo
  },
  validate ({ params }) {
    return ['all', 'clients', 'service', 'not_available', 'free', 'owner'].includes(params.table)
  },
  head: {
    title: 'Парк автомобилей / VORON BLACK'
  },
  data () {
    return {
      tables: [],
      table: [],

      car_data: {
        info: {
          show: false,
          id: null,
        }
      },


    }
  },

  async asyncData({$axios, params, error}) {
      let response = await $axios.$get('/cars/getlist?active=' + params.table)
      return { tables: response.data.tables, table: response.data.tables[params.table] }
  },


  // async mounted() { //
  //   try {
  //     let response = await this.$axios.$get('/cars/getlist?active=' + this.$route.params.table)
  //     this.tables = response.data.tables
  //     this.table = this.tables[this.$route.params.table]
  //   } catch (error) {
  //     console.log(error)
  //   }
  //
  // },


}
</script>


<style lang="scss" scoped>
  .car_type_title {
    font-family: 'Proxima Nova Rg';
    font-weight: 600;
    font-size: 15px;
  }

  .cars-list .autonumber {
    cursor: pointer;
  }

  .car_status {
    width: 25px;
    height: 25px;
    text-align: center;
    line-height: 35px;
    background-color: #ccc;
    border-radius: 50%;
    border: 0px solid #ccc;
    box-sizing: border-box;

    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .car_status_red {
    background-color: rgba(234, 0, 7, 1);
    border-color: rgba(234, 0, 7, 1);
  }

  .car_status_green {
    background-color: rgba(31, 197, 10, 1);
    border-color: rgba(31, 197, 10, 1);
  }

  .car_status_yellow {
    background-color: rgba(254, 240, 10, 1);
    border-color: rgba(254, 240, 10, 1);
  }

  .car_status_black {
    background-color: rgba(0, 0, 0, 1);
    border-color: rgba(0, 0, 0, 1);
  }

  .car_status_middle {
    width: 35px;
    height: 35px;
  }

  .car_status_big {
    width: 50px;
    height: 50px;
  }

  .count_subs {
    width: 30px;
    height: 30px;
    line-height: 30px;
    color: #000;
    background: #ffc000;
    float: left;
    text-align: center;
    border-radius: 15px;
    font-weight: 500;
    cursor: default;
  }

  .car_model_title {
    font-family: 'Proxima Nova Lt';
    font-weight: 600;
    color: rgba(0,0,0,0.7);
    display: block;
  }



  .car_img_mini {
    background: #fff;
    border: 1px solid rgba(0,0,0,0.1);
    padding: 3px;
    width: 60px;
    height: auto;
    border-radius: 4px;
  }

  .cars-list i {
    font-size: 18px;
  }

  .orange-color {
    color: #ff8000;
    transition: 0.3s;
  }

  .orange-color:hover {
    color: #000;
  }

  .gray-color {
    color: rgba(0,0,0, 0.4);
  }

  .gray-light-color {
    color: rgba(0,0,0, 0.1);
  }

  .red-color {
    color: red;
  }

  .green-color {
    color: rgba(90,190,57, 1);
  }

  .car_type_title {
    font-weight: bold;
    font-size: 15px;
  }



  table tr td:first-child {
    border-radius: 10px 0 0 10px;
  }

  table tr td:last-child {
    border-radius: 0 10px 10px 0;
  }

  table tr td,
  table.table-borderless tr td {
    /*border-bottom: 3px solid #fff !important;*/
    /*border-top: 3px solid #fff !important;*/
  }




  table {
    border-collapse: separate;
    border-spacing: 0 6px;
  }


  .type-ses {
    padding: 10px;
    cursor: pointer;

    span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px rgba(0,0,0,0.2);
      width: 6px;
      height: 6px;
      display: block;
      background: rgba(0,0,0,0.2);
      border-radius: 100%;

      transition: all 200ms ease-in-out 0s;
    }
  }


  /*table tr:hover {*/
  /*  box-shadow: 0px 2px 10px rgba(154, 157, 168, 0.3);*/
  /*  transition: 0.3s;*/
  /*}*/







  .car-owner,
  .car-not_available {
    background: $blue_gray-50;

    td:first-child {
      border-left: 5px solid $blue_gray-100;
    }

    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $blue_gray-100;
      background: $blue_gray-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $blue_gray-300;
      background: $blue_gray-400;
    }
  }

  .car-debt {
    background: $red-50;

    td:first-child {
      border-left: 5px solid $red-100;
    }


    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $red-100;
      background: $red-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $red-300;
      background: $red-400;
    }
  }

  .car-paid_time {
    background: $green-50;

    td:first-child {
      border-left: 5px solid $green-100;
    }

    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $green-100;
      background: $green-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $green-300;
      background: $green-400;
    }
  }
  .car-service {
    background: $blue-50;

    td:first-child {
      border-left: 5px solid $blue-100;
    }

    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $blue-100;
      background: $blue-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $blue-300;
      background: $blue-400;
    }
  }

  .car-blocked {
    background: $orange-50;

    td:first-child {
      border-left: 5px solid $orange-100;
    }

    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $orange-100;
      background: $orange-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $orange-300;
      background: $orange-400;
    }
  }

  .car-active {
    background: $amber-50;

    td:first-child {
      border-left: 5px solid $amber-100;
    }

    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $amber-100;
      background: $amber-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $amber-300;
      background: $amber-400;
    }
  }

  .car-free {
    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $green-100;
      background: $green-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $green-300;
      background: $green-400;
    }
  }

  .car-booking {
    .type-ses span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $amber-100;
      background: $amber-200;
    }
    .type-ses:hover span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px $amber-300;
      background: $amber-400;
    }
  }

  .car-disabled {
    opacity: 0.5;
  }


</style>


