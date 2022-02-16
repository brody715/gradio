import { addMessages, init, getLocaleFromNavigator } from "svelte-i18n";
import en from "../public/lang/en.json";
import es from "../public/lang/es.json";
import ur from "../public/lang/ur.json";
import zh_TW from "../public/lang/zh_TW.json";

addMessages("en", en);
addMessages("es", es);
addMessages("ur", ur);
addMessages("zh_TW", zh_TW);

export function setupi18n() {
	init({
		fallbackLocale: "en",
		initialLocale: getLocaleFromNavigator()
	});
}
