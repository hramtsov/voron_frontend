<template>
   <Modal v-model="show" :title="title" width="700" :footer-hide="true">
      <!-- {{ value }} -->
      <!-- <br /> -->

      <!-- {{ ses }} -->
      <!-- {{ client }} -->

      <!-- <swiper class="swiper" :options="swiperOption">
         <swiper-slide>Slide 1</swiper-slide>
         <swiper-slide>Slide 2</swiper-slide>
         <swiper-slide>Slide 3</swiper-slide>
         <swiper-slide>Slide 4</swiper-slide>
         <swiper-slide>Slide 5</swiper-slide>
         <swiper-slide>Slide 6</swiper-slide>
         <swiper-slide>Slide 7</swiper-slide>
         <swiper-slide>Slide 8</swiper-slide>
         <swiper-slide>Slide 9</swiper-slide>
         <swiper-slide>Slide 10</swiper-slide>
         <div class="swiper-pagination" slot="pagination"></div>
      </swiper>-->

      <MessagesHistory v-model="modal.messages.history" />
      <MessagesSend v-model="modal.messages.send" type="manual" mode="client" />
      <Deposits v-model="modal.deposits" />

      <Row>
         <Col :md="24">
            <Row :gutter="grid.gutter">
               <Col>
                  <!-- href="/clients/galleryselfie/c<?=$client['id']?>" -->

                  <template v-if="$can('clients/selfie_history')">
                     <Button size="default">История селфи</Button>
                  </template>

                  <!-- /give/historymessage/<?=$client['id']?> -->
                  <template v-if="$can('clients/messages_history')">
                     <Tooltip content="История сообщений" placement="top" :transfer="true">
                        <Button size="default" @click="modal.messages.history = client.id">
                           <i class="fad fa-comments-alt"></i>
                        </Button>
                     </Tooltip>
                  </template>

                  <!-- /give/message/<?=$client['id']?>?type=manual/ -->
                  <template v-if="$can('clients/messages_send')">
                     <Tooltip content="Отправить SMS/PUSH" placement="top" :transfer="true">
                        <Button size="default" @click="modal.messages.send = client.id">
                           <i class="fad fa-paper-plane"></i>
                        </Button>
                     </Tooltip>
                  </template>

                  <template
                     v-if="$can('clients/link_verification') && client.sumsubid && mode == 'clients'"
                  >
                     <Tooltip content="Ссылка на проверку" placement="top" :transfer="true">
                        <Button
                           size="default"
                           target="_blank"
                           :to="`https://api.sumsub.com/checkus#/applicant/${client.sumsubid}`"
                        >
                           <i class="fad fa-robot"></i>
                        </Button>
                     </Tooltip>
                  </template>
               </Col>
            </Row>

            <h3 class="mt-4 mb-3">Основные сведения</h3>

            <Row :gutter="grid.gutter">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">ФИО</Col>
               <Col :xs="grid.value.xs" :sm="grid.value.sm" class="list-value">
                  {{ client.fio }}
                  <nobr v-if="client.blacklist == 1">
                     <i
                        data-toggle="tooltip"
                        data-placement="top"
                        title
                        class="far fa-angry"
                        style="color: red;"
                        data-original-title="В черном списке"
                     ></i>
                  </nobr>
               </Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/device') && ['clients', 'cars'].includes(mode)"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Устройство</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.device }}</Col>
            </Row>

            <h3 class="mt-4 mb-3" v-if="$can('clients/finance')">Финансы</h3>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/finance') && ['clients', 'cars'].includes(mode)"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Депозит</Col>
               <Col :xs="12" :sm="14" class="list-value">
                  <template v-if="client.deposit">
                     <template v-if="client.deposit.type == 'unlimited'">
                        <Tooltip :content="client.deposit.text" placement="top" :transfer="true">
                           <!-- data-remote='/give/aboutdeposits/".$id."' -->
                           <a @click="modal.deposits = client.id">
                              <i class="fas fa-crown gray-color"></i>
                           </a>
                        </Tooltip>
                     </template>

                     <template v-else>
                        <Tooltip :content="client.deposit.text" placement="top" :transfer="true">
                           <a
                              @click="modal.deposits = client.id"
                              :class="[
										'number',
										(client.deposit.type == 'blocked'  ? 'blue-color' : ''),
										(client.deposit.type == 'error'  ? 'red-color' : ''),
										(client.deposit.type == 'queued_exit'  ? 'green-color' : ''),
										(!['queued_exit', 'blocked', 'error', 'unlimited'].includes(client.deposit.type) ? 'black-color' : '')
										]"
                           >
                              <b>{{ client.deposit.amount | number }}</b>
                           </a>
                           <span class="unit">₽</span>
                        </Tooltip>
                     </template>
                  </template>
                  <template v-else>
                     <i class="fas fa-ellipsis-h"></i>
                  </template>
               </Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/finance') && ['clients', 'cars'].includes(mode) && client.dolg != 0"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Долг</Col>
               <Col :xs="12" :sm="14" class="list-value">
                  <!-- /give/aboutdebt/<?=$client['id']?> -->
                  <Tooltip content="История долгов" placement="top" :transfer="true">
                     <a>
                        <span class="red-color">
                           <b>{{ client.dolg | number }}</b>
                        </span>
                        <span class="rub-icon red-color">₽</span>
                     </a>
                  </Tooltip>
               </Col>
            </Row>

            <h3 class="mt-4 mb-3" v-if="$can('clients/contacts')">Контакты</h3>

            <Row :gutter="grid.gutter" v-if="$can('clients/contacts')">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Телефон</Col>
               <Col :xs="12" :sm="14" class="list-value">
                  <a :href="`tel:+7${client.phoneNumber}`">{{ client.phoneFormat }}</a>
               </Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/contacts') && ['clients', 'cars'].includes(mode) && client.emails"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Почта</Col>
               <Col :xs="12" :sm="14" class="list-value">
                  <template v-for="(email, key) in client.emails">
                     <a :href="`mailto:${email}`" :key="key">{{ email }}</a>
                     <br />
                  </template>
               </Col>
            </Row>

            <h3
               class="mt-4 mb-3"
               v-if="$can('clients/passport') || ($can('clients/general') && client.birthday)"
            >Паспорт</h3>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/passport') && ['cars', 'registers'].includes(mode)"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Серия и номер</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.passport | passport_number }}</Col>
            </Row>

            <Row :gutter="grid.gutter" v-if="$can('clients/passport') && ['cars'].includes(mode)">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Выдан</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.passportPlace }}</Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/passport') && ['cars', 'registers'].includes(mode)"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Код подразделения</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.passportCode }}</Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/passport') && client.passportDate && ['cars', 'registers'].includes(mode)"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Дата выдачи</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.passportDate | date_d }}</Col>
            </Row>

            <Row :gutter="grid.gutter" v-if="$can('clients/general') && client.birthday">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Дата рождения</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.birthday | date_d }}</Col>
            </Row>

            <Row :gutter="grid.gutter" v-if="$can('clients/passport')">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Адрес регистрации</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.region }}</Col>
            </Row>

            <h3
               class="mt-4 mb-3"
               v-if="$can('clients/general') || $can('clients/driver')"
            >Водительские права</h3>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/driver') && ['cars', 'registers'].includes(mode) && client.driverLicenseNumber"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Серия и номер</Col>
               <Col
                  :xs="12"
                  :sm="14"
                  class="list-value"
               >{{ client.driverLicenseNumber | driver_number }}</Col>
            </Row>

            <Row
               :gutter="grid.gutter"
               v-if="$can('clients/driver') && ['cars', 'registers'].includes(mode) && client.driverLicenseDate"
            >
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">Дата выдачи</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.driverLicenseDate | date_d }}</Col>
            </Row>

            <Row :gutter="grid.gutter" v-if="$can('clients/general')">
               <Col :xs="grid.label.xs" :sm="grid.label.sm" class="list-label">С какого года стаж</Col>
               <Col :xs="12" :sm="14" class="list-value">{{ client.driverExperience }}</Col>
            </Row>
         </Col>
      </Row>
   </Modal>
</template>


<script>
import MessagesHistory from "@/components/clients/MessagesHistory";
import MessagesSend from "@/components/clients/MessagesSend";
import Deposits from "@/components/clients/Deposits";

export default {
   props: ["value", "ses", "mode"],
   data() {
      return {
         show: false,
         title: "Информация о клиенте",
         client: [],

         modal: {
            messages: {
               history: null,
               send: null
            },
            deposits: null
         },

         grid: {
            label: {
               sm: 8,
               xs: 12
            },
            value: {
               sm: 16,
               xs: 12
            },
            gutter: 30
         }

         // swiperOption: {
         //    slidesPerView: "auto",
         //    spaceBetween: 30,
         //    pagination: {
         //       el: ".swiper-pagination",
         //       clickable: true
         //    }
         // }
      };
   },
   components: {
      MessagesHistory,
      MessagesSend,
      Deposits
   },

   watch: {
      value: function(id) {
         if (id !== null) this.load(id);
      },
      show: function(val) {
         if (!val) this.$emit("input", null);
      }
   },

   methods: {
      async load(id) {
         let response = await this.$axios.$get("/clients/info/" + id, {
            progress: false
         });
         this.client = response.data;
         // this.title = this.client.fio;
         this.show = true;
      }

      // messages_history(id) {
      //    this.modal.messages = id;
      // }
   }
};
</script>


<style lang="scss" scoped>
.swiper-slide {
   width: 80%;
}
.swiper-slide:nth-child(2n) {
   width: 60%;
}
.swiper-slide:nth-child(3n) {
   width: 40%;
}
</style>
