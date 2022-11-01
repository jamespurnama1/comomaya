import { writable } from 'svelte/store';

export const target = writable({x:0, y:0});
export const data = writable({});