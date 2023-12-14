/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtDocument,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';

const meta = {
  title: 'Templates/Richtlijnen/Kleuren',
  id: 'kleuren/template',
  parameters: {
    docs: {
      autodocs: false,
    },
  },
} satisfies Meta;

export const Kleuren: StoryObj<typeof meta> = {
  render: () => (
    <UtrechtPage>
      <UtrechtPageContent>
        <UtrechtDocument>
          <UtrechtHeading1>Kleuren</UtrechtHeading1>
          <UtrechtParagraph>
            Kleuren zijn een belangrijk onderdeel van een ontwerp. Ze zorgen voor een visuele toon en helpen bij het
            overbrengen van functie en betekenis.
          </UtrechtParagraph>
          <UtrechtParagraph>
            Echter wordt kleur niet door iedereen op dezelfde manier ervaren. Daarom hebben kleuren een ondersteunende
            en geen essentiële rol.
          </UtrechtParagraph>
          <UtrechtHeading2>Contrast</UtrechtHeading2>
        </UtrechtDocument>
      </UtrechtPageContent>
    </UtrechtPage>
  ),
};
export default meta;
