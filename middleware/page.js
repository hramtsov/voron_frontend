export default function ({route, store, error}) {

    let pages = {
        'cars-table': ['cars/section'],
        'cars-create': ['cars/create'],


        'clients': ['clients/section'],
        'trips': ['trips/section'],
        'map': ['map/section'],
        'deliveries': ['deliveries/section'],
        // 'wash': ['wash_page'],
        // 'statistic': ['statistic_main_page'],
        // 'registers': ['registers/section'],
        // 'check': ['zp_page'],
        // 'schedule': ['schedule_page'],
        'fines': ['fines/section'],
        // 'partners': ['partner_page'],
        // 'partner': ['partner_page', 'bound_partner'],
        // 'drivers': ['driver_page'],
        'managers': ['managers/section'],
        'categories': ['categories/section'],
        'spam': ['spam/section'],

        'roles': ['roles/section'],
        'roles-create': ['roles/create'],
        'roles-edit-id': ['roles/edit'],
    }


    let permissions = store.$auth.user.permissions


    if (pages[route.name] && pages[route.name].length > 0) {

        for (var i = 0; i <= pages[route.name].length - 1; i++) {
            let access = pages[route.name][i]

            if (!permissions.includes(access)) {
                error({ statusCode: 403, title: 'Доступ запрещен', description: 'У вас нет прав для просмотра этой страницы' })
            }

            // if (typeof permissions[key] === "undefined") {
            //
            // }
        }

    } else {
        error({ statusCode: 403, title: 'Доступ запрещен', description: 'У вас нет прав для просмотра этой страницы' })
    }

}
