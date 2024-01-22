import type { Meta, StoryObj } from '@storybook/react';
import { MenuList } from './menuList.component';

const meta: Meta<typeof MenuList> = {
  title: "Menu/Menu List",
  component: MenuList,
};

export default meta;
type Story = StoryObj<typeof MenuList>;

export const Primary: Story = {
  args: {},
};