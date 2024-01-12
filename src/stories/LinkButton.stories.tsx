import { Meta, StoryObj } from '@storybook/react'
import { LinkButton } from './LinkButton'
import React from 'react'

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  title: 'Button/LinkButton',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const BaseLinkButton: Story = {
  args: {
    children: 'aaa',
    className: 'max-w-[200px]',
  },
}

/**
 * 赤色のボタンです
 */
export const RedBaseLinkButton: Story = {
  args: {
    children: 'aaa',
    className: 'max-w-[200px] bg-red-800',
  },
}

export const GroupedButton: Story = {
  render: () => (
    <div>
      <LinkButton className="max-w-[200px]" href="">
        test
      </LinkButton>
      <LinkButton className="mt-[20px] max-w-[200px] bg-red-800" href="">
        test
      </LinkButton>
    </div>
  ),
}
