<template>
    <div>
        <PageHeader title="Парк автомобилей" icon="fad fa-cars">
        </PageHeader>


      <CarInfo v-model="modal.car.info" />
      <CarCreate v-model="modal.car.create" @carsRefresh="load" />


        <div class="card-box">

              <div class="tabs-cars">
                  <template v-for="(category, index) in tables" v-if="category.count_cars > 0">
                      <nuxt-link :to="(index == 'connected' ? '/cars' : `/cars/${index}`)" :class="[( index == $route.params.table ? 'active' : '' )]">
                          <div class="tab-title">{{ category.title }} <span class="count-cars">{{ category.count_cars }}</span></div>
                      </nuxt-link>
                  </template>
              </div>


            <div class="table-responsive p-4">
                <table class="table	cars-list  table-sm table-borderless">
                    <tbody>

                    <template v-for="(category, category_id) in table.categories">

                        <tr>
                            <td class="car_type_title" colspan='30'>{{ category.title }}</td>
                        </tr>

                        <template v-for="(type, type_id) in category.types">
                            <template v-for="(car, car_id) in type.cars">

                                <Car :type="type" :car="car" @carInfo="car_info(car_id)" @carCreate="car_create(type_id)" />

                            </template> <!-- Авто -->
                        </template> <!-- Тип авто -->
                    </template> <!-- Категория -->

                    </tbody>
                </table>
            </div>
        </div>


    </div>
</template>


<script>
  import Car from '@/components/cars/Car'
  import CarInfo from '@/components/cars/Info2'
  import CarCreate from '@/components/cars/Create'

    export default {
        middleware: ['auth', 'page'],
        components: {
          Car,
          CarInfo,
          CarCreate
        },
        validate({params}) {
            if (params.table === undefined) {
              params.table = 'connected'
              return true
            }
            return ['connected', 'clients', 'service', 'not_available', 'free', 'owner', 'disabled'].includes(params.table)
        },
        head: {
            title: 'Парк автомобилей / VORON BLACK'
        },
        data() {
            return {

                process: {
                  polling: null,
                  time: 10000,
                },

                tables: [],
                table: [],


                modal: {
                  car: {
                    info: null,
                    create: null,
                  },
                },

            }
        },

        async asyncData({$axios, params, error}) {
            let response = await $axios.$get('/cars/getlist?active=' + params.table)
            return {tables: response.data.tables, table: response.data.tables[params.table]}
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


      created() {
        this.pollData()
      },
      beforeDestroy() {
        clearInterval(this.process.polling)
      },

      methods: {
        pollData() {
          this.process.polling = setInterval(() => {
            this.load()
          }, this.process.time)
        },

        async load() {
          try {
            console.log(this.$route.params.table)
            let response = await this.$axios.$get('/cars/getlist?active=' + this.$route.params.table, {
              progress: false
            })

            this.tables = response.data.tables
            this.table = this.tables[this.$route.params.table]

          } catch (error) {
            this.$Notice.error({
              title: 'Ошибка обновления',
            });
          }
        },

        car_info(id) {
          this.modal.car.info = id
        },
        car_create(model) {
          this.modal.car.create = model
        },

      }


    }
</script>


<style lang="scss" scoped>
    .car_type_title {
        @include font-bold();
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
        border: 1px solid rgba(0, 0, 0, 0.1);
        padding: 3px;
        width: 60px;
        height: auto;
        border-radius: 4px;
    }

    .cars-list i {
        font-size: 18px;
    }

    .car_type_title {
        @include font-bold();
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
            box-shadow: 0 0 0 2px #fff, 0 0 0 3.5px rgba(0, 0, 0, 0.2);
            width: 6px;
            height: 6px;
            display: block;
            background: rgba(0, 0, 0, 0.2);
            border-radius: 100%;

            transition: all 200ms ease-in-out 0s;
        }
    }




.tabs-cars {
    overflow: auto;
    display: block;
    background: $gray-200;
    width: 100%;

    a {
        @include font-medium();
        color: $black;
        font-size: 14px;
        display: inline-block;
        padding: 17px 30px 13px;
        transition: all 0.2s ease-in-out;

        /*border-top-left-radius: 5px;*/
            /*border-top-right-radius: 5px;*/

            .tab-title {
                transition: all 0.2s ease-in-out;

                span.count-cars {
                    font-size: 11px;
                    background: $white;
                    color: $gray-700;
                    padding: 1px 5px 0;
                    margin-left: 5px;
                    border-radius: 10px;
                    min-width: 20px;
                    display: inline-block;
                    text-align: center;
                    lien-height: 11px;
                }
            }


        }

        a:hover {
            background: $gray-100;
            //color: $amber-900;
            /*background: $gray-100;
            box-shadow: 0 4px 25px 0 rgba(0,0,0, 0.05);*/

            .tab-title {
                transform: translateY(-2px);
            }
        }

        a.active {
            background: $white;


            span.count-cars {
                background: $amber-100;
                color: $amber-800;
                //@include font-regular();
            }
        }
    }


</style>


