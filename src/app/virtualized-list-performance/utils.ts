export const generateData = (count = 10000) => {
    return Array.from({ length: count }, (_, i) => ({
        id: i + 1,
        name: `User ${i + 1}`,
        email: `user${i + 1}@example.com`,
        country: ["India", "USA", "Germany", "Japan"][i % 4],
    }));
};
