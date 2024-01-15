/* @license CC0-1.0 */
import type { Meta, StoryObj } from '@storybook/react';
import {} from '@utrecht/component-library-react';
import {
  UtrechtDocument,
  UtrechtHeading1,
  UtrechtPage,
  UtrechtPageContent,
} from '@utrecht/web-component-library-react';
import './kernteam-kleuren-template.css';
import { Card } from '../../../components-react/src/Card';
const meta = {
  title: 'Template/Richtlijnen',
  id: 'Template-overview-Kleuren',
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

export const Richtlijnen: Story = {
  render: () => (
    <UtrechtPage>
      <UtrechtPageContent>
        <UtrechtDocument>
          <UtrechtHeading1>Richtlijnen</UtrechtHeading1>
          <Card
            title="Tekst en taalgebruik"
            description="Tekst en taalgebruik in NL Design System"
            link={{
              href: 'http://localhost:6006/?path=/story/template-richtlijnen-kleuren--kleuren',
            }}
          ></Card>
        </UtrechtDocument>
      </UtrechtPageContent>
    </UtrechtPage>
  ),
};
