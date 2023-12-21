/**
 * @license EUPL-1.2
 * Copyright (c) 2021 Community for NL Design System
 */

import { Component, h } from '@stencil/core';

@Component({
  tag: 'kernteam-avatar',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Avatar {
  render() {
    return (
      <button class="kernteam-button" type="button">
        <span class="kernteam-button__text">
          <slot></slot>
        </span>
      </button>
    );
  }
}
