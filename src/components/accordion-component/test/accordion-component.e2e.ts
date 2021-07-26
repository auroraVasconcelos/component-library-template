import { newE2EPage } from '@stencil/core/testing';

describe('accordion-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<accordion-component></accordion-component>');

    const element = await page.find('accordion-component');
    expect(element).toHaveClass('hydrated');
  });
});
