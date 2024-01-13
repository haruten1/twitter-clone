import { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { TweetCard } from './TweetCard'

const meta: Meta<typeof TweetCard> = {
  component: TweetCard,
  title: 'TweetCard',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const BaseTweetCard: Story = {}
