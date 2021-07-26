import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'accordion-item-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'accordion-item-component.spec.tsx',
      'accordion-item-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <accordion-item-component></accordion-item-component>
`;
