import type { Meta, StoryObj } from '@storybook/react';
import { WhatsappSvg } from "./WhatsappSvg"

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
    title: 'React Svg Icons/Social Media/WhatsappSvg',
    component: WhatsappSvg,
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
        // outerBorderColor prop
        outerBorderColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color of outer border",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#cfd8dc" },
            },
        },
        // innerBorderColor prop
        innerBorderColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color of inner border",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#fff" },
            },
        },
        // aroundHandsetColor prop
        aroundHandsetColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color of around handset",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#40c351" },
            },
        },
        // handsetColor prop
        handsetColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color of  handset",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#fff" },
            },
        }

    },
} satisfies Meta<typeof WhatsappSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Icon1: Story = {
    args: {
        size: 55,
        outerBorderColor: "#cfd8dc",
        innerBorderColor: "#fff",
        aroundHandsetColor: "#40c351",
        handsetColor: "#fff",
    },
};

export const Icon2: Story = {
    args: {
        size: 55,
        outerBorderColor: "#cfd8dc",
        innerBorderColor: "#43C354",
        aroundHandsetColor: "#F4F7F7",
        handsetColor: "#43C354",
    },
};