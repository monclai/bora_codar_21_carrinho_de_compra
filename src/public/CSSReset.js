import { createGlobalStyle } from "styled-components";

export const CSSReset = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

:root {
	--color-brand-color: #9333ea;
	--color-brand-color-light: #a855f7;
	--color-brand-color-lighter: #c084fc;
	--color-text-color-primary: #f9fafb;
	--color-text-color-secondary: #e4e4e7;
	--color-close-button-color: #a1a1aa;
	--color-stroke-color: #3f3f46;
	--color-surface-color: #18181b;
	--color-background-color: #09090b;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;

    background-color: var(--color-background-color);
    color: var(--color-text-color-primary);
}




`;
