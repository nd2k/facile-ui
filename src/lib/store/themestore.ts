import { writable } from "svelte/store";
import type { Theme } from "interfaces";
import { theme } from "../themes/theme";

export const themeStore = writable<Theme>(theme);