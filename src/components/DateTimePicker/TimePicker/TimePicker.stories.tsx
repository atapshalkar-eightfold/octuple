import React, { useState } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import { Stories } from '@storybook/addon-docs';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import TimePicker from './TimePicker';
import { DatePickerShape, DatePickerSize } from '../DatePicker';
import { Stack } from '../../Stack';
import { Button, ButtonSize, ButtonVariant } from '../../Button';

const { RangePicker } = TimePicker;

export default {
  title: 'Time Picker',
  parameters: {
    docs: {
      page: (): JSX.Element => (
        <main>
          <article>
            <section>
              <h1>Time Picker</h1>
              <p>
                Use the <b>TimePicker</b> To select or input a time. By clicking
                the input box, you can select a time from a popup.
              </p>
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
    allowClear: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    autoFocus: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    bordered: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    changeOnBlur: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    disabled: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    dropdownClassNames: {
      control: { type: 'text' },
    },
    inputReadOnly: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    open: {
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    shape: {
      options: [
        DatePickerShape.Rectangle,
        DatePickerShape.Pill,
        DatePickerShape.Underline,
      ],
      control: { type: 'inline-radio' },
    },
    size: {
      options: [
        DatePickerSize.Flex,
        DatePickerSize.Large,
        DatePickerSize.Medium,
        DatePickerSize.Small,
      ],
      control: { type: 'radio' },
    },
    status: {
      options: ['error', 'warning'],
      control: { type: 'radio' },
    },
    popupPlacement: {
      options: ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'],
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof TimePicker>;

const Basic_Story: ComponentStory<typeof TimePicker> = (args) => {
  const onChange = (time: Dayjs, timeString: string) => {
    console.log(time, timeString);
  };

  return (
    <TimePicker
      {...args}
      defaultPickerValue={dayjs('00:00:00', 'HH:mm:ss')}
      onChange={onChange}
    />
  );
};

const Disabled_Story: ComponentStory<typeof TimePicker> = (args) => {
  const onChange = (time: Dayjs, timeString: string) => {
    console.log(time, timeString);
  };

  return (
    <TimePicker
      {...args}
      defaultPickerValue={dayjs('00:00:00', 'HH:mm:ss')}
      onChange={onChange}
    />
  );
};

const Controlled_Story: ComponentStory<typeof TimePicker> = (args) => {
  const [value, setValue] = useState<Dayjs | null>(null);

  const onChange = (time: Dayjs) => {
    setValue(time);
    console.log(time);
  };
  return <TimePicker {...args} value={value} onChange={onChange} />;
};

const Hour_and_Minute_Story: ComponentStory<typeof TimePicker> = (args) => {
  const format = 'HH:mm';
  return (
    <TimePicker
      {...args}
      defaultValue={dayjs('12:08', format)}
      format={format}
    />
  );
};

const Interval_Story: ComponentStory<typeof TimePicker> = (args) => {
  return <TimePicker {...args} />;
};

const Extra_Footer_Story: ComponentStory<typeof TimePicker> = (args) => {
  const [open, setOpen] = useState(false);

  return (
    <TimePicker
      {...args}
      open={open}
      onOpenChange={setOpen}
      renderExtraFooter={() => (
        <Button
          size={ButtonSize.Small}
          variant={ButtonVariant.Primary}
          onClick={() => setOpen(false)}
          text={'OK'}
        />
      )}
    />
  );
};

const Time_Range_Picker_Story: ComponentStory<typeof RangePicker> = (args) => {
  return <TimePicker.RangePicker {...args} />;
};

const Single_Borderless_Story: ComponentStory<typeof TimePicker> = (args) => {
  return (
    <Stack direction={'vertical'} flexGap={'xxl'}>
      <TimePicker {...args} />
    </Stack>
  );
};

const Range_Borderless_Story: ComponentStory<typeof RangePicker> = (args) => {
  return (
    <Stack direction={'vertical'} flexGap={'xxl'}>
      <RangePicker {...args} />
    </Stack>
  );
};

const Single_Status_Story: ComponentStory<typeof TimePicker> = (args) => {
  return (
    <Stack direction={'vertical'} flexGap={'xxl'}>
      <TimePicker {...args} status={'error'} />
      <TimePicker {...args} status={'warning'} />
    </Stack>
  );
};

const Range_Status_Story: ComponentStory<typeof RangePicker> = (args) => {
  return (
    <Stack direction={'vertical'} flexGap={'xxl'}>
      <TimePicker.RangePicker {...args} status={'error'} />
      <TimePicker.RangePicker {...args} status={'warning'} />
    </Stack>
  );
};

export const Basic = Basic_Story.bind({});
export const Disabled = Disabled_Story.bind({});
export const Controlled = Controlled_Story.bind({});
export const Hour_and_Minute = Hour_and_Minute_Story.bind({});
export const Interval = Interval_Story.bind({});
export const Extra_Footer = Extra_Footer_Story.bind({});
export const Time_Range_Picker = Time_Range_Picker_Story.bind({});
export const Single_Borderless = Single_Borderless_Story.bind({});
export const Range_Borderless = Range_Borderless_Story.bind({});
export const Single_Status = Single_Status_Story.bind({});
export const Range_Status = Range_Status_Story.bind({});

// Storybook 6.5 using Webpack >= 5.76.0 automatically alphabetizes exports,
// this line ensures they are exported in the desired order.
// See https://www.npmjs.com/package/babel-plugin-named-exports-order
export const __namedExportsOrder = [
  'Basic',
  'Disabled',
  'Controlled',
  'Hour_and_Minute',
  'Interval',
  'Extra_Footer',
  'Time_Range_Picker',
  'Single_Borderless',
  'Range_Borderless',
  'Single_Status',
  'Range_Status',
];

const pickerArgs: Object = {
  classNames: 'my-picker-class',
  id: 'myPickerInputId',
  shape: DatePickerShape.Rectangle,
  size: DatePickerSize.Medium,
  changeOnBlur: true,
  nowButtonProps: null,
  okButtonProps: { variant: ButtonVariant.Primary },
  showNow: true,
  showOk: true,
};

Basic.args = {
  ...pickerArgs,
};

Disabled.args = {
  ...pickerArgs,
  disabled: true,
};

Controlled.args = {
  ...pickerArgs,
};

Hour_and_Minute.args = {
  ...pickerArgs,
};

Interval.args = {
  ...pickerArgs,
  minuteStep: 15,
  secondStep: 10,
};

Extra_Footer.args = {
  ...pickerArgs,
};

Time_Range_Picker.args = {
  ...pickerArgs,
};

Single_Borderless.args = {
  ...pickerArgs,
  bordered: false,
};

Range_Borderless.args = {
  ...pickerArgs,
  bordered: false,
};

Single_Status.args = {
  ...pickerArgs,
};

Range_Status.args = {
  ...pickerArgs,
};
