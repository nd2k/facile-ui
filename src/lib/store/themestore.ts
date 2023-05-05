import { writable } from "svelte/store";
import { theme } from "../themes/theme";
import type { Theme } from "default-theme";

export const themeStore = writable<Theme>(theme);