'use strict';

import * as $ from 'jquery';
import * as Handlebars from 'handlebars';

export class BaseView {
    constructor(template, el = 'body') {
        console.log("LOG: Executed BaseView Constructor");

        this.template = template;
        this.el = el;

        this.render();
    }

    render() {
        console.log("LOG: Executed BaseView Render");

        if (this.beforeRender) {
            this.beforeRender();
        }

        if (this.template && this.el) {
            $(this.el).html(Handlebars.compile(this.template));

            if (this.afterRender) {
                this.afterRender();
            }

            if (this.eventsHash) {
                this.eventsHash();
            }
        }
    }
};