#OWL ITEM MANAGER

Este plugin é dedicado a manipulação de itens (deleção, armazenamento e restaruação) no
[owlcarousel2](https://github.com/OwlCarousel2/OwlCarousel2).

## Porque? (casos de uso)

Por padrão, o owlcarousel possui uma limitada gama de operações disponíveis para
adicionar, remover e restaurar itens, o que impede a realização de algumas tarefas
como filtrar os itens do carrossel.

Por exemplo, imagine que há no carrosel fotos de várias frutas, e você queira
pressionar um botão para visualizar apenas maçãs. Com esse plugin basta adicionar
uma classe de maçãs e executar
owlCarousel.trigger(removeByNotHavingSelector.owl.carousel, ".maçãs") para remover
os itens que não são maçãs, enquanto que os métodos 'collect.owl.carousel' e
'restoreCollection.owl.carousel' guardam todas as fotos e as restauram
posteriormente sem precisar recarregar a página.

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

Por exemplo, coletamos os itens para a memória, removemos todos os itens,
e os resturamos:

```
owlCarousel = $(".owl-carousel").owlCarousel();

owlCarousel.trigger('collect.owl.carousel');
owlCarousel.trigger('removeall.owl.carousel');
owlCarousel.trigger('restoreCollection.owl.carousel');
```

Podemos também remover itens de acordo com seu seletor:

```
owlCarousel.trigger('removeBySelector.owl.carousel', ".to_delete");
```

Ou apenas os itens que *não* possuam o seletor:

```
owlCarousel.trigger('removeByNotHavingSelector.owl.carousel', ".to_delete");
```
