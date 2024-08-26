import React from 'react';
import App from './App';
import { ActiveLinkProvider } from "./context/ActiveLinkContext"; // Ensure context works

export default {
  title: 'App',
  component: App,
  decorators: [
    (Story) => (
      <ActiveLinkProvider>
        <Story />
      </ActiveLinkProvider>
    ),
  ],
};

const Template = (args) => <App {...args} />;

export const DefaultApp = Template.bind({});
DefaultApp.args = {};
