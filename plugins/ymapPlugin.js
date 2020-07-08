import Vue from 'vue'
import YmapPlugin from 'vue-yandex-maps'

const settings = {
	apiKey: '1ce43027-7ff5-4176-a8e8-57e2abfd02b0',
	lang: 'ru_RU',
	coordorder: 'latlong',
	version: '2.1',
	mode: 'debug' // release
}

Vue.use(YmapPlugin, settings);