import type { Meta, StoryObj } from '@storybook/react';
import { InstagramSvg, InstagramSvgColorTypes } from "./InstagramSvg"

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
        // colorsType prop
        colorsType: {
            options: Object.values(InstagramSvgColorTypes),
            mapping: Object.values(InstagramSvgColorTypes),
            control: {
                type: 'select',
                lables: Object.keys(InstagramSvgColorTypes)
            },
            description: "Select whether to render original colors for custom colors provided as props",
            table: {
                type: { summary: 'string' },
                defaultValue: { summary: InstagramSvgColorTypes.ORIGINAL },
            },
        },
        // thickLinesColor prop
        thickLinesColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at thickLines ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#00000" },
            },
        },
        // thinLinesColor prop
        thinLinesColor: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at thinLines ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "#fff" },
            },
        },
        // northWestShade prop
        northWestShade: {
            control: { type: 'color', presetColors: [], },
            description: "Color to be rendered at northWestShade ",
            table: {
                type: { summary: 'color' },
                defaultValue: { summary: "" },
            },
        },
        // radientsUrlid prop
        radientsUrlid: {
            control: { type: 'text' },
            description: "Radients Url unique id, if rendering same icon multiple times its mandatory to differ colors from one to other icons.",
            table: {
                type: { summary: 'string/number' },
                defaultValue: { summary: 234 },
            },
        },
    },
} satisfies Meta<typeof InstagramSvg>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args

export const DocsRenderer: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorTypes.ORIGINAL,
        radientsUrlid: "3"
    },
};

export const Example1: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorTypes.ORIGINAL,
        radientsUrlid: "2"
    },
};

export const Example2: Story = {
    args: {
        size: 78,
        colorsType: InstagramSvgColorTypes.CUSTOM,
        radientsUrlid: 4,
        northWestShade: "yellow"
    },
};

export const Example3: Story = {
    args: {
        size: 55,
        colorsType: InstagramSvgColorTypes.CUSTOM,
        radientsUrlid: 5
    },
};
