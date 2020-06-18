import Vue from 'vue'
import moment from 'moment'
import 'moment/locale/ru'

moment.locale('ru')


// Числа в разрядах
Vue.filter('number', function (value) {
    return value.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ')
})


// Время
Vue.filter('date_t', function(value) {
    if (value) {
        return moment.unix(value).format('HH:mm')
    }
})

// Дата цифрами
Vue.filter('date_d', function(value) {
    if (value) {
        return moment.unix(value).format('DD.MM.YYYY')
    }
})

// Дата с текстовым месяцем
Vue.filter('date_td', function(value) {
    if (value) {
        return moment.unix(value).format('DD MMMM YYYY')
    }
})

// Склонение дней
// Vue.filter('declension_days', function(value) {
//     if (value) {
//         return moment().from(moment().subtract(value, 'days'), true)
//     }
// })