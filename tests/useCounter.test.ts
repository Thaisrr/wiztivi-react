import {describe, expect, it} from "vitest";
import {act, renderHook} from "@testing-library/react";
import {useCounter} from "../src/utils/hooks/useCounter";

describe("useCounter", () => {

    it('should use default value', () => {
        const { result } = renderHook(() => useCounter(20));
        expect(result.current.count).toBe(20);
    })

    it('should increment', () => {
        const {result} = renderHook(() => useCounter(20));
        act(() => result.current.increment());
        expect(result.current.count).toBe(21);

    })

})