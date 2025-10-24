type RegistryKey = string;

const registry = new Map<RegistryKey, unknown>();

export const Registry = {
    add<T = unknown>(name: RegistryKey, value: T): void {
        registry.set(name, value);
    },

    get<T = unknown>(name: RegistryKey): T | undefined {
        return registry.get(name) as T | undefined;
    },

    has(name: RegistryKey): boolean {
        return registry.has(name);
    },

    remove(name: RegistryKey): void {
        registry.delete(name);
    },
};
