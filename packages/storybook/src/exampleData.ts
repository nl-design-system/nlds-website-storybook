export const menuListItems = [
  {
    label: 'Introductie',
    href: '/',
  },
  {
    label: 'Stijl',
    href: '/',
    current: true,
  },
  {
    label: 'Formulieren',
    href: '/',
    subMenuListItems: [
      {
        label: 'Introductie formulieren',
        href: '/',
      },
      {
        label: 'Buttons',
        href: '/',
      },
      {
        label: 'Bevestigingspagina',
        href: '/',
        subMenuListItems: [
          {
            label: 'Voorbeelden',
            href: '/',
          },
          {
            label: 'Uitleg',
            href: '/',
          },
        ],
      },
    ],
  },
  {
    label: 'WCAG',
    href: '/',
    subMenuListItems: [
      {
        label: 'Introductie WCAG',
        href: '/',
      },
      {
        label: 'Lorum Ipsum',
        href: '/',
      },
    ],
  },
];
