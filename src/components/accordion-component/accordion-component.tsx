import { Component, h, Listen, State} from '@stencil/core';
import { AccordionItemComponent } from '../accordion-item-component/accordion-item-component';

@Component({
  tag: 'accordion-component',
  styleUrl: 'accordion-component.scss',
  shadow: true,
})
export class AccordionComponent {
  @State() fetchedData: any;

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

  public componentWillLoad() {
    this.fetchData();
  }

  render() {
    return (
      <section class="accordion">
        {this.fetchedData?.map((item) => (
          <accordion-item-component
            buttonLabel = {item.code}
            itemContent = {item.description} 
          >
          </accordion-item-component>
        ))} 
      </section>
    );
  }

  // FETCH THE DATA FROM THE API IN THE ACCORDION
  // private fetchedData(data) {
  //   this.allItems.forEach((item: HTMLAccordionItemComponentElement, index: number) => {
  //     item.buttonLabel = data[index].code;
  //     item.itemContent = data[index].description;
  //   });
  // }

  private async fetchData() {
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
    .then( resp => 
      resp.json()
    )
    .then(content => {
      //this.fetchedData(Object.values(content.bpi));
      this.fetchedData = Object.values(content.bpi) as any;
      //console.log(this.fetchedData);
    })
    .catch(error => {
      console.error(error);
    })
  }
}
