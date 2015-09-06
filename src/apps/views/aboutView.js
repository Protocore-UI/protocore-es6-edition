define(function(require) {
    'use strict';

    let AboutTemplate = require('text!../templates/aboutTpl.html'),
        BaseView = require('es6!apps/views/_baseView');

    class AboutView extends BaseView.BaseView {
        constructor() {
            console.log("LOG: Executed AboutView Constructor");
            super(AboutTemplate);
        }

        beforeRender() {
            console.log("LOG: AboutView Before Render");
        }

        afterRender() {
            console.log("LOG: AboutView After Render");
        }

        eventsHash() {
            console.log("LOG: AboutView Events Hash");
        }
    };

    return AboutView;
});