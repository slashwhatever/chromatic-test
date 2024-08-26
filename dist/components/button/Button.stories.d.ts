import { Meta, StoryObj } from '@storybook/react';
import { default as Example } from './__docs__/Example';

declare const meta: Meta<typeof Example>;
export default meta;
type Story = StoryObj<typeof Example>;
export declare const Primary: Story;
export declare const Secondary: Story;
