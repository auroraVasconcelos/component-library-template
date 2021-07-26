import { Component, h, Prop, Event, EventEmitter, Element } from '@stencil/core';

@Component({
  tag: 'accordion-item-component',
  styleUrl: 'accordion-item-component.scss',
  shadow: true,
})
export class AccordionItemComponent {
  @Element() element: HTMLAccordionItemComponentElement;
  
  @Prop() buttonLabel: string;

  @Prop() itemContent: string;

  @Event() accordionItemToggle: EventEmitter<AccordionItemComponent>;

  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  //private accordionContent: HTMLDivElement;

  render() {
    return (
      <div class="accordion__item">
        <button 
          class="accordion__button"
          type="button"
          //ref={element => this.button = element as HTMLButtonElement}
          onClick={this.handleClick}
        >
          {this.buttonLabel}
        </button>
        <div 
          class="accordion__content" 
          //ref={element => this.accordionContent = element as HTMLDivElement}
          >
          <p>{this.itemContent}</p>
        </div>
      </div>
    );
  }

  private handleClick(): void {
    this.accordionItemToggle.emit(this);
  }

}
