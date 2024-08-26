import type { Meta, StoryObj } from "@storybook/react";
import Example from "./__docs__/Example";

const meta: Meta<typeof Example> = {
  title: "ButtonCopy",
  component: Example,
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Primary: Story = {
  args: {
    text: "Button Copy Primary",
    primary: true,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
export const Secondary: Story = {
  args: {
    text: "Button Copy Secondary",
    primary: false,
    disabled: false,
    size: "small",
    onClick: () => console.log("Button"),
  },
};
