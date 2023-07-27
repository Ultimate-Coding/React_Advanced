# Introduction

When you want a component to “remember” some information, but you don’t want that information to trigger new renders, you can use a ref.

- Refs are an escape hatch to hold onto values that aren’t used for rendering, but most often you’ll use them to hold DOM elements.
- A ref is a plain JavaScript object with a single property called current, which you can read or set.
- You can ask React to give you a ref by calling the useRef Hook.
- You instruct React to put a DOM node into myRef.current by passing <div ref={myRef}>.
- Usually, you will use refs for non-destructive actions like focusing, scrolling, or measuring DOM elements.
- A component doesn’t expose its DOM nodes by default. You can opt into exposing a DOM node by using forwardRef and passing the second ref argument down to a specific node
