import type { Meta, StoryObj } from '@storybook/react';
import { EmailSvg } from "./EmailSvg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'React Svg Icons/Communication/EmailSvg',
    component: EmailSvg,
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
        // envelopTopColor prop
        envelopTopColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover top",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#f5f5f5" },
            },
        },
        // envelopTopBorderColor prop
        envelopTopBorderColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover border at top",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#e84f4b" },
            },
        },
        // envelopLeftBorderColor prop
        envelopLeftBorderColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at left side border",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#ca3737" },
            },
        },
        // envelopRightBorderColor prop
        envelopRightBorderColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at right side border",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#ca3737" },
            },
        },
        // envelopInnerTopLeftColor prop
        envelopInnerTopLeftColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at top left of inner cover ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#d9d9d9" },
            },
        },
        // envelopInnerLeftColor prop
        envelopInnerLeftColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at left of inner cover ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#e0e0e0" },
            },
        },
        // envelopInnerRightColor prop
        envelopInnerRightColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at right of inner cover ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#e0e0e0" },
            },
        },
        // envelopInnerBottomLeftColor prop
        envelopInnerBottomLeftColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered in envelop cover at botton left inner cover ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#eeeeee" },
            },
        },
    },
} satisfies Meta<typeof EmailSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
// Example 1
export const Example1: Story = {
    args: {
        size: 55,
        envelopTopColor: "#f5f5f5",
        envelopTopBorderColor: "#e84f4b",
        envelopLeftBorderColor: "#ca3737",
        envelopRightBorderColor: "#ca3737",
        envelopInnerTopLeftColor: "#d9d9d9",
        envelopInnerLeftColor: "#e0e0e0",
        envelopInnerRightColor: "#e0e0e0",
        envelopInnerBottomLeftColor: "#eeeeee",
    },
};

// Example 2
export const Example2: Story = {
    args: {
        size: 55,
        envelopTopColor: "#0684de",
        envelopTopBorderColor: "hsla(256, 93%, 48%, 0.93)",
        envelopLeftBorderColor: "hsla(256, 91%, 55%, 0.1)",
        envelopRightBorderColor: "hsla(256, 91%, 55%, 0.1)",
        envelopInnerTopLeftColor: "#097acc",
        envelopInnerLeftColor: "#0882d9",
        envelopInnerRightColor: "#0a73bf",
        envelopInnerBottomLeftColor: "#1280ce",
    },
};

// Example 3
export const Example3: Story = {
    args: {
        size: 55,
        envelopTopColor: "#097acc",
        envelopTopBorderColor: "#fff",
        envelopLeftBorderColor: "#28AFEA",
        envelopRightBorderColor: "#0B88DA",
        envelopInnerTopLeftColor: "#28AFEA",
        envelopInnerLeftColor: "#28AFEA",
        envelopInnerRightColor: "#0B88DA",
        envelopInnerBottomLeftColor: "#0B88DA",
    },
};