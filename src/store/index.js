import { writable } from "svelte/store";
import { browser } from '$app/env';

const defaultName = ''
const initialValue = browser ? JSON.parse(window.localStorage.getItem('codemap')) ?? defaultName : defaultName;
const userName = writable(initialValue)

userName.subscribe((val) => {
    if (browser) {
        window.localStorage.setItem('codemap', JSON.stringify(val))
    }
})

export default userName