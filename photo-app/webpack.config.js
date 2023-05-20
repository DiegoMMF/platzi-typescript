export const mode = 'production';
export const entry = './src/main.ts';
export const devtool = 'inline-source-map';
export const module = {
    rules: [
        {
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }
    ]
};
export const resolve = {
    extensions: ['.ts', '.js'],
};
export const output = {
    filename: 'bundle.js',
};
