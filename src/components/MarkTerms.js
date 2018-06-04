import { h } from "hyperapp";

// original implementation.
const MarkTerms = ({ words = "", terms = "", labelClass = "" }) => {
  if (!words) return words;
  if (terms) {
    const splitTerms = terms
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      .split(/\s+/);
    const result = [];
    let lastIndex = 0;

    // ['this', 'that'] => /this|that/
    const regex = new RegExp("(" + splitTerms.join("|") + ")", "ig");

    words.replace(regex, (match, group, index) => {
      if (index > lastIndex) {
        result.push(words.slice(lastIndex, index));
      }

      result.push(h("mark", { class: labelClass }, match));
      lastIndex = index + match.length;
    });

    if (lastIndex < words.length) {
      result.push(words.slice(lastIndex));
    }
    return h("div", { style: { whiteSpace: "pre" } }, result);
  } else {
    return [words];
  }

  // end
  const splitedWords = words.split(" ");
  if (!words) return words;
  if (terms) {
    const splitTerms = terms
      .replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
      .split(/\s+/);
    const result = [];
    let lastIndex = 0;

    const regex = new RegExp("(" + splitTerms.join("|") + ")", "ig");

    words.replace(regex, (match, group, index) => {
      if (index > lastIndex) {
        result.push(words.slice(lastIndex, index));
      }

      result.push(h("mark", { class: labelClass }, match));
      lastIndex = index + match.length;
    });

    if (lastIndex < words.length) {
      result.push(words.slice(lastIndex));
    }
    return result;
  } else {
    return [words];
  }
};

export default MarkTerms;
