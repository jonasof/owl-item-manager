# OWL ITEM MANAGER

[Leia em português](LEIAME.md)

This plugin is dedicated to item management (remove, store and restore) in
[owlcarousel2](https://github.com/OwlCarousel2/OwlCarousel2).

## Why?

By default, the owlcarousel2 has a limited range of operations available
to add, remove and restore items, what makes harder to realize tasks like filter
the carousel items.

For example, imagine that there is a carousel With many fruit photos, and you
want to press the button to view only apples. With this plugin you just
need to add one apple class to each item and execute
owlCarousel.trigger(removeByNotHavingSelector.owl.carousel, ".apple")
to remove all items that are not apples, while the methods 'collect.owl.carousel'
and 'restoreCollection.owl.carousel' store and restore all fruit
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

For example, we collect items to memory, remove all the items and restore they:

```
owlCarousel = $(".owl-carousel").owlCarousel();

owlCarousel.trigger('collect.owl.carousel');
owlCarousel.trigger('removeall.owl.carousel');
owlCarousel.trigger('restoreCollection.owl.carousel');
```

We can also remove items by they selector.

```
owlCarousel.trigger('removeBySelector.owl.carousel', ".to_delete");
```

Or only the items that don't have the selector

```
owlCarousel.trigger('removeByNotHavingSelector.owl.carousel', ".to_delete");
```
