/**
 * @license EUPL-1.2
 * Copyright (c) 2023 Community for NL Design System
 */

import { Component, h, Prop } from '@stencil/core';
import { IconBuilding, IconUser } from '@tabler/icons';

@Component({
  tag: 'kernteam-avatar',
  styleUrl: 'index.scss',
  shadow: true,
})
export class Avatar {
  @Prop() initials: string = '';
  @Prop() imageSrc: string = '';
  @Prop() altText: string = '';
  @Prop() privateProfile: boolean = true;
  render() {
    const { initials, imageSrc, altText, privateProfile } = this;
    return (
      <div class="kernteam-avatar">
        {imageSrc ? (
          <img src={imageSrc} alt={altText} class="kernteam-avatar__image" />
        ) : initials ? (
          <slot name="initials">{initials}</slot>
        ) : privateProfile ? (
          <IconUser className="kernteam-avatar__icon" />
        ) : (
          <IconBuilding className="kernteam-avatar__icon" />
        )}
      </div>
    );
  }
}
