/// import "../../styles/src/lib/design-system/_index.scss";

export const parameters = {
    backgrounds: { disable: true },
    layout: 'centered',
    themes: {
        default: 'light',
        list: [
            { name: 'light', class: ['light', 'bg-color-2'], color: '#E6E6E6' },
            { name: 'dark', class: ['dark', 'bg-color-2'], color: '#333333' }
        ]
    }
}