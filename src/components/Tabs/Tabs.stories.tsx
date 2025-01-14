import React, { useState } from 'react';
import { Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tabs, Tab, TabSize, TabVariant } from './';
import { IconName } from '../Icon';

export default {
  title: 'Tabs',
  parameters: {
    docs: {
      page: (): JSX.Element => (
        <main>
          <article>
            <section>
              <h1>Tabs</h1>
              <p>
                Tabs are used for navigating frequently accessed, distinct
                content categories. Tabs allow for navigation between two or
                more content views and relies on text headers to articulate the
                different sections of content.
              </p>
              <ul>
                <li>Tapping on a item navigates to that section content.</li>
                <li>
                  Tabs use a combination of icons and text or just icons to
                  articulate section content.
                </li>
              </ul>
            </section>
            <section>
              <Stories includePrimary title="" />
            </section>
          </article>
        </main>
      ),
    },
  },
  argTypes: {
    variant: {
      options: [TabVariant.default, TabVariant.small, TabVariant.pill],
      control: { type: 'inline-radio' },
    },
    size: {
      options: [TabSize.Large, TabSize.Medium, TabSize.Small],
      control: { type: 'inline-radio' },
    },
  },
} as ComponentMeta<typeof Tabs>;

const tabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const badgeTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  badgeContent: i,
  ...(i === 4 ? { disabled: true } : {}),
}));

const iconTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  icon: IconName.mdiCardsHeart,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const iconLabelTabs = [1, 2, 3, 4].map((i) => ({
  value: `tab${i}`,
  icon: IconName.mdiCardsHeart,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const scrollableTabs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => ({
  value: `tab${i}`,
  label: `Tab ${i}`,
  ariaLabel: `Tab ${i}`,
  ...(i === 4 ? { disabled: true } : {}),
}));

const Tabs_Story: ComponentStory<typeof Tabs> = (args) => {
  const [activeTabs, setActiveTabs] = useState({ defaultTab: 'tab1' });
  return (
    <Tabs
      {...args}
      onChange={(tab) => setActiveTabs({ ...activeTabs, defaultTab: tab })}
      value={activeTabs.defaultTab}
    />
  );
};

export const Default = Tabs_Story.bind({});
export const Default_Underlined = Tabs_Story.bind({});
export const Default_Loader = Tabs_Story.bind({});
export const Small = Tabs_Story.bind({});
export const With_Badge = Tabs_Story.bind({});
export const Icon = Tabs_Story.bind({});
export const Icon_Label = Tabs_Story.bind({});
export const Scrollable = Tabs_Story.bind({});
export const Pill_Default = Tabs_Story.bind({});
export const Pill_With_Badge = Tabs_Story.bind({});
export const Pill_Icon = Tabs_Story.bind({});
export const Pill_Icon_Label = Tabs_Story.bind({});

// Storybook 6.5 using Webpack >= 5.76.0 automatically alphabetizes exports,
// this line ensures they are exported in the desired order.
// See https://www.npmjs.com/package/babel-plugin-named-exports-order
export const __namedExportsOrder = [
  'Default',
  'Default_Underlined',
  'Default_Loader',
  'Small',
  'With_Badge',
  'Icon',
  'Icon_Label',
  'Scrollable',
  'Pill_Default',
  'Pill_With_Badge',
  'Pill_Icon',
  'Pill_Icon_Label',
];

const tabsArgs: Object = {
  scrollable: false,
  variant: TabVariant.default,
  size: TabSize.Medium,
  underlined: false,
  children: tabs.map((tab) => <Tab key={tab.value} {...tab} />),
  style: {},
};

Default.args = {
  ...tabsArgs,
};

Default_Underlined.args = {
  ...tabsArgs,
  underlined: true,
};

Default_Loader.args = {
  ...tabsArgs,
  children: badgeTabs.map((tab, index) => (
    <Tab key={tab.value} {...tab} loading={index % 2 === 0} />
  )),
};

Small.args = {
  ...tabsArgs,
  size: TabSize.Small,
};

With_Badge.args = {
  ...tabsArgs,
  children: badgeTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Icon.args = {
  ...tabsArgs,
  children: iconTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Icon_Label.args = {
  ...tabsArgs,
  children: iconLabelTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Scrollable.args = {
  ...tabsArgs,
  scrollable: true,
  style: {
    maxWidth: '400px',
  },
  children: scrollableTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Pill_Default.args = {
  ...tabsArgs,
  variant: TabVariant.pill,
};

Pill_With_Badge.args = {
  ...tabsArgs,
  variant: TabVariant.pill,
  children: badgeTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Pill_Icon.args = {
  ...tabsArgs,
  variant: TabVariant.pill,
  children: iconTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};

Pill_Icon_Label.args = {
  ...tabsArgs,
  variant: TabVariant.pill,
  children: iconLabelTabs.map((tab) => <Tab key={tab.value} {...tab} />),
};
