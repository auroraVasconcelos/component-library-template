import { newE2EPage } from '@stencil/core/testing';

describe('headline-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<headline-component></headline-component>');

    const element = await page.find('headline-component');
    expect(element).toHaveClass('hydrated');
  });
});
