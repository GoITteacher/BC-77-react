/**
 * 1. Стан для контрольованого елемента
 * type SortOrder = "asc" | "desc"
 * 2. Зробити SortFilter контрольованим value та onChange
 * 3. Додати до getTasks параметр та query-параметр order
 * 4. Додати значення сортування в queryKey
 */

export default function SortFilter() {
  return (
    <select>
      <option value="asc">Ascending</option>
      <option value="desc">Descending</option>
    </select>
  );
}
