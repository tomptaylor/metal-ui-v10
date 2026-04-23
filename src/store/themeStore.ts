// src/store/themeStore.ts
import { atom } from 'nanostores';

export const $selectedColor = atom<string>('');

export const updateColor = (val: string) => {
    console.log("Store receiving color:", val);
    $selectedColor.set(val);
};