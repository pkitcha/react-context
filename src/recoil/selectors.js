import { selector } from "recoil";
import { counterState } from "./atoms";

export const incrementSelector = selector({
    key: 'incrementSelector',
    get: ({ get }) => {
        const state = get(counterState);

        return { count: state.count + 1};
    },
});