import { addons } from '@storybook/addons';
import { create } from '@storybook/theming/create';

const theme = create({
    base: 'dark',
    colorPrimary: 'white',
    colorSecondary: 'green'
});

addons.setConfig({
    theme
});
