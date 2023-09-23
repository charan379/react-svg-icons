import type { Meta, StoryObj } from '@storybook/react';
import { InstagramSvg, InstagramSvgColorsType } from "./InstagramSvg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'React Svg Icons/Social Media/InstagramSvg',
    component: InstagramSvg,
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

        twoToneColors: {
            control: {
                type: 'array',
                description: "Two tone colors (outer, inner)",
                table: {
                    type: { summary: 'color' },
                    defaultValue: { summary: ["#fff", "#000000"] },
                },
            },
        },

    },
} satisfies Meta<typeof InstagramSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Exampe1: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorsType.ORIGINAL,
    },
};

export const Exampe2: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorsType.TWOTONE,
    },
};

export const Exampe3: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorsType.TWOTONE,
        twoToneColors: ["#fff", "#000000"]
    },
};