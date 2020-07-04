<template>
    <div class='autonumber'>
        <div class='numb'>
            {{ car.letters_start }}
            <span>{{ car.nums }}</span>
            {{ car.letters_end }}
        </div>
        <div class='reg'>
            <div class='reg_num'>{{ car.region }}</div>
            <div class='flug_rus'>
                RUS
                <span>
                    <i class='w'></i>
                    <i class='b'></i>
                    <i class='r'></i>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "CarNumber",
        props: [
            'number'
        ],
        data () {
            return {
                car: {
                    letters_start: 'А',
                    nums: '777',
                    letters_end: 'ВВ',
                    region: 777,
                }
            }
        },
        created: function () {
            this.car.letters_start = this.number.substr(0, 1)
            this.car.nums = this.number.substr(1, 3)
            this.car.letters_end = this.number.substr(4, 2)
            this.car.region = this.number.substr(6)
        }
    }
</script>

<style lang="scss" scoped>
    .autonumber {
        background: #fff;
        float: left;
        width: 124px;
        height: 35px;
        border: 1px solid #b2b2b2;
        border-color: #000;
        border-radius: 4px;
        line-height: 31px;
        /*font-family: 'Fira Sans Condensed', sans-serif;*/
        font-family: 'Fira Sans', sans-serif;
        text-transform: uppercase;
        color: rgba(0,0,0,0.8);

    .numb,
    .reg {
        display: inline-block;
        width: 40px;
        text-align: center;
        font-weight: 600;
        font-size: 13px;
        float: left;
    }

    .numb {
        font-size: 14px;
        font-weight: 600;

        border-right: 1px solid #b2b2b2;
        border-color: #000;
        text-align: center;
        width: 80px;
        float: left;
        line-height: 30px;

    span {
        margin: 0 2px;
        font-weight: 500;
        font-size: 20px;
    }
    }

    .flug_rus,
    .reg .reg_num {
        display: block;
        line-height: 13px;
    }

    .reg .reg_num {
        padding-top: 4px;
    }

    .flug_rus,
    .reg .flug_rus {
        font-size: 8px;
    }

    .reg .flug_rus span {
        width: 10px;
        display: inline-block;
        margin-left: 2px;
        border: 1px solid #000;

    i {
        display: block;
        height: 2px;
        width: 100%;
    }

    i.w {
        background: #fff;
    }

    i.b {
        background: #0065b3;
    }

    i.r {
        background: #e91e20;
    }
    }
    }
</style>
