import { Component, h, State, Listen} from '@stencil/core';
import { AccordionItemComponent } from '../accordion-item-component/accordion-item-component';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
  @State() toggleState: boolean = false;

  private Elements = Array.from(document.querySelectorAll('accordion-item-component'));

  @Listen('accordionItemToggle')
  public handleToggle(event: CustomEvent<AccordionItemComponent>): void {
    const { target } = event as any;
    if(target.classList.contains('visible')) {
      target.classList.remove('visible');
      return;
    }

    this.Elements.forEach(element => { element.classList.remove('visible') });
    target.classList.add('visible');
}

  render() {
    return (
      <section class="accordion">
        <slot></slot>
      </section>
    );
  }

}
