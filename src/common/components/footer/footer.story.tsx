import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from './footer.component';

const meta: Meta<typeof Footer> = {
  title: "Common/ Footer",
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Primary: Story = {
  args: {
    href: "tel:+380441234567",
    children: "044 123 45 67"
  },
};