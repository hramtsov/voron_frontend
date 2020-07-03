import Vue from 'vue';

Vue.prototype.$can = function (access) {
    let permissions = this.$auth.user.permissions

    if (permissions.includes(access)) {
        return true
    }

    return false
};

Vue.prototype.$table_filters = function (array, field_value, field_label, null_label = 'Не определено') {
    let filters = []

    for (var i = 0 ; i < array.length; i++) {
        if (!filters.filter(function(element) { return element.value == array[i][field_value] }).length) {
            let label = array[i][field_value] === null ? null_label : array[i][field_label]
            filters.push({
                label: label,
                value: array[i][field_value]
            })
        }
    }

    return filters
};


