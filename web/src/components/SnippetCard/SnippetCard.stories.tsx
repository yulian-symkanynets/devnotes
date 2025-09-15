import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import SnippetCard from './SnippetCard';


const meta: Meta<typeof SnippetCard> = {
    title: 'Components/SnippetCard',
    component: SnippetCard,
    tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof SnippetCard>;



export const Default: Story = {
    
};