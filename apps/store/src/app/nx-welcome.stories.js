import NxWelcome from './nx-welcome';

export default {
  component: NxWelcome,
  title: 'NxWelcome',
};

const Template = (args) => <NxWelcome {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
