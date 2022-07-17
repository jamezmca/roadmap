import { writable } from "svelte/store";
import { browser } from '$app/env';

const defaultObj = { name: '', progress: {} }
const initialValue = browser ? JSON.parse(window.localStorage.getItem('codemap')) ?? defaultObj : defaultObj;
const userName = writable(initialValue)

userName.subscribe((val) => {
    if (browser) {
        window.localStorage.setItem('codemap', JSON.stringify(val))
    }
})

export default userName