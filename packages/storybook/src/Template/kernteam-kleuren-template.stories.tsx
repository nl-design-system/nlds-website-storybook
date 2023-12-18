/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import {
  UtrechtDocument,
  UtrechtHeading1,
  UtrechtHeading2,
  UtrechtHeading3,
  UtrechtHeading4,
  UtrechtLink,
  UtrechtPage,
  UtrechtPageContent,
  UtrechtParagraph,
} from '@utrecht/web-component-library-react';
import './kernteam-kleuren-template.css';

const meta = {
  title: 'Template/Kleuren',
  id: 'Template-Richtlijnen-Kleuren',
  parameters: {
    layout: 'fullscreen',
    viewport: {
      viewports: {
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1280px',
            height: '1528px',
          },
        },
      },
      defaultViewport: 'desktop',
    },
  },
  decorators: [(Story) => <div style={{ minInlineSize: '1280px' }}>{Story()}</div>],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Kleuren: Story = {
  render: (args) => (
    <div {...args} style={{ containerType: 'inline-size' }}>
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
            <UtrechtHeading3>Zorg voor voldoende kleurcontrast.</UtrechtHeading3>
            <UtrechtParagraph>
              Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als
              de zon op je smartphone schijnt.
            </UtrechtParagraph>
            <UtrechtParagraph>
              Het W3C is voor{' '}
              <UtrechtLink href="https://www.w3.org/TR/wcag-3.0/#visual-contrast-of-text">WCAG 3.0</UtrechtLink> aan het
              kijken naar een algoritme om kleurcontrast accurater te berekenen. Let wel; voorlopig zal je je aan de
              huidige contrast richtlijnen moeten houden.
            </UtrechtParagraph>
            <UtrechtHeading4>Tekst</UtrechtHeading4>
            <UtrechtParagraph>
              Voor tekst zou het contrast tussen de voor- en achtergrondkleur 4.5:1 of groter moeten zijn. Bij een
              lettergrootte van 24px (of 18.5px en bold) of hoger zou het contrast 3:1 of groter moeten zijn.
            </UtrechtParagraph>
            <UtrechtHeading4>Interface elementen</UtrechtHeading4>
            <UtrechtParagraph>
              Er zijn ook interface elementen die voldoende contrast moeten hebben. Denk aan iconen, formulierelementen
              of datavisualisatie. Voor deze elementen zou het contrast tussen de voor- en achtergrondkleur 3:1 of
              groter moeten zijn.
            </UtrechtParagraph>
            <UtrechtHeading4>Kleurenpalet</UtrechtHeading4>
            <UtrechtParagraph>
              Het is handig om een kleurenpalet te hebben waaruit je kan opmaken welke kleurcombinaties voldoende
              contrast opleveren. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je{' '}
              <UtrechtLink href="https://accessiblepalette.com/">accessiblepalette.com</UtrechtLink> kunnen gebruiken.
              Deze tool berekend het contrast op basis van de WCAG 2.1 en 3 (concept) richtlijnen.
            </UtrechtParagraph>
            <UtrechtParagraph>
              Het hebben van een uitgebreid kleurenpalet is fijn (ook met het oog op dark-mode). Maar het betekend niet
              dat je ook veel verschillende kleuren moet gebruiken. Pas de kleuren uit het kleurenpalet toe voor
              specifieke doeleinden. Het ‘common’ niveau dat we hanteren bij het NL Design System is hier een mooi
              voorbeeld van.
            </UtrechtParagraph>
            <UtrechtHeading4>Tekst over afbeelding</UtrechtHeading4>
            <UtrechtParagraph>
              Als je tekst over een afbeelding wilt gebruiken, plaats dan een effen vlak achter de tekst of een
              transparant kleurvlak over de gehele afbeelding.
            </UtrechtParagraph>
            <UtrechtHeading2>Gebruik</UtrechtHeading2>
            <UtrechtHeading3>Vertrouw niet alleen op kleur.</UtrechtHeading3>
            <UtrechtParagraph>
              Wanneer je alleen kleur gebruikt om informatie over te brengen kan iemand die kleurenblind is de dit soms
              niet goed interpreteren. Maak daarom gebruik van tekst, iconen en/of andere visuele elementen om de
              intentie van de boodschap te versterken.
            </UtrechtParagraph>
            <UtrechtParagraph>
              In de afbeelding hierboven zie je een formulier waarbij het tekstveld E-mailadres een rode border heeft.
              Daarnaast staat het formulier nogmaals afgebeeld, maar dan zoals een kleurenblind persoon dit kan ervaren
              (in dit voorbeeld deuteranoop).
            </UtrechtParagraph>
          </UtrechtDocument>
        </UtrechtPageContent>
      </UtrechtPage>
    </div>
  ),
};
