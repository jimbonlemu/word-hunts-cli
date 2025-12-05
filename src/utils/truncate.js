export function truncate(word, width) {
    if (!word) return "";
    if (width <= 0) return "";
    if (word.length <= width) return word;
    if (width === 1) return word[0];
    return word.slice(0, width - 1) + "…";
}
