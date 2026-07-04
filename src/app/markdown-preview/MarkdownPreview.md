Perfect — here’s what’s functionally required for a **Markdown Editor (with Preview)** machine coding round:

---

### 🧩 Core Functional Requirements

1. **Editable Markdown Input**

   * A text area where the user types raw Markdown (`# Heading`, `**bold**`, etc.).
   * The content updates state on every change.

2. **Real-Time Preview**

   * A preview panel that renders the Markdown input as formatted HTML in real-time.
   * Example: typing `**Hello**` shows **Hello** in preview.

3. **Two-Pane Layout**

   * Left side: editor (textarea).
   * Right side: rendered preview.
   * Should resize or scroll independently but stay synced visually.

---

### ⚙️ Functional Behaviors

4. **Live Synchronization**

   * When user types in the editor, the preview updates instantly.

5. **Markdown Parsing**

   * Use a markdown parser (e.g., `marked`, `markdown-it`) internally to convert Markdown → HTML.

6. **Sanitization**

   * Sanitize output HTML (for XSS prevention) before rendering.

7. **Optional: Toolbar**

   * Basic formatting buttons like **Bold**, *Italic*, `Code`, etc.
     → Inserts Markdown syntax into text.

8. **Optional: Mode Switching**

   * Toggle between **Edit mode**, **Preview mode**, and **Split mode**.

9. **Keyboard Shortcuts**

   * Support common shortcuts like `Ctrl+B` (bold), `Ctrl+I` (italic), etc.

---

### 🎨 UX / UI Considerations

10. **Resizable Panels**

    * User can drag divider to adjust editor/preview width.

11. **Scroll Sync**

    * Scrolling editor should reflect corresponding position in preview.

12. **Theme Support (Optional)**

    * Light/Dark mode toggle.

13. **Persistence (Optional)**

    * Save draft to `localStorage` and restore on reload.

---

### ✅ Summary: What’s Expected

| Category | Requirements                              |
| -------- | ----------------------------------------- |
| Core     | Editor + Live Preview + Markdown Parser   |
| Behavior | Real-time update, Sanitization            |
| Layout   | Split or toggleable editor/preview        |
| UX       | Optional toolbar, scroll sync, shortcuts  |
| Bonus    | Dark mode, persistence, responsive design |

---

You’ll be evaluated mainly on **clean architecture**, **state management**, and **smooth real-time preview updates**, not just UI polish.
