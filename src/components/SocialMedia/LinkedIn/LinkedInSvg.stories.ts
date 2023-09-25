import type { Meta, StoryObj } from '@storybook/react';
import { LinkedInSvg } from "./LinkedInSvg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'React Svg Icons/Social Media/LinkedInSvg',
    component: LinkedInSvg,
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
            control: { type: 'number', min: 24, max: 1024, step: 2 },
            description: "Size of icon to be rendered",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 55 },
            },
        },
        // color prop
        color: {
            control: { type: 'color', presetColors: [], },
            description: "Color of icon to be rendered",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#0288d1" },
            },
        },
    },
} satisfies Meta<typeof LinkedInSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const LinkedInSvgIcon: Story = {
    args: {
        size: 55,
        color: "#0288d1"
    },
};