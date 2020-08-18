<template>
   <div class="layout">
      <transition name="fade">
         <div
            class="sidebar-mask"
            v-if="isCollapsed"
            @click="$store.dispatch('sidebar/toggleCollapse')"
         ></div>
      </transition>

      <div :class="['content-sidebar']">
         <div
            :class="['sidebar-wrapper', (isCollapsed ? 'sidebar-fixed' : ''), hoverClass]"
            @mouseenter="hoverClass='sidebar-hover'"
            @mouseleave="hoverClass=''"
         >
            <div class="logo-sidebar">
               <img src="~/assets/images/logo.png" alt />
            </div>

            <MainMenu :cl="[(isCollapsed ? 'sidebar-fixed' : ''), hoverClass]" />

            <!-- <div class="sidebar-trigger">
               <a
                  :class="[(isCollapsed ? 'active' : '')]"
                  @click="$store.dispatch('sidebar/toggleCollapse')"
               >
                  <i :class="['', 'fad', (isCollapsed ? 'fa-chevron-left' : 'fa-chevron-right')]"></i>
               </a>
            </div>-->
         </div>

         <div
            :class="['sidebar-trigger', (isCollapsed ? 'active' : '')]"
            @click="$store.dispatch('sidebar/toggleCollapse')"
         >
            <i :class="['', 'fal', (isCollapsed ? 'fa-angle-left' : 'fa-angle-right')]"></i>
         </div>
      </div>
      <div :class="['content-wrapper', (isCollapsed ? 'content-wrapper-reduced' : '')]">
         <div class="content-inside">
            <Affix :offset-top="0">
               <div class="content-navbar">
                  <Top />
               </div>
            </Affix>

            <div class="router-view">
               <Tags />
               <nuxt />
            </div>
         </div>
      </div>
   </div>
</template>


<script>
import { mapGetters } from "vuex";

import MainMenu from "@/components/MainMenu";
import Top from "@/components/Top";

import Tags from "@/components/tags/Tags";

export default {
   components: {
      MainMenu,
      Top,
      Tags
   },
   data() {
      return {
         hoverClass: ""
      };
   },

   computed: {
      ...mapGetters({
         isCollapsed: "sidebar/isCollapsed"
      })
   },

   created: function() {
      this.$store.dispatch("sidebar/getCollapse");
      this.$store.dispatch("cars/getList");
   },
   methods: {}
};
</script>


<style lang="scss" scoped>
.sidebar-mask {
   position: fixed;
   background: rgba(0, 0, 0, 0.6);
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   width: 100%;
   height: 100%;
   z-index: 1000;

   display: none !important;
}

.avatar-profile {
   background: $orange-100;
   color: $orange-800;
   font-size: 10px;
}

.content-sidebar {
   box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.05);
   background: $white;

   position: fixed;
   height: 100vh;
   top: 0;
   z-index: 1015;
   // width: 100%;
   // max-width: 80px;
   left: 0;

   // overflow: hidden;

   .logo-sidebar {
      margin: 15px 0 30px;
      padding: 0 15px 0 25px;

      img {
         width: 100%;
         max-width: 30px;
      }
   }

   .sidebar-wrapper {
      background: $white;
      float: left;
      position: relative;
      // width: 100%;
      height: 100%;
      z-index: 10;

      width: 80px;

      transition: all 0.25s ease;

      // border: 1px solid green;
   }

   .sidebar-trigger {
      box-shadow: 5px 0 9px 0 rgba(0, 0, 0, 0.02);
      cursor: pointer;
      position: absolute;
      z-index: 5;
      bottom: 50px;
      left: 100%;
      margin-left: -19px;

      width: 40px;
      height: 68px;
      line-height: 70px;

      text-align: right;
      padding-right: 7px;

      background: $white;

      border-bottom-right-radius: 15px;
      border-top-right-radius: 15px;

      color: $black;
      font-size: 1.5rem;

      transition: all 0.3s ease;

      i {
         // color: $gray-800;
         color: $amber-800;
      }
   }

   .sidebar-trigger:hover {
      background: $amber-50;
      box-shadow: 5px 0 9px 0 rgba(0, 0, 0, 0.04);
      // margin-right: 5px;
      transform: translateX(5px);

      i {
         color: $amber-700;
      }
   }
}

.sidebar-wrapper:hover,
.content-sidebar .sidebar-wrapper.sidebar-fixed {
   // max-width: $sidebar-menu-width;
   width: $sidebar-menu-width;
}

.content-wrapper {
   height: 100vh;
   transition: margin-left 0.5s;
   margin-left: 80px;
}

.content-wrapper-reduced {
   margin-left: $sidebar-menu-width;
}

.content-navbar {
   background: $white;
   border-radius: 0.5rem;
   padding: 0.8rem 1.5rem;
   transition: all 0.5s;
   width: 100%;
   box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.05);

   margin-bottom: 2.2rem;
}

.content-navbar:hover {
   box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.09);
}

.content-inside {
   padding: 1.3rem 2.2rem;
}

.router-view {
}

@media (max-width: 576px) {
   .content-sidebar {
      right: 100%;
      left: auto;
   }

   .content-sidebar.content-sidebar-fixed {
      max-width: 240px !important;
      left: 0;
      right: auto;
   }

   .content-wrapper {
      margin-left: 0;
   }

   .sidebar-trigger {
      background: $amber-100;

      i {
         color: $amber-800;
      }
   }

   .sidebar-trigger.active {
      background: $white;

      i {
         color: $gray-800;
      }
   }

   .sidebar-mask {
      position: fixed;
      background: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
      height: 100%;
      z-index: 1000;

      display: block !important;
   }
}
</style>