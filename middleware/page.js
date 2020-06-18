export default function ({route, store, error}) {

    let pages = {
        'cars-table': ['car_page'],
        'clients': ['client_page'],
        'drive': ['drive_page'],
        'map': ['map_page'],
        'delivery': ['delivery_page'],
        'wash': ['wash_page'],
        'statistic': ['statistic_main_page'],
        'registers': ['reg_page'],
        'check': ['zp_page'],
        'schedule': ['schedule_page'],
        'fines': ['fine_page'],
        'partners': ['partner_page'],
        'partner': ['partner_page', 'bound_partner'],
        'drivers': ['driver_page'],
        'managers': ['manager_page'],
        'categories': ['category_page'],
        'spam': ['spam'],
        'access': ['role_page', 'permission_page'],
    }


    let permissions = store.$auth.user.permissions

    if (pages[route.name] && pages[route.name].length > 0) {

        for (var i = 0; i <= pages[route.name].length - 1; i++) {
            let key = pages[route.name][i]
            if (typeof permissions[key] === "undefined") {
                error({ statusCode: 403, title: 'Доступ запрещен', description: 'У вас нет прав для просмотра этой страницы' })
            }
        }

    } else {
        error({ statusCode: 403, title: 'Доступ запрещен', description: 'У вас нет прав для просмотра этой страницы' })
    }

}