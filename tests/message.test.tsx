import React from "react";
import {describe, it, expect} from "vitest";
import {render} from "@testing-library/react";
import {Message} from "../src/layout/Message";

describe("Message Component", () => {
    it('should render', () => {
        const {container} = render(<Message level="info">Info</Message>);
        expect(container.querySelector('.alert')).not.toBeNull();
    });

    it('should render children', () => {
        const {container} = render(<Message level="info">Info</Message>);
        expect(container.textContent).toContain('Info');
    });

    it('should render with info class', () => {
        const {container} = render(<Message level="info">Info</Message>);
        expect(container.querySelector('.alert-info')).not.toBeNull();
    });

    it('should render correctly - snapshot', () => {
        const {container} = render(<Message level="info">Info</Message>);
        expect(container.firstChild).toMatchInlineSnapshot(`
          <div
            class="alert alert-info"
            role="alert"
          >
            Info
          </div>
        `);
    })


})