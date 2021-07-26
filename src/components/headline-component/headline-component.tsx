import { Component, h } from '@stencil/core';

@Component({
  tag: 'headline-component',
  styleUrl: 'headline-component.scss',
  shadow: true,
})
export class HeadlineComponent {

  render() {
    return (
      <div>
        <h1>Hi! I'm the headline of this page!</h1>
      </div>
    );
  }

}
