export interface Filters {
    [key: string]: number | string;
}
export type ThemeContextType = {
    theme: 'dark' | 'light'
    setTheme: (theme: 'dark' | 'light') => void
};
