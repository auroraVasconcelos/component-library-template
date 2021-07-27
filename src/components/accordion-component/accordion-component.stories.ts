//import { lorem } from 'faker';
import { jsxDecorator } from 'storybook-addon-jsx';
import readme from './readme.md';

// eslint-disable-next-line import/no-default-export
export default {
  title: 'accordion-component',
  parameters: {
    docs: { description: { component: readme } },
    jest: [
      'accordion-component.spec.tsx',
      'accordion-component.e2e.ts',
    ],
  },
  decorators: [jsxDecorator],
};

export const empty = (): string => `
  <accordion-component>
    <accordion-item-component
      button-label="title 1"
      item-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod cum maiores sint accusantium asperiores, architecto ducimus odio, rerum placeat tempore esse eaque, nulla earum. Animi, ipsum! Sapiente, vel corporis."
    ></accordion-item-component>

    <accordion-item-component
      button-label="title 2"
      item-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod cum maiores sint accusantium asperiores, architecto ducimus odio, rerum placeat tempore esse eaque, nulla earum. Animi, ipsum! Sapiente, vel corporis."
    ></accordion-item-component>

    <accordion-item-component
      button-label="title 3"
      item-content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod cum maiores sint accusantium asperiores, architecto ducimus odio, rerum placeat tempore esse eaque, nulla earum. Animi, ipsum! Sapiente, vel corporis."
    ></accordion-item-component>
  </accordion-component>
`;
