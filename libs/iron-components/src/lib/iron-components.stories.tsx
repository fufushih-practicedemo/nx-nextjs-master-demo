import type { Meta, StoryObj } from '@storybook/react';
import { IronComponents } from './iron-components';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof IronComponents> = {
  component: IronComponents,
  title: 'IronComponents',
};
export default meta;
type Story = StoryObj<typeof IronComponents>;

export const Primary = {
  args: {},
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to IronComponents!/gi)).toBeTruthy();
  },
};
