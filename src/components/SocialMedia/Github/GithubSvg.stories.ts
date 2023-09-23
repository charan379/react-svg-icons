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
            control: { type: 'number', min: 24, max: 1024, step: 2 },
            description: "Size of icon to be rendered",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 55 },
            },
        },

        // catOuterLeftColor prop
        catOuterLeftColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at outer left of cat",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#4c4c4c" },
            },
        },

        // catOuterRightColor prop
        catOuterRightColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at outer right of cat",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#343434" },
            },
        },

        // catOutlineColor prop
        catOutlineColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at outline color of cat",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "" },
            },
        },

        // catOutlineOpacity Prop
        catOutlineOpacity: {
            control: { type: 'number', min: 0, max: 1, step: 0.01 },
            description: "Opacity of cat outline",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0.05 },
            }
        },

        // catSkinColor prop
        catSkinColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered as cat skin (inner outline) ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "" },
            },
        },

        // catSkinOpacity prop
        catSkinOpacity: {
            control: { type: 'number', min: 0, max: 1, step: 0.01 },
            description: "Opacity of cat skin",
            table: {
                type: { summary: 'number' },
                defaultValue: { summary: 0.07 },
            }
        },

        // catInnnerColor prop
        catInnnerColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at inner shape of cat ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#fff" },
            },
        },
    },
} satisfies Meta<typeof GithubSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Example1: Story = {
    args: {
        size: 55,
        catOuterLeftColor: "#4c4c4c",
        catOuterRightColor: "#343434",
        catOutlineColor: "",
        catOutlineOpacity: 0.05,
        catSkinColor: "",
        catSkinOpacity: 0.07,
        catInnnerColor: "#fff",
    },
};

export const Example2: Story = {
    parameters: {
        backgrounds: { default: 'dark' },
    },
    args: {
        size: 55,
        catOuterLeftColor: "rgba(255, 0, 0, 0.3)",
        catOuterRightColor: "rgba(0, 0, 0, 0.3)",
        catOutlineColor: "#ffffff",
        catOutlineOpacity: 0.04,
        catSkinColor: "#ffffff",
        catSkinOpacity: 0.09,
        catInnnerColor: "#ffffff",
    },
};