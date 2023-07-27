# Effects

1. Values declared inside the component body are “reactive”.
2. Event handlers run in response to specific interactions.
3. Effects run whenever synchronization is needed.
4. Logic inside event handlers is not reactive.
5. Logic inside Effects is reactive.
6. Dependencies should always match the code.
7. When you’re not happy with your dependencies, what you need to edit is the code.
8. If you want to read the latest value without “reacting” it, extract an Effect Event from your Effect.
9. In JavaScript, objects and functions are considered different if they were created at different times
