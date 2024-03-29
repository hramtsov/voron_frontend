import Vue from "vue";

import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
HighchartsMore(Highcharts);

Highcharts.setOptions({
	time: {
		// timezone: "Europe/Moscow"
		timezoneOffset: - 3 * 60
	},
	credits: {
		enabled: false,
	},
	lang: {
		loading: 'Загрузка...',
		months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
		weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
		shortMonths: ['Янв', 'Фев', 'Март', 'Апр', 'Май', 'Июнь', 'Июль', 'Авг', 'Сент', 'Окт', 'Нояб', 'Дек'],
		exportButtonTitle: "Экспорт",
		printButtonTitle: "Печать",
		rangeSelectorFrom: "С",
		rangeSelectorTo: "По",
		rangeSelectorZoom: "Период",
		downloadPNG: 'Скачать PNG',
		downloadJPEG: 'Скачать JPEG',
		downloadPDF: 'Скачать PDF',
		downloadSVG: 'Скачать SVG',
		printChart: 'Напечатать график'
	}
});

import HighchartsVue from 'highcharts-vue';
Vue.use(HighchartsVue);