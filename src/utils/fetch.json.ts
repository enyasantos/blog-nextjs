export const fetchJson = async <T>(url: string): Promise<T> => {
  const raw = await fetch(url)
  const jsonData = await raw.json()
  return jsonData
}
