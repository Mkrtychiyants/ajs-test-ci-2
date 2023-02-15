export default function matchers(items) {
  return items.sort((a, b) => b.health - a.health);
}
