<template>
   <ul :class="['main-menu', cl]">
      <li v-for="(item, key) in menu" v-cloak>
         <nuxt-link :to="item.link" active-class="active" :exact="key == 'main'">
            <i :class="['fad', item.icon]"></i>
            <span class="truncate">{{ item.text }}</span>
         </nuxt-link>
      </li>
   </ul>
</template>




<script>
export default {
   props: ["cl"],
   data() {
      return {
         menu: {},
      };
   },

   created: function () {
      this.generate_menu();
   },

   methods: {
      generate_menu() {
         this.menu["main"] = {
            text: "Главная",
            icon: "fa-home-lg-alt",
            link: "/",
         };

         if (this.$can("cars/section")) {
            this.menu["cars-table"] = {
               text: "Парк авто",
               icon: "fa-cars",
               link: "/cars",
            };
         }

         if (this.$can("clients/section")) {
            this.menu["clients"] = {
               text: "Клиенты",
               icon: "fa-users-crown",
               link: "/clients",
            };
         }

         if (this.$can("trips/section")) {
            this.menu["trips"] = {
               text: "Поездки",
               icon: "fa-pennant",
               link: "/trips",
            };
         }

         if (this.$can("map/section")) {
            this.menu["map"] = {
               text: "Карта",
               icon: "fa-map-marked-alt",
               link: "/map",
            };
         }

         if (this.$can("deliveries/section")) {
            this.menu["deliveries"] = {
               text: "Заказы",
               icon: "fa-map-marker-alt",
               link: "/deliveries",
            };
         }
         //
         //
         // if (this.$auth.user.permissions['wash_page']) {
         //     this.menu['wash'] = {
         //         'text': 'Мойки',
         //         'icon': 'fad fa-shower',
         //         'link': '/wash',
         //     }
         // }
         //
         if (this.$can("statistics/section")) {
            this.menu["statistic"] = {
               text: "Статистика",
               icon: "fad fa-chart-pie",
               link: "/statistics",
            };
         }
         //
         // if (this.$auth.user.permissions['reg_page']) {
         //     this.menu['registers'] = {
         //         'text': 'Регистрации',
         //         'icon': 'fad fa-address-card',
         //         'link': '/registers',
         //     }
         // }
         //
         // if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['zp_page'] && this.$auth.user.profile.phone.length == 10) {
         //     this.menu['check'] = {
         //         'text': 'ЗП',
         //         'icon': 'fad fa-money-check-alt',
         //         'link': '/check',
         //     }
         // }
         //
         // if (this.$auth.user.permissions['bound_no'] && this.$auth.user.permissions['schedule_page']) {
         //     this.menu['schedule'] = {
         //         'text': 'График',
         //         'icon': 'fad fa-calendar-alt',
         //         'link': '/schedule',
         //     }
         // }

         if (this.$can("fines/section")) {
            this.menu["fines"] = {
               text: "Штрафы",
               icon: "fa-traffic-light",
               link: "/fines",
            };
         }

         // if (this.$auth.user.permissions['partner_page'] && (this.$auth.user.permissions['bound_group'] || this.$auth.user.permissions['bound_no'])) {
         //     this.menu['partners'] = {
         //         'text': 'Партнеры',
         //         'icon': 'fad fa-briefcase',
         //         'link': '/partners',
         //     }
         // }
         //
         // if (this.$auth.user.permissions['partner_page'] && this.$auth.user.permissions['bound_partner']) {
         //     this.menu['partner'] = {
         //         'text': 'Партнер',
         //         'icon': 'fad fa-briefcase',
         //         'link': '/partner',
         //     }
         // }

         // if (this.$auth.user.permissions['driver_page']) {
         //     this.menu['drivers'] = {
         //         'text': 'Сервисники',
         //         'icon': 'fad fa-bolt',
         //         'link': '/drivers',
         //     }
         // }

         if (this.$can("managers/section")) {
            this.menu["managers"] = {
               text: "Менеджеры",
               icon: "fa-user-friends",
               link: "/managers",
            };
         }

         if (this.$can("categories/section")) {
            this.menu["categories"] = {
               text: "Категории",
               icon: "fa-list",
               link: "/categories",
            };
         }

         if (this.$can("spam/section")) {
            this.menu["spam"] = {
               text: "Спам",
               icon: "fa-paper-plane",
               link: "/spam",
            };
         }

         if (this.$can("roles/section")) {
            this.menu["roles"] = {
               text: "Права доступа",
               icon: "fa-user-shield",
               link: "/roles",
            };
         }

         this.menu["guide"] = {
            text: "Гайдлайн",
            icon: "fa-palette",
            link: "/guide",
         };
      },
   },
};
</script>


<style lang="scss" scoped>
ul.main-menu {
   li {
      padding: 0 15px;

      a {
         border-radius: 4px;
         padding: 8px 14px;
         display: flex;
         align-items: center;
         color: $black;
         font-size: 15px;
         @include font-medium();

         i {
            color: $gray-500; // 800
            text-align: center;
            width: 22px;
            line-height: 22px;
            min-width: 22px;
            font-size: 16px;
            transition: all 0.25s ease;
         }

         .truncate {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;

            margin-left: 1rem;
            display: none;
         }
      }

      a:not(.active):hover {
         transform: translateX(5px);
         transition: transform 0.25s ease;
      }

      a.active {
         background: $amber-100 !important;

         i {
            color: $amber-800 !important;
            font-weight: 600 !important;
         }
      }
   }
}

ul.main-menu.sidebar-fixed,
ul.main-menu.sidebar-hover {
   li {
      a {
         i {
            // color: $gray-400;
            // color: $amber-800 !important;
         }

         .truncate {
            display: inline-block;
         }
      }
   }
}

@media (max-width: 576px) {
   ul.main-menu {
      li {
         a {
            i {
               // color: $gray-400;
            }

            .truncate {
               display: inline-block;
            }
         }
      }
   }
}
</style>
