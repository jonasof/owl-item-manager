# OWL ITEM MANAGER

[Leia em português](LEIAME.md)

This plugin is dedicated to item management (delete, store and restore) in
[owlcarousel2](https://github.com/OwlCarousel2/OwlCarousel2).

## Why?

This plugin was criated by the need to filter items in carousel.

By default, the owlcarousel2 has a limited range of operations available
to add, remove and restore items.

Imagine this situation: there is a carousel With many fruit photos, and you
want to press the button to view only apples. With this plugin you just
need to add one apple class to each item and execute
owlCarousel.trigger(deleteByNotHavingSelector.owl.carousel, ".apple")
(see below). The methods 'collect.owl.carousel' and
'restoreCollection.owl.carousel' allow to store and restore all fruit
photos without need to reload the page.

## Installation

Load the script owl.item-manipulator.js after owl.carrosel.js and before
invoke .owlCarousel(). In the param list, add owlItemManipulator: true.

```
owlCarousel = $(".owl-carousel").owlCarousel({
    owlItemManipulator:true
}
```

## Use

For example, we collect items to memory, delete all the items and restore they:

```
owlCarousel = $(".owl-carousel").owlCarousel();

owlCarousel.trigger('collect.owl.carousel');
owlCarousel.trigger('deleteall.owl.carousel');
owlCarousel.trigger('restoreCollection.owl.carousel');
```

We can also delete items by they selector.

```
owlCarousel.trigger('deleteBySelector.owl.carousel', ".to_delete");
```

Or only the items that don't have the selector

```
owlCarousel.trigger('deleteByNotHavingSelector.owl.carousel', ".to_delete");
```
