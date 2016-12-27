Toolkit.require.config({
    baseUrl: "../toolkit",
    paths: {
        "bootstrap-datepicker": "js/lib/bootstrap-datepicker",
        "bootstrap-dataTables": "js/lib/bootstrap-dataTables",
        "layerlib": "js/lib/layer/layer",
        "inputmask": "js/lib/jquery.inputmask.bundle",
        "jquery": "js/lib/jquery",
        "jquery-dataTables": "js/lib/jquery.dataTables",
        "jquery-selectBoxIt": "js/lib/jquery.selectBoxIt",
        "jquery-ui": "js/lib/jquery-ui",
        "perfect-scrollbar": "js/lib/perfect-scrollbar",
        "require-css": "js/lib/require-css",
        "select2": "js/lib/select2",
        "button": "js/modules/button",
        "checkbox": "js/modules/checkbox",
        "date": "js/modules/date",
        "font": "js/modules/font",
        "layer": "js/modules/layer",
        "loading": "js/modules/loading",
        "mask": "js/modules/mask",
        "radio": "js/modules/radio",
        "searchSelect": "js/modules/searchSelect",
        "select": "js/modules/select",
        "switchButton": "js/modules/switchButton",
        "table": "js/modules/table"
    },
    shim: {
        "bootstrap-datepicker": {
            deps: [
                "jquery"
            ]
        },
        "jquery-dataTables": {
            deps: [
                "jquery"
            ]
        },
        "inputmask": {
            deps: [
                "jquery"
            ]
        },
        "bootstrap-dataTables": {
            deps: [
                "jquery",
                "jquery-dataTables",
                "require-css!css/lib/bootstrap-dataTables.css"
            ]
        },
        "jquery-selectBoxIt": {
            deps: [
                "jquery",
                "jquery-ui",
                "require-css!css/lib/jquery.selectBoxIt.css"
            ]
        },
        "perfect-scrollbar": {
            deps: [
                "require-css!css/lib/perfect-scrollbar.css"
            ]
        },
        "font": {
            deps: [
                "require-css!css/lib/font-awesome.css"
            ]
        },
        "select2": {
            deps: [
                "require-css!css/lib/select2.css"
            ]
        },
        "button": {
            deps: [
                    "require-css!css/modules/button.css"
            ]
        }
    }
})