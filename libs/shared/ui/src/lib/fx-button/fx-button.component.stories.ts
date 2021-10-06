import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { FxButtonComponent } from './fx-button.component';

export default {
    title: 'Components/Button',
    component: FxButtonComponent,
    decorators: [
        moduleMetadata({
            imports: [],
        })
    ],
} as Meta<FxButtonComponent>;

const Template: Story<FxButtonComponent> = (args: FxButtonComponent) => ({
    component: FxButtonComponent,
    props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}