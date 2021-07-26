import { newE2EPage } from '@stencil/core/testing';

describe('accordion-item-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-item-component></accordion-item-component>');

    const element = await page.find('accordion-item-component');
    expect(element).toHaveClass('hydrated');
  });
});
