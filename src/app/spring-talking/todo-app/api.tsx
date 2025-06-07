const API_URL = "http://localhost:8080/api/todos";

export async function getTodos() {
    const res = await fetch(API_URL);
    return res.json();
}

export async function createTodo(todo: any) {
    const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
    });
    return res.json();
}

export async function updateTodo(id: any, todo: any) {
    const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(todo),
    });
    return res.json();
}

export async function deleteTodo(id: any) {
    await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
    });
}
