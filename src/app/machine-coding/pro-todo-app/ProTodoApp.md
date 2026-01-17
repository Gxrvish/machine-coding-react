
# ✅ **Todo App – Requirements (Context or Redux Version)**

This challenge is about building a *state-managed* Todo application using **either React Context** or **Redux Toolkit**.
The focus is **state architecture**, **data flow**, and **predictable updates**, not UI beauty.

---

## 🎯 **Core Functional Requirements**

### 1️⃣ **Add Todo**

* User can add a new todo item.
* Todo must have at minimum:

  * `id`
  * `title`
  * `status` (default: "active" / not completed)
* Input should be validated (non-empty).

---

### 2️⃣ **Toggle Todo**

* Clicking a todo allows toggling its status:

  * active → completed
  * completed → active
* UI must reflect status changes immediately.

---

### 3️⃣ **Delete Todo**

* User can delete a todo using a delete button/icon.
* State must update correctly.

---

### 4️⃣ **Edit Todo**

* User can update the title of an existing todo.
* Should support:

  * inline editing, OR
  * a dedicated editing UI/modal
* Editing should update global state, not local component state.

---

## 🎛️ **State Management Requirements**

### 5️⃣ **Global State with Context or Redux**

* All todos stored in a **global store**, not inside a component.
* Actions must follow predictable state transitions:

  * ADD_TODO
  * REMOVE_TODO
  * TOGGLE_TODO
  * UPDATE_TODO
  * (optional) CLEAR_COMPLETED
* UI reads from the global state only.

---

### 6️⃣ **Immutable Updates**

* No direct mutation of the existing state array.
* New arrays/objects must be returned on every update.

---

## 📂 **Filtering Requirements**

### 7️⃣ **Views / Filters**

The user must be able to switch between:

* **All**
* **Active**
* **Completed**

Filtering should not destroy state — only change what’s shown.

---

### 8️⃣ **Persistent View State (optional)**

* Selected filter tab should remain when reloading components.
* Not required to persist across browser refresh unless specified.

---

## 🗜️ **Optional Enhancements (Bonus)**

### ⭐ Persistent Storage

* Store todos in `localStorage`, sync on load/save.

### ⭐ Bulk Actions

* “Clear completed” button
* “Mark all completed” toggle

### ⭐ Counters

* Count of active items (e.g., “2 items left”).

### ⭐ Accessibility & Navigation

* Keyboard navigation support
* ARIA roles for list items

### ⭐ Error Handling

* Prevent duplicate titles
* Show validation messages

---

## 🧪 **Interview Focus Points**

The interviewer usually watches for:

* Can you design clean global state?
* Do you know when to use Context vs Redux?
* Do you isolate business logic from UI?
* Do you avoid prop-drilling?
* Do you structure actions and reducers predictably?
* Do you handle state immutably?
* Do you maintain performance (avoid unnecessary re-renders)?
