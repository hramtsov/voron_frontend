import Vue from 'vue'

// import {
// 	Row,
// 	Button,
// 	Input,
// 	Form,
// 	FormItem,

// } from 'view-design';

// Vue.use('Row', Row);
// Vue.component('Button', Button);
// Vue.use('Input', Input);
// Vue.use('Form', Form);
// Vue.use('FormItem', FormItem);

import iView from 'view-design'
import locale from 'view-design/dist/locale/ru-RU' // 'iview/dist/locale/en-US' // Change locale, check node_modules/iview/dist/locale

Vue.use(iView, {
	locale,
	size: 'large',

	datePicker: {
		customIcon: 'fal fa-calendar',
		iconSize: 14
	}
})
