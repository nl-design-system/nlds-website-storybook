/* @license CC0-1.0 */

import type { Meta, StoryObj } from '@storybook/react';
import { Strong, UnorderedList, UnorderedListItem } from '@utrecht/component-library-react';
import {
  UtrechtCode,
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
  title: 'Template/Richtlijnen/Kleuren',
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
          <UtrechtHeading3>Zorg voor voldoende kleurcontrast.</UtrechtHeading3>
          <UtrechtParagraph>
            Voldoende contrast zorgt ervoor dat teksten goed leesbaar zijn. Ook wanneer iemand slechtziend is of als de
            zon op je smartphone schijnt.
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
            Er zijn ook interface elementen die voldoende contrast moeten hebben. Denk aan iconen, formulierelementen of
            datavisualisatie. Voor deze elementen zou het contrast tussen de voor- en achtergrondkleur 3:1 of groter
            moeten zijn.
          </UtrechtParagraph>
          <UtrechtHeading4>Kleurenpalet</UtrechtHeading4>
          <UtrechtParagraph>
            Het is handig om een kleurenpalet te hebben waaruit je kan opmaken welke kleurcombinaties voldoende contrast
            opleveren. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je{' '}
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
            niet goed interpreteren. Maak daarom gebruik van tekst, iconen en/of andere visuele elementen om de intentie
            van de boodschap te versterken.
          </UtrechtParagraph>
          <UtrechtParagraph>
            In de afbeelding hierboven zie je een formulier waarbij het tekstveld E-mailadres een rode border heeft.
            Daarnaast staat het formulier nogmaals afgebeeld, maar dan zoals een kleurenblind persoon dit kan ervaren
            (in dit voorbeeld deuteranoop).
          </UtrechtParagraph>
          <UtrechtParagraph>Enkele tips om niet alleen op kleur te vertrouwen:</UtrechtParagraph>
          <UnorderedList>
            <UnorderedListItem>Onderstreep links in je body text.</UnorderedListItem>
            <UnorderedListItem>
              Voeg een icoon toe aan een foutmelding en maak de border van het formulier element dikker.
            </UnorderedListItem>
            <UnorderedListItem>
              Gebruik vormen of patronen als extra onderscheidend element voor datavisualisatie.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtParagraph>
            Er zijn verschillende vormen van kleurenblindheid. Je kunt testen hoe jouw ontwerp overkomt op iemand die
            kleurenblind is. Er zijn verschillende tools beschikbaar die je hierbij kunnen helpen. Zo zou je de{' '}
            <UtrechtLink href="https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg">
              Colorblindly plugin voor Google Chrome
            </UtrechtLink>{' '}
            kunnen gebruiken. Deze plugin geeft aan hoe jouw ontwerp per vorm van kleurenblindheid wordt ervaren.
          </UtrechtParagraph>
          <UtrechtHeading3>Gebruik kleur met een doel.</UtrechtHeading3>
          <UtrechtParagraph>
            Als je kleuren gebruikt doe je dat met een bepaald doel, hierdoor hebben ze een betekenis. Het is belangrijk
            dat die kleur consistent hoort bij die betekenis. Bijvoorbeeld: rood wordt gebruikt om risico aan te geven,
            of een blokkade door een foutmelding. Gebruik rood dan niet wanneer je juist wél ergens op moet klikken,
            zoals een link of een verzendknop.
          </UtrechtParagraph>
          <UtrechtParagraph>
            <Strong>Inzicht vanuit onderzoek.</Strong> Uit een onderzoek van Gemeente Utrecht blijkt dat laaggeletterden
            afschrikken van de kleur rood. Bijvoorbeeld als achtergrondkleur van een knop. De tekst wordt niet gelezen,
            de laaggeletterde acteert op kleur. Deze kleur wordt daarom niet langer als standaard interactie kleur
            toegepast.
          </UtrechtParagraph>
          <UtrechtHeading4>Signaalkleuren</UtrechtHeading4>
          <UtrechtParagraph>
            Het kan zijn dat in je huisstijl de stoplichtkleuren rood, amber of groen een belangrijke rol hebben.
            Gebruik dan rood en groen niet als primaire kleur voor de knop en link componenten. Maar gebruik ze als
            signaalkleur voor bijvoorbeeld een fout- of succesmelding.
          </UtrechtParagraph>
          <UtrechtHeading4>Interactie</UtrechtHeading4>
          <UtrechtParagraph>
            Het is verstandig om vanuit je kleurenpalet één kleur aan te houden voor interactie. Een blauwe tint geeft
            het sterkste signaal voor links, maar andere kleuren werken bijna net zo goed. Gebruik de gekozen kleur voor
            interactie daarna niet meer voor niet-interactieve elementen.
          </UtrechtParagraph>
          <UtrechtHeading2>Overig</UtrechtHeading2>
          <UtrechtHeading3>Verschillen in waarneming</UtrechtHeading3>
          <UtrechtParagraph>
            Vergeet niet dat mensen kleur op verschillende manieren kunnen waarnemen en ervaren. Soms zelfs helemaal
            niet.
          </UtrechtParagraph>
          <UtrechtParagraph>Voorbeelden van verschillen in waarneming:</UtrechtParagraph>
          <UnorderedList>
            <UnorderedListItem>
              <Strong>Iets niet kunnen zien als er tussen twee tinten te weinig contrast is.</Strong>{' '}
              <UtrechtLink href="https://nldesignsystem.nl/richtlijnen/stijl/kleuren/#contrast">
                Lees meer over contrast.
              </UtrechtLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Geen verschil kunnen zien tussen kleuren.</Strong> Wanneer je twee kleuren naast elkaar gebruikt
              om verschil duidelijk te maken, kies dan kleuren die ook verschillend zijn voor mensen met
              kleurenblindheid. Dit is essentieel voor bijvoorbeeld datavisualisatie met een grafiek of landkaart. En
              als je kleur gebruikt om de status van de component duidelijk te maken (bijvoorbeeld ‘disabled’ of
              ‘invalid’). Verander dan niet alleen de kleur maar kies ook voor een donkerdere of lichtere tint, of maak
              de lijnen en tekst dikker.
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Last ervaren van een te hoog contrast.</Strong> Gebruik daarom geen puur zwarte tekst op een puur
              witte achtergrond. Zo’n sterk contrast (21:1) kan ertoe leiden dat mensen tekst wazig, bewegend of
              flikkerend ervaren. Dit staat bekend als het{' '}
              <UtrechtLink href="https://en.m.wikipedia.org/wiki/Irlen_syndrome">Irlen-syndroom.</UtrechtLink> Overweeg
              daarom het contrast te beperken tot bijvoorbeeld 17:1. Kies als tekstkleur bijvoorbeeld niet zwart, maar
              donker grijs.
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Last ervaren van heldere kleuren en hoog contrast.</Strong> Als je erg gevoelig bent voor licht,
              dan kun je software gebruiken om alle kleuren op het scherm donkerder te maken en de kleuren minder
              verzadigd weer te geven. Dat kan bijvoorbeeld met{' '}
              <UtrechtLink href="https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696">
                Windows high contrast mode
              </UtrechtLink>
              .
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong> Meer op kleur dan tekst vertrouwen.</Strong> Als je de nederlandse taal niet spreekt of kan
              lezen, of als je laaggeletterd bent, dan kunnen kleuren essentieel zijn om de betekenis te begrijpen. Rood
              is fout, groen is goed, amber is een waarschuwing. Schrik deze gebruikers niet onnodig af door rood te
              gebruiken voor acties die ongevaarlijk zijn om aan te klikken.
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong> Geen kleuren zien, alleen lichte en donkere tinten.</Strong> Als je een intense kleur wilt
              gebruiken om de aandacht te trekken, dan werkt dat niet voor iedereen. Begin eerst met een alternatief
              zoals een dikkere border, grotere afmeting, vette tekst, of een omgekeerd kleurenpalet.
            </UnorderedListItem>
            <UnorderedListItem>
              <Strong>Bijna niets tot niets zien.</Strong> Daarom is het belangrijk dat informatie in eerste instantie
              duidelijk wordt door tekst of door informatie via HTML en ARIA aan hulpmiddelen door te geven.
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtHeading3>Voorkeursinstellingen</UtrechtHeading3>
          <UtrechtParagraph>Vergeet niet dat men mogelijk voorkeursinstellingen heeft toegepast.</UtrechtParagraph>
          <UtrechtParagraph>Voorbeelden van voorkeursinstellingen:</UtrechtParagraph>
          <UtrechtParagraph>
            <Strong>Aangepast kleuren thema.</Strong> Sommige mensen bekijken webpagina’s liever in een donker
            (dark-mode) of juist licht kleurenthema (light-mode). Zij kunnen deze voorkeur aangeven via een instelling
            van het besturingssysteem. Door de media query{' '}
            <UtrechtLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme">
              <UtrechtCode>prefers-color-scheme</UtrechtCode>
            </UtrechtLink>{' '}
            is dit te detecteren en kun je deze mensen een donker kleuren thema aanbieden.
          </UtrechtParagraph>
          <UtrechtParagraph>
            <Strong>Aangepast contrast.</Strong> Sommige mensen bekijken webpagina’s liever met meer of juist minder
            contrast. Zij kunnen deze voorkeur aangeven via een instelling van het besturingssysteem. Door de media
            query{' '}
            <UtrechtLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast">
              <UtrechtCode>prefers-contrast</UtrechtCode>
            </UtrechtLink>{' '}
            is dit te detecteren en kun je deze mensen passend kleurenthema aanbieden. Maar ze zouden ook gebruik kunnen
            maken van{' '}
            <UtrechtLink href="https://support.microsoft.com/en-us/windows/change-color-contrast-in-windows-fedc744c-90ac-69df-aed5-c8a90125e696">
              Windows high contrast mode
            </UtrechtLink>
            .
          </UtrechtParagraph>
          <UtrechtHeading2>Meer informatie</UtrechtHeading2>
          <UtrechtHeading3>Gerelateerde WCAG Richtlijnen</UtrechtHeading3>
          <UnorderedList>
            <UnorderedListItem>
              <UtrechtLink href="https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html">
                1.4.1: Use of color
              </UtrechtLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <UtrechtLink href="https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html">
                1.4.3: Contrast (minimum)
              </UtrechtLink>
            </UnorderedListItem>
            <UnorderedListItem>
              <UtrechtLink href="https://www.w3.org/WAI/WCAG21/Understanding/non-text-contrast.html">
                1.4.11: Non-text Contrast
              </UtrechtLink>
            </UnorderedListItem>
          </UnorderedList>
          <UtrechtHeading3>Links</UtrechtHeading3>
          <UtrechtParagraph>
            <UtrechtLink href="https://colorandcontrast.com/#/">Color and Contrast - Nate Baldwin</UtrechtLink>
            <UtrechtParagraph>Website met uitgebreide en interactieve documentatie over kleur.</UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://accessiblepalette.com/">Accessible Palette - Eugene Fedorenko</UtrechtLink>
            <UtrechtParagraph>
              Online tool waarmee je een kleurenpalet kunt genereren en direct contrast kunt checken.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://contrast-grid.eightshapes.com/?version=1.1.0&background-colors=&foreground-colors=%23FFFFFF%2C%20White%0D%0A%23F2F2F2%0D%0A%23DDDDDD%0D%0A%23CCCCCC%0D%0A%23888888%0D%0A%23404040%2C%20Charcoal%0D%0A%23000000%2C%20Black%0D%0A%232F78C5%2C%20Effective%20on%20Extremes%0D%0A%230F60B6%2C%20Effective%20on%20Lights%0D%0A%23398EEA%2C%20Ineffective%0D%0A&es-color-form__tile-size=compact&es-color-form__show-contrast=aaa&es-color-form__show-contrast=aa&es-color-form__show-contrast=aa18&es-color-form__show-contrast=dnp">
              Contrast grid - Eightshapes
            </UtrechtLink>
            <UtrechtParagraph>
              Online tool waarbij je meerdere kleuren kunt invullen. Vervolgens ontstaat er een tabel waardoor je het
              contrast kunt checken.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://color.review/">Color review - Anton Robsarve</UtrechtLink>
            <UtrechtParagraph>
              Online tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoeveel contrast deze
              kleurcombinatie oplevert. Daarnaast heb je de mogelijkheid om via een colorpicker naar voldoende contrast
              op zoek te gaan.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://randoma11y.com/">Radoma11y - Components AI</UtrechtLink>
            <UtrechtParagraph>
              Online tool die willekeurig twee kleurcombinaties samensteld die altijd voldoende contrast hebben.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://www.whocanuse.com/">Who can use - Corey Ginnivan</UtrechtLink>
            <UtrechtParagraph>
              Online tool waarbij je twee kleuren kunt invullen. Vervolgens kun je checken hoe deze kleurcombinatie
              overkomt bij verschillende visuele beperkingen.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://projects.susielu.com/viz-palette">
              Viz palette - Elijah Meeks & Susie Lu
            </UtrechtLink>
            <UtrechtParagraph>
              Online tool waarbij je meerdere kleuren kunt invullen specifiek voor data visualisatie. Vervolgens kun je
              checken hoe deze kleurcombinatie overkomt bij verschillende visuele beperkingen.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://chromewebstore.google.com/detail/colorblindly/floniaahmccleoclneebhhmnjgdfijgg">
              Chrome plugin: Colorblindly
            </UtrechtLink>
            <UtrechtParagraph>
              Broser plugin waarmee je kunt checken hoe een webpagina overkomt bij verschillende vormen van
              kleurenblindheid.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://www.bounteous.com/insights/2019/03/22/orange-you-accessible-mini-case-study-color-ratio">
              Orange you accessible?
            </UtrechtLink>
            <UtrechtParagraph>Artikel over een onderzoek naar contrast voor de kleur oranje.</UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtParagraph>
            <UtrechtLink href="https://www.smashingmagazine.com/2022/06/guide-windows-high-contrast-mode/">
              Guide windows high contrast mode
            </UtrechtLink>
            <UtrechtParagraph>
              Artikel waarin wordt beschreven hoe je een website kan inrichten zodat Windows High Contrast mode wordt
              ondersteund.
            </UtrechtParagraph>
          </UtrechtParagraph>
          <UtrechtHeading2>Help deze documentatie te verbeteren</UtrechtHeading2>
          <UtrechtParagraph>
            Om ervoor te zorgen dat deze documentatie nuttig, relevant en up-to-date is, kun je een wijziging
            voorstellen via Github.
          </UtrechtParagraph>
          <UtrechtHeading2>Vragen</UtrechtHeading2>
          <UtrechtParagraph>
            Heb je een vraag? Twijfel niet en{' '}
            <UtrechtLink href="https://nldesignsystem.nl/project/kernteam/">
              neem contact op met het kernteam
            </UtrechtLink>
            .
          </UtrechtParagraph>
        </UtrechtDocument>
      </UtrechtPageContent>
    </UtrechtPage>
  ),
};
