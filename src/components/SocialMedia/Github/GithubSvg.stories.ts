import type { Meta, StoryObj } from '@storybook/react';
import { GithubSvg } from "./GithubSvg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'React Svg Icons/Social Media/GithubSvg',
    component: GithubSvg,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
        // size prop
        size: {
            control: { type: 'number', min:24, max:1024, step: 2 },
            description: "Size of icon to be rendered",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 55 },
            },
        },
    },
} satisfies Meta<typeof GithubSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const GithubSvgIcon: Story = {
    args: {
        size: 55,
    },
};