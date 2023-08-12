# How to remove unnecessary Effects

There are two common cases in which you don’t need Effects:

- You don’t need Effects to transform data for rendering.
- You don’t need Effects to handle user events.

## Notes

- To cache expensive calculations, add useMemo instead of useEffect.
- To reset the state of an entire component tree, pass a different key to it.
- Each Effect describes a separate synchronization process that can start and stop.
- Values declared inside the component body are “reactive”.
