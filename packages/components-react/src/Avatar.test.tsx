import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders a avatar role element', () => {
    render(<Avatar role="presentation">OK</Avatar>);

    const avatar = screen.getByRole('presentation');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toBeVisible();
  });

  it('renders Avatar as HTML and expects its only div to be in the document', () => {
    const { container } = render(<Avatar />);

    const avatar = container.querySelector('div:only-child');

    expect(avatar).toBeInTheDocument();
  });

  it('renders labels that contain HTML rich text content', () => {
    const { container } = render(
      <Avatar>
        <img src="some.png" alt="Pretty Woman walking down the street"></img>
      </Avatar>,
    );

    const avatar = container.querySelector(':only-child');

    const richText = avatar?.querySelector('img');

    expect(richText).toBeInTheDocument();
  });
});
