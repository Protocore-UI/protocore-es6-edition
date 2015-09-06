define(function(require) {
    'use strict';

    let HomeTemplate = require('text!../templates/homeTpl.html'),
        BaseView = require('es6!apps/views/_baseView');

    class HomeView extends BaseView.BaseView {
        constructor() {
            console.log("LOG: Executed HomeView Constructor");
            super(HomeTemplate);
        }

        beforeRender() {
            console.log("LOG: HomeView Before Render");
        }

        afterRender() {
            console.log("LOG: HomeView After Render");
        }

        eventsHash() {
            console.log("LOG: HomeView Events Hash");
        }
    };

    return HomeView;
});