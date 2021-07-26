import { Component, h, State, Listen } from '@stencil/core';
import { AccordionItemComponent } from '../accordion-item-component/accordion-item-component';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
  @State() toggleState: boolean = false;

  @Listen('accordionItemToggle')
  public handleToggle(event: CustomEvent<AccordionItemComponent>): void {
    console.log(event);
    let activeElement = event.target;
    console.log(activeElement);
    
}

  public toggleVisibility(): void {
    console.log('1',this.toggleState);
    this.toggleState = !this.toggleState;
    console.log(this.toggleState);
  }

  render() {
    return (
      <section class="accordion">
        <slot></slot>
      </section>
    );
  }

}
