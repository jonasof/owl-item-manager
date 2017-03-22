/**
* Owl-Item-Manipulator
* @since 2.0.0
*/

;(function ( $, window, document, undefined ) {

    function OwlItemManipulator(scope) {

        var self = this;

        this.owl = scope;
        this.owl._options = $.extend(OwlItemManipulator.Defaults, this.owl.options);

        this.Defaults = {
            _collection: '',
        }

        this.owl.$element.on({
        	'collect.owl.carousel':           $.proxy(function(e) { return this.collect(); },this),
            'restoreCollection.owl.carousel': $.proxy(function(e) { return this.restoreCollection(); },this),
            'removeAll.owl.carousel':         $.proxy(function(e) { return this.removeAll(); },this),
            'removeBySelector.owl.carousel':  $.proxy(function(e,param) {return this.removeBySelector(param); },this),
            'removeByNotHavingSelector.owl.carousel':
                                              $.proxy(function(e,param) {return this.removeByNotHavingSelector(param); },this)
    	});

        this.collect = function()
        {
            this.collected_items = this.owl.items();
        }

        this.restoreCollection = function()
        {
            this.removeAll();

            $(this.collected_items).each(function(e) {
                var el = self.owl.prepare($(this));
                self.owl.add(el);
            });

            this.owl.update();
        }

        this.removeAll = function()
        {
            while (this.owl._items.length > 0 ) {
                this.owl.remove(0);
            }
        }

        this.removeBySelector = function(selector)
        {
            this._removeBySelector(selector, false);
        }

        this.removeByNotHavingSelector = function(selector)
        {
            this._removeBySelector(selector, true);
        }

        this._removeBySelector = function(selector, inverse)
        {
            var to_delete = [];

            $(self.owl._items).each(function(i) {

                var el = self.owl._items[i];

                if (! inverse) {
                    if (el.has(selector).length > 0) {
                        to_delete.push(el.index());
                    }
                } else {
                    if (el.has(selector).length == 0) {
                        to_delete.push(el.index());
                    }
                }
            });

            for (x = 0; x < to_delete.length; x++) {
                this.owl.remove(to_delete[x] - x);
            }
        }
    }

    $.fn.owlCarousel.Constructor.Plugins['owlItemManipulator'] = OwlItemManipulator;

})( window.Zepto || window.jQuery, window,  document );
