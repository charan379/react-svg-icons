import type { Meta, StoryObj } from '@storybook/react';
import { InstagramSvg } from "./InstagramSvg"

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
    },
} satisfies Meta<typeof InstagramSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const InstagramSvgIcon: Story = {
    args: {
        size: 55,
        originalColors: true,
        id: 3
    },
};

export const InstagramSvgIcon2: Story = {
    args: {
        size: 78,
        originalColors: false,
        id: 4
    },
};

export const InstagramSvgIcon3: Story = {
    args: {
        size: 55,
        originalColors: false,
        id: 5
    },
};
