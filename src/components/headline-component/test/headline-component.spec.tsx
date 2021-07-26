import { newSpecPage } from '@stencil/core/testing';
import { HeadlineComponent } from '../headline-component';

describe('headline-component', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [HeadlineComponent],
      html: `<headline-component></headline-component>`,
    });
    expect(page.root).toEqualHtml(`
      <headline-component>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </headline-component>
    `);
  });
});
