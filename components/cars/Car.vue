<template>
   <tr
      :class="['car-' + car.type_ses.name, (car.disabled == 1 ? 'car-disabled' : ''), ($store.getters['cars/getList'].includes(car.id) ? 'car-active' : '')]"
   >
      <td>
         <template v-if="type.first_car_id == car.id">
            <Tooltip content="Информация об авто" placement="top" :transfer="true">
               <img
                  @click="$emit('carInfo')"
                  class="car_img_mini pointer"
                  :src="`https://img.everent.me/${type.img}`"
                  alt="Изображение авто"
               />
            </Tooltip>
         </template>
      </td>
      <td class="titleline">
         <template v-if="type.first_car_id == car.id">
            <span class="car_model_title">{{ type.title }}</span>
            <span class="gray-color">{{ type.subtitle }}</span>
         </template>
      </td>

      <td>
         <template v-if="type.first_car_id == car.id">
            <Poptip trigger="hover">
               <span
                  :id="`popover-count-subs-${car.id}`"
                  v-if="type.subs_count > 0"
                  :class="['count_subs', (car.notifyDisable == 1 ? 'notify-opacity' : '')]"
               >{{ type.subs_count }}</span>

               <div slot="title">
                  <b>Подписчики</b>
               </div>
               <div slot="content">
                  <span v-html="type.subs"></span>
               </div>
            </Poptip>
         </template>
      </td>

      <td v-if="$can('cars/create')">
         <template v-if="type.first_car_id == car.id">
            <Tooltip content="Добавить авто" placement="top" :transfer="true">
               <a class="orange-color p-1" @click="$emit('carCreate')">
                  <i class="far fa-plus"></i>
               </a>
            </Tooltip>
         </template>
      </td>

      <td v-if="$can('cars/model_edit')">
         <template v-if="type.first_car_id == car.id">
            <Tooltip content="Настройка типа авто" placement="top" :transfer="true">
               <a :href="`/devices/edittype/${type.id}`">
                  <i class="fad fa-cog gray-color"></i>
               </a>
            </Tooltip>
         </template>
      </td>

      <td>
         <a
            @click="$store.dispatch('cars/changeSelected', {id: car.id, active: !$store.getters['cars/getList'].includes(car.id)})"
         >
            <!-- @click="car_choose" -->
            <CarNumber :number="car.number" />
         </a>
      </td>

      <td v-if="$can('cars/gallery_all')">
         <Tooltip content="Фото повреждений" placement="top" :transfer="true">
            <a target="_blank" :href="`/devices/gallerycarall/${car.id}`">
               <i
                  :class="['fad fa-camera', (car.count_defects == 0 ? 'gray-light-color' : 'gray-color')]"
               ></i>
            </a>
         </Tooltip>
      </td>

      <td v-if="$can('cars/problems')">
         <Tooltip content="Технические проблемы" placement="top" :transfer="true">
            <!-- :data-remote="`/give/deviceproblems/${car.id}`" -->
            <a @click="$emit('carProblems')">
               <i
                  :class="['fad fa-tools', (car.count_problems == 0 ? 'gray-light-color' : 'gray-color')]"
               ></i>
            </a>
         </Tooltip>
      </td>

      <td>
         <div v-if="car.parking.length != 0">
            <Tooltip placement="top" :transfer="true">
               <i class="fas fa-parking" style="color: #2929ff;"></i>
               <div slot="content">
                  На платной парковке
                  <br />
                  {{ car.parking.parking_id }} - {{ car.parking.price }} ₽/час
               </div>
            </Tooltip>

            <template v-if="car.parking.state == 'paid'">
               <Tooltip content="Оплачено" placement="top" :transfer="true">
                  <a
                     v-if="$can('cars/parking')"
                     :data-remote="`/give/parkingpayed/${car.parking.id}`"
                  >
                     <i class="fas fa-money-check-alt"></i>
                  </a>
                  <i v-else class="fal fa-money-check-alt"></i>
               </Tooltip>
            </template>

            <template v-if="car.parking.state == 'error'">
               <Tooltip content="Не оплачено" placement="top" :transfer="true">
                  <a
                     v-if="$can('cars/parking')"
                     :data-remote="`/give/errorparkingaction/${car.parking.id}`"
                  >
                     <i class="fa fa-ban red-color"></i>
                  </a>
                  <i v-else class="fal fa-ban red-color"></i>
               </Tooltip>
            </template>

            <Tooltip
               content="Заврешение оплаты"
               placement="top"
               :transfer="true"
               v-if="car.parking.state == 'need_stop'"
            >
               <i class="fal fa-clock gray-color"></i>
            </Tooltip>

            <Tooltip
               content="В процессе оплаты"
               placement="top"
               :transfer="true"
               v-if="!['paid', 'error', 'need_stop'].includes(car.parking.state)"
            >
               <i class="fad fa-clock gray-color"></i>
            </Tooltip>
         </div>
         <div v-else>
            <Tooltip content="Моспаркинг" placement="top" :transfer="true">
               <a
                  v-if="car.parkingType == 'allow_paid' && $can('cars/parking')"
                  :data-remote="`/give/gopay/${car.id}`"
               >
                  <i class="fas fa-parking gray-light-color"></i>
               </a>
            </Tooltip>
         </div>
      </td>

      <td>
         <Tooltip content="Нет данных по ОСАГО" placement="top" :transfer="true" v-if="!car.osago">
            <i class="fad fa-calendar-times gray-color"></i>
         </Tooltip>

         <Tooltip
            :content="`ОСАГО до ${car.osago.date}`"
            placement="top"
            :transfer="true"
            v-if="car.osago && car.osago.days_left < 7"
         >
            <i class="fad fa-calendar-times red-color"></i>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="Нет ни одного штрафа"
            placement="top"
            :transfer="true"
            v-if="car.penaltyTracking == 1"
         >
            <i v-if="car.count_fines == 0" class="fad fa-traffic-light orange-color"></i>
         </Tooltip>
         <Tooltip content="Штрафы не отслеживаются" placement="top" :transfer="true" v-else>
            <i class="fad fa-traffic-light red-color"></i>
         </Tooltip>
      </td>

      <td align="center">
         <Tooltip content="Свободно" placement="top" :transfer="true" v-if="car.status == 0">
            <div class="car_status car_status_green"></div>
         </Tooltip>

         <Tooltip
            content="Занято"
            placement="top"
            :transfer="true"
            v-if="['1','7','8','9','16','18'].includes(car.status)"
         >
            <div
               v-if="car.status == 1 && (($can('clients/info_client') && car.ses.isService == 0) || ($can('clients/info_service') && car.ses.isService == 1) || ($can('clients/info_owner') && car.ses.isService == 2))"
               :data-orientation="car.ses.client.selfie_turn"
               class="car_status car_status_big car_status_black"
               style="тут"
            ></div>
            <!-- :style="`background-image: url(/give/resizeimage?fn=${car.ses.client.selfie})`" -->
            <div v-else class="car_status car_status_red"></div>
         </Tooltip>

         <Tooltip content="Недоступно" placement="top" :transfer="true" v-if="car.status == 4">
            <div class="car_status car_status_red"></div>
         </Tooltip>

         <Tooltip
            content="В резерве"
            placement="top"
            :transfer="true"
            v-if="['2','3','5','6','10','11','12','8','13','14','17'].includes(car.status)"
         >
            <div class="car_status car_status_yellow car_status_middle"></div>
         </Tooltip>
      </td>

      <!--                                        <td>-->

      <!--                                            <Tooltip :content="car.type_ses.text" placement="top" :transfer="true" v-if="car.type_ses">-->
      <!--                                                <div class="type-ses"><span></span></div>-->
      <!--                                            </Tooltip>-->

      <!--                                            <Tooltip content="Отключенный авто" placement="top" :transfer="true" v-if="car.disabled == 1">-->
      <!--                                                <div class="type-ses"><span></span></div>-->
      <!--                                            </Tooltip>-->

      <!--                                        </td>-->

      <td>
         <Tooltip
            content="Информация"
            placement="top"
            :transfer="true"
            v-if="['1','12'].includes(car.status) && (($can('clients/info_client') && car.ses.isService == 0) || ($can('clients/info_service') && car.ses.isService == 1) || ($can('clients/info_owner') && car.ses.isService == 2))"
         >
            <Button
               @click="$emit('clientInfo', car.ses.client.id, car.ses.id)"
               class="ivu-btn-gray"
               shape="circle"
               :data-remote="`/give/infoclient/${car.ses.client.id}?mode=park&ses=${car.ses.id}`"
            >
               <Icon custom="fad fa-address-card" />
            </Button>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="История поездки"
            placement="top"
            :transfer="true"
            v-if="['1','12'].includes(car.status)"
         >
            <!--                    "`/give/historydrive/${car.ses.id}?mode=park`"-->
            <Button class="ivu-btn-gray" shape="circle">
               <Icon custom="fad fa-clock" />
            </Button>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="Управление"
            placement="top"
            :transfer="true"
            v-if="['1','12'].includes(car.status)"
         >
            <Button
               class="ivu-btn-gray"
               shape="circle"
               v-if="type.sharingEnable == 1 && $can('trips/action')"
               :data-remote="`/give/actionses/${car.ses.id}`"
            >
               <Icon custom="fad fa-car-alt" />
            </Button>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="Трек поездки"
            placement="top"
            :transfer="true"
            v-if="car.status == 1 && $can('trips/track')"
         >
            <a target="_black" :href="`/devices/track/${car.ses.id}`">
               <i class="fad fa-route gray-color"></i>
            </a>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="Скорость и обороты"
            placement="top"
            :transfer="true"
            v-if="car.status == 1 && $can('trips/speed')"
         >
            <a :data-remote="`/give/speeddrive/${car.ses.id}`">
               <i class="fad fa-tachometer-alt gray-color"></i>
            </a>
         </Tooltip>
      </td>

      <td>
         <template
            v-if="['1','12'].includes(car.status) && car.ses.client.sos == 1 && $can('cars/sos')"
         >
            <a
               :href="`/devices/sos/${car.ses.client.id}`"
               type="button"
               class="btn btn-round btn-danger"
            >
               <small>
                  <b>SOS</b>
               </small>
            </a>
         </template>
      </td>

      <td>
         <Tooltip
            content="На карте"
            placement="top"
            :transfer="true"
            v-if="type.sharingEnable == 1 && car.dLatitude != '0.00000000' && car.dLongitude != '0.00000000'"
         >
            <!--                                          :data-remote="`/give/infoclient/${car.ses.client.id}?mode=park&ses=${car.ses.id}`"-->
            <Button
               class="ivu-btn-gray"
               shape="circle"
               target="_blank"
               :to="`/map?device=${car.id}`"
            >
               <Icon custom="fad fa-compass" />
            </Button>
         </Tooltip>
      </td>

      <td>
         <template v-if="['1','12'].includes(car.status) && car.ses.defect.show == 1">
            <Button
               shape="circle"
               :class="['ivu-btn-gray', car.ses.defect.class]"
               :data-remote="`/give/photodrive/${car.ses.id}`"
            >
               <Icon custom="fad fa-camera" />
            </Button>
         </template>
      </td>

      <td>
         <template v-if="$can('trips/compensation_create') && ['1','12'].includes(car.status)">
            <Tooltip content="Добавить компенсацию" placement="top" :transfer="true">
               <a @click="$emit('tripAddCompensation', car.ses.id)">
                  <Icon custom="far fa-plus orange-color" />
               </a>
            </Tooltip>

            <Tooltip content="Компенсации" placement="top" :transfer="true">
               <a @click="$emit('tripCompensations', car.ses.id)">
                  <span>
                     <b>{{ car.ses.compensation }}</b>
                  </span>
               </a>
               <span class="unit">₽</span>
            </Tooltip>
         </template>
      </td>

      <td>
         <template v-if="$can('deliveries/allow') && type.allowDelivery == 1">
            <Tooltip
               content="Доставка включена"
               placement="top"
               :transfer="true"
               v-if="car.devAllowDelivery == 1"
            >
               <a class="p-2" @click="deliveryOn">
                  <i class="fad fa-map-marked-alt orange-color" />
               </a>
            </Tooltip>

            <Tooltip content="Доставка выключена" placement="top" :transfer="true" v-else>
               <a class="p-2" @click="deliveryOn">
                  <i class="fad fa-map gray-light-color" />
               </a>
            </Tooltip>
         </template>
      </td>

      <td>
         <Tooltip
            content="Изменить радиус доставки"
            placement="top"
            :transfer="true"
            v-if="$can('deliveries/allow_radius') && type.allowDelivery == 1 && car.devAllowDelivery == 1"
         >
            <!-- class="changerangelink" :data-remote="`/give/changeradiusdelivery/${car.id}`" -->
            <a @click="$emit('carDelivery')">
               <b>{{ car.devDeliveryRange }} км</b>
            </a>
         </Tooltip>
      </td>

      <td>
         <Tooltip
            content="Изменить время доставки"
            placement="top"
            :transfer="true"
            v-if="$can('deliveries/allow_time') && type.allowDelivery == 1 && car.devAllowDelivery == 1"
         >
            <!-- class="changerangelink" :data-remote="`/give/changeradiusdelivery/${car.id}`" -->
            <a @click="$emit('carDelivery')">
               <b>{{ car.devDeliveryTime }} мин</b>
            </a>
         </Tooltip>
      </td>

      <td>
         <template v-if="$can('cars/available') && $can('cars/available_manager')">
            <Tooltip
               content="Доступ клиентам"
               placement="left"
               :transfer="true"
               v-if="car.status == 0"
            >
               <!--                      car.status == 0 ? 'checked' : ''  -->
               <!--                      /give/NotAvailable/${car.id}-->
               <i-switch
                  size="small"
                  :value="car.status == 0 ? true : false"
                  @on-change="available"
               />
            </Tooltip>

            <Tooltip placement="top" :transfer="true" v-else>
               <template v-if="car.notavailable">
                  <i-switch size="small" />
                  <div slot="content" v-html="car.notavailable"></div>
               </template>
            </Tooltip>
         </template>

         <template v-if="$can('cars/available') && !$can('cars/available_manager')">
            <Tooltip placement="left" :transfer="true" v-if="car.status == 4">
               <i class="fal fa-info-circle gray-color"></i>
               <div slot="content" v-html="car.notavailable_manager"></div>
            </Tooltip>
         </template>

         <template v-if="$can('trips/service') && ['1','12'].includes(car.status)">
            <Tooltip
               :content="car.ses.isService == 1 ? 'Включен сервисный режим' : 'Отключен сервисный режим'"
               placement="left"
               :transfer="true"
               v-if="car.status == 0"
            >
               <!--                      car.ses.isService == 1 ? 'checked' : ''  -->
               <!--                      /give/NotAvailable/${car.id}-->
               <i-switch size="small" />
            </Tooltip>
         </template>

         <template
            v-if="$can('trips/lock') && ['1','12'].includes(car.status) && car.ses.isOk == 0"
         >
            <Tooltip
               content="Заблокировать"
               placement="top"
               :transfer="true"
               v-if="car.ses.stop == 0"
            >
               <a @click="$emit('tripBlock', car.ses.id, 'on')" class="p-1">
                  <i class="fad fa-unlock-alt"></i>
               </a>
            </Tooltip>

            <Tooltip content="Снять блокировку" placement="top" :transfer="true" v-else>
               <a @click="$emit('tripBlock', car.ses.id, 'off')" class="p-1">
                  <Icon custom="fad fa-lock" />
               </a>
            </Tooltip>
         </template>
      </td>
   </tr>
</template>

<script>
import CarNumber from "@/components/cars/Number";

export default {
   name: "Car",

   props: ["car", "type"],

   components: {
      CarNumber,
   },
   data() {
      return {
         tables: [],
         table: [],

         modal: {
            car: {
               // info: false,
               create: false,
            },
         },
      };
   },

   methods: {
      async deliveryOn() {
         let notify_title =
            this.car.devAllowDelivery == 1
               ? "Отключение доставки"
               : "Включение доставки";

         try {
            await this.$axios.$post("/cars/delivery_toggle/" + this.car.id, {
               progress: true,
            });

            this.$Notice.success({
               title: notify_title,
               desc: "Успешно",
            });

            this.$emit("carsRefresh");
         } catch (error) {
            this.$Notice.error({
               title: notify_title,
               desc: error.response.data.message,
            });
         }
      },

      available(val) {
         // console.log(val);

         let action = this.car.status == 0 ? "off" : "on";
         this.$emit("carAvailable", this.car.ses.id, action);
      },
   },
};
</script>

<style lang="scss" scoped>
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
   @include font-medium();
   cursor: default;
}

.car_model_title {
   @include font-medium();

   color: rgba(0, 0, 0, 0.7);
   display: block;
}

.car_img_mini {
   background: #fff;
   border: 1px solid $gray-300;
   padding: 3px;
   width: 60px;
   height: auto;
   border-radius: 4px;
   transition: all 0.3s ease;
}

.car_img_mini:hover {
   border-color: $gray-400;
}

.cars-list i {
   font-size: 18px;
}

.car_type_title {
   @include font-bold();
   font-size: 15px;
}

table tr td:first-child {
   // border-radius: 10px 0 0 10px;
   border-radius: 0;
}

table tr td:last-child {
   // border-radius: 0 10px 10px 0;
   border-radius: 0;
}

.type-ses {
   padding: 10px;
   cursor: pointer;

   span {
      box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px rgba(0, 0, 0, 0.2);
      width: 6px;
      height: 6px;
      display: block;
      background: rgba(0, 0, 0, 0.2);
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

   /*td:first-child {
        border-left: 5px solid $blue_gray-100;
    }*/

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

   /*td:first-child {
        border-left: 5px solid $red-100;
    }*/

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

   /*td:first-child {
        border-left: 5px solid $green-100;
    }*/

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

   /*td:first-child {
        border-left: 5px solid $blue-100;
    }*/

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

   /*td:first-child {
        border-left: 5px solid $orange-100;
    }*/

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

   /*td:first-child {
        border-left: 5px solid $amber-100;
    }*/

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
