import { Component, h, Prop, Event, EventEmitter, Element} from '@stencil/core';

@Component({
  tag: 'accordion-item-component',
  styleUrl: 'accordion-item-component.scss',
  shadow: true,
})
export class AccordionItemComponent {  
  @Prop() buttonLabel: string;

  @Prop() buttonLabel_hover: string='Are you sure?';

  @Prop() itemContent: string;

  @Element() element: HTMLAccordionItemComponentElement;

  @Event({bubbles:true, composed:true}) accordionItemToggle: EventEmitter<HTMLAccordionItemComponentElement>;

  constructor() {
    this.handleClick = this.handleClick.bind(this);
  }

  render() {
    return (
      <div class="accordion__item">
        <button 
          class="accordion__button"
          type="button"
          onClick={this.handleClick}
        >
          {/* <p class='accordion__button--before'>{this.buttonLabel}</p>
          <p class='accordion__button--hover'>{this.buttonLabel_hover}</p> */}
          {this.buttonLabel}
        </button>
        <div class="accordion__content" >
          <p>{this.itemContent}</p>
        </div>
      </div>
    );
  }

  private handleClick(): void {
    this.accordionItemToggle.emit(this.element);
  }
}
