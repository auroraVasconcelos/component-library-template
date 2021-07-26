import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'headline-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'headline-component.spec.tsx',
      'headline-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <headline-component></headline-component>
`;
