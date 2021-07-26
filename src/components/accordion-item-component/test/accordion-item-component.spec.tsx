import { newSpecPage } from '@stencil/core/testing';
import { AccordionItemComponent } from '../accordion-item-component';

describe('accordion-item-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionItemComponent],
      html: `<accordion-item-component></accordion-item-component>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-item-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-item-component>
    `);
  });
});
