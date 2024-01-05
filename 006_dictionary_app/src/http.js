const URL = "https://api.dictionaryapi.dev/api/v2/entries/en/";

export async function requestDictResult(word) {
  const response = await fetch(URL + word);
  const result = await response.json();

  if (!response.ok) {
    const error = new Error("unable to get dictionary result.");
    throw error;
  }
  return result;
}
