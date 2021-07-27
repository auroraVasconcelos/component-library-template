import { Component, h, Listen} from '@stencil/core';
import { AccordionItemComponent } from '../accordion-item-component/accordion-item-component';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
  private get allItems(): HTMLElement[] {
    return Array.from(document.querySelectorAll('accordion-item-component'));
  } 

  private visible = 'accordion-item--visible';

  @Listen('accordionItemToggle')
  public handleToggle(event: CustomEvent<AccordionItemComponent>): void {
    const { target: clickedItem } = event as any;

    if(clickedItem.classList.contains(this.visible)) {
      clickedItem.classList.remove(this.visible);
      return;
    }

    this.allItems?.forEach(element => element.classList.remove(this.visible));
    clickedItem.classList.add(this.visible);
}

  render() {
    return (
      <section class="accordion">
        <slot></slot>
      </section>
    );
  }

}
