import Vue from 'vue'
import iView from 'view-design' // 'iview'
import locale from 'view-design/dist/locale/ru-RU' // 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

Vue.use(iView, {
  locale,
  size: 'large',

  datePicker: {
    customIcon: 'fal fa-calendar',
    iconSize: 14
  }

})
