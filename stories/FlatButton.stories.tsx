import React from 'react';
import { Meta, Story } from '@storybook/react';
import { FlatButton, FlatButtonProps } from '../src/Buttons';

const meta: Meta = {
  title: 'Buttons/FlatButton',
  component: FlatButton,
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

const Template: Story<FlatButtonProps> = args => <FlatButton {...args} />;
export const Default = Template.bind({});

Default.args = {};
