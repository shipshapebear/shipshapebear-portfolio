import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';


export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    rounded: {
      type: 'boolean',
    },
    fullWidth: {
      type: 'boolean',
    },
    className: {
      type: 'function',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>My Button</Button>;

export const Default = Template.bind({});


