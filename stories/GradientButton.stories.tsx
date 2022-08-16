import React from 'react';
import { Meta, Story } from '@storybook/react';
import { GradientButton, GradientButtonProps } from '../src/Buttons';

const meta: Meta = {
  title: 'Buttons/GradientButton',
  component: GradientButton,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<GradientButtonProps> = args => (
  <GradientButton {...args} />
);
export const Default = Template.bind({});

Default.args = {};
