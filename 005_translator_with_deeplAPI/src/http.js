import axios from "axios";
import { URL, API } from "./data/deeplapi";

export async function submitTranslationRequest(translationForm) {
  //  const params = {
  //    auth_key: API,
  //    text: translationForm.text,
  //    source_lang:
  //      translationForm.source_lang === "none"
  //        ? null
  //        : translationForm.source_lang,
  //    target_lange: translationForm.target_lang,
  //  };
  let sourceLang = translationForm.source_lang;
  sourceLang = sourceLang === "none" ? null : sourceLang;

  const response = await axios.post(URL, null, {
    params: {
      auth_key: API,
      text: translationForm.text,
      source_lang: sourceLang,
      target_lang: translationForm.target_lang,
    },
  });
  return response.data.translations;
}
