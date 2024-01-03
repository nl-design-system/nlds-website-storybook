import { render, screen } from '@testing-library/react';
import { Avatar } from './Avatar';

describe('Avatar', () => {
  it('renders a avatar role element', () => {
    render(<Avatar role="avatar">OK</Avatar>);

    const avatar = screen.getByRole('avatar');

    expect(avatar).toBeInTheDocument();
    expect(avatar).toBeVisible();
  });

  it('renders an HTML avatar element', () => {
    const { container } = render(<Avatar />);

    const avatar = container.querySelector('div:only-child');

    expect(avatar).toBeInTheDocument();
  });

  it('renders labels that contain HTML rich text content', () => {
    const { container } = render(
      <Avatar>
        <p>now</p>
      </Avatar>,
    );

    const avatar = container.querySelector(':only-child');

    const richText = avatar?.querySelector('p');

    expect(richText).toBeInTheDocument();
  });
});
