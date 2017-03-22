#OWL ITEM MANAGER

Este plugin é dedicado a manipulação de itens (deleção, armazenamento e restaruação) no
[https://github.com/OwlCarousel2/OwlCarousel2](owlcarousel2).

## Porque? (casos de uso)

O plugin foi criado pela necessidade de filtrar itens do carrossel.

Por padrão, o owlcarousel possui uma limitada gama de operações disponíveis para
adicionar, remover e restaurar itens.

Imagine a situação: há no carrosel fotos de várias frutas, e você queira apertar
o botão para visualizar apenas maçãs. Com esse plugin basta adicionar uma classe
de maçãs e usar owlCarousel.trigger(deleteByNotHavingSelector.owl.carousel, ".maçãs")
(veja abaixo). Os métodos 'collect.owl.carousel' e 'restoreCollection.owl.carousel'
permitem guardar todas as fotos e restaurá-las posteriormente sem precisar
recarregar a página.

## Instalação

Carregue o script owl.item-manipulator.js após o owl.carrosel.js e antes de
invocar o .owlCarousel(). Na lista de parâmetros, adicione
owlItemManipulator: true.

```
owlCarousel = $(".owl-carousel").owlCarousel({
    owlItemManipulator:true
}
```

## Uso

Por exemplo, coletamos os itens para a memória, deletamos todos os itens,
e os resturamos:

```
owlCarousel = $(".owl-carousel").owlCarousel();

owlCarousel.trigger('collect.owl.carousel');
owlCarousel.trigger('deleteall.owl.carousel');
owlCarousel.trigger('restoreCollection.owl.carousel');
```

Podemos também deletar itens de acordo com seu seletor:

```
owlCarousel.trigger('deleteBySelector.owl.carousel', ".to_delete");
```

Ou apenas os itens que *não* possuam o seletor:

```
owlCarousel.trigger('deleteByNotHavingSelector.owl.carousel', ".to_delete");
```
