import axios from "axios";
import { URL, API } from "./data/deeplapi";

export async function submitTranslationRequest(translationForm) {
  let sourceLang = translationForm.source_lang;
  sourceLang = sourceLang === "none" ? null : sourceLang;

  try {
    const response = await axios.post(URL, null, {
      params: {
        auth_key: API,
        text: translationForm.text,
        source_lang: sourceLang,
        target_lang: translationForm.target_lang,
      },
    });

    return response.data.translations;
  } catch (error) {
    console.error("Error during translation:", error);
    throw error;
  }
}
