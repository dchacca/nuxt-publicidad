/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
    theme: {
        extend: {
            colors: {
                'primary': {
                    100: '#E9EAEA',
                    200: '#C8CACB',
                    300: '#A7A9AB',
                    400: '#66696D',
                    500: '#24292E',
                    600: '#202529',
                    700: '#16191C',
                    800: '#101215',
                    900: '#0B0C0E',
                },
                'secondary': {
                    100: '#FFF7E9',
                    200: '#FEEBC7',
                    300: '#FEDFA5',
                    400: '#FDC662',
                    500: '#FCAE1E',
                    600: '#E39D1B',
                    700: '#976812',
                    800: '#714E0E',
                    900: '#4C3409',
                },

                alert: '#45334',
                info: '#abdcff',
                success: '#8ce6b0',
                warning: '#ffd77a',
                error: '#ffb08f'
            }
        }
    },
    variants: {},
    plugins: [
        require('@tailwindcss/custom-forms')
    ]
}
