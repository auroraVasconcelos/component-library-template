import { newSpecPage } from '@stencil/core/testing';
import { AccordionComponent } from '../accordion-component';

describe('accordion-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AccordionComponent],
      html: `<accordion-component></accordion-component>`,
    });
    expect(page.root).toEqualHtml(`
      <accordion-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </accordion-component>
    `);
  });
});
