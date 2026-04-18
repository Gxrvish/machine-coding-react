# Reusable Component Playbook

Use this checklist when solving any challenge in this repo.

A solution is considered strong only when it is both:

- Correct for the current requirement.
- Reusable for future variations.

## 1. Start With a Clear Contract

Define the component API before writing logic.

- Component purpose in one sentence.
- Input props and their types.
- Output events/callbacks.
- Default behavior when props are omitted.

Example contract shape:

```ts
interface ComponentProps {
    value?: string;
    defaultValue?: string;
    onChange?: (nextValue: string) => void;
    disabled?: boolean;
}
```

## 2. Decide State Ownership Early

Choose one of these patterns explicitly:

- Controlled: parent owns state, component emits changes.
- Uncontrolled: component owns state with sensible defaults.
- Hybrid: support both `value` and `defaultValue` with clear precedence.

Rules:

- Avoid hidden state transitions.
- Avoid prop/state duplication unless there is a synchronization strategy.

## 3. Separate Logic From Presentation

When complexity grows, split into layers:

- Pure logic utilities or hooks for state transitions.
- Presentational component for rendering.

Benefits:

- Easier to test and reason about.
- Easier to restyle without breaking behavior.

## 4. Design for Extensibility

Avoid hardcoded values when the consumer might need control.

Make these configurable when appropriate:

- Labels and text content.
- Item renderers.
- Sorting/filter behavior.
- Limits and timing values.

Prefer composition over many boolean props.

## 5. Accessibility Baseline

Every challenge should satisfy basic accessibility behavior:

- Interactive elements are keyboard reachable.
- Semantic roles are meaningful.
- Focus is managed in overlays/dialogs/popovers.
- Status changes are announced clearly in UI text.

## 6. Performance Baseline

Before adding optimizations, identify bottlenecks.

Common patterns:

- Memoize expensive derived lists.
- Avoid creating unstable callbacks in deep trees unless needed.
- Virtualize large lists.
- Batch state updates where possible.

## 7. Edge Cases and Failure Modes

Treat edge-case handling as a first-class requirement.

Examples:

- Empty data.
- Duplicate input.
- Rapid repeated interactions.
- Async race conditions.
- Partial failures and retries.

## 8. Interview Evaluation Rubric

Interviewers usually score these dimensions:

- Correctness.
- API clarity.
- Readability and maintainability.
- Reusability and extensibility.
- Edge-case handling.
- Accessibility awareness.
- Performance awareness.

## 9. Definition of Done

Use this checklist before considering a challenge complete.

- [ ] Problem requirements are fully covered.
- [ ] Component API is typed and documented.
- [ ] State ownership model is explicit.
- [ ] Edge cases are handled.
- [ ] UI behavior is accessible by keyboard.
- [ ] Implementation can be reused with minimal changes.
- [ ] Tradeoffs are explained in comments or notes.

## 10. Good Interview Narrative

Be able to explain:

1. Why this API design was chosen.
2. How state flows through the component.
3. Which edge cases were prioritized.
4. What would be improved with more time.

Strong communication plus a clean implementation is what makes a solution interview-ready.
