// This is auto-generated file
export default {
  "textlint-rule-alex": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"allow":{"title":"Ignoring type of message","type":"array","items":{"type":"string","minLength":1},"uniqueItems":true}}}]},
  "textlint-rule-general-novel-style-ja": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"chars_leading_paragraph":{"title":"Characters allowed to lead a paragraph","type":"string","default":"　「『【〈《（(“\"‘'［[〔｛{＜<"},"no_punctuation_at_closing_quote":{"title":"Disallow to put punctuations before closing quote","type":"boolean","default":true},"space_after_marks":{"title":"Require a space after exclamation and question marks","type":"boolean","default":true},"even_number_ellipsises":{"title":"Require even number of ellipsises","type":"boolean","default":true},"even_number_dashes":{"title":"Require even number of dashes","type":"boolean","default":true},"appropriate_use_of_punctuation":{"title":"Disallow consecutive punctuations","type":"boolean","default":true},"appropriate_use_of_interpunct":{"title":"Disallow consecutive interpuncts","type":"boolean","default":true},"appropriate_use_of_choonpu":{"title":"Disallow consecutive cho-onpu","type":"boolean","default":true},"appropriate_use_of_minus_sign":{"title":"Require number after minus sign","type":"boolean","default":true},"max_arabic_numeral_digits":{"title":"Maximum digits of Arabic numerals","oneOf":[{"type":"integer"},{"enum":[false]}],"default":2}}}]},
  "textlint-rule-incremental-headers": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-ja-yahoo-kousei": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"ignores":{"title":"Ignoring type of message","type":"object","additionalProperties":{"type":"array","items":{"type":"string","minLength":1}}}}}]},
  "textlint-rule-max-appearence-count-of-words": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"limit":{"title":"Maximum apprearance count of words","type":"integer","minimum":1,"default":4}}}]},
  "textlint-rule-max-length-of-title": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"#":{"title":"Maximum length of h1 title","type":"integer","default":32},"##":{"title":"Maximum length of h2 title","type":"integer"},"###":{"title":"Maximum length of h3 title","type":"integer"},"####":{"title":"Maximum length of h4 title","type":"integer"},"#####":{"title":"Maximum length of h5 title","type":"integer"},"######":{"title":"Maximum length of h6 title","type":"integer"}}}]},
  "textlint-rule-max-number-of-lines": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"max":{"title":"Maximum number of lines","type":"integer","minimum":1,"default":300}}}]},
  "textlint-rule-max-ten": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"max":{"title":"Maximum number of \"、\" allowed in a sentence","type":"integer","minimum":1,"default":3},"strict":{"title":"Strict check","type":"boolean","default":false}}}]},
  "textlint-rule-ng-word": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"words":{"title":"NG words","type":"array","items":{"type":"string","minLength":1},"uniqueItems":true}}}]},
  "textlint-rule-no-double-negative-ja": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-no-doubled-conjunction": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-no-doubled-conjunctive-particle-ga": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-no-doubled-joshi": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"min_interval":{"title":"Minimum interval of joshi","type":"integer","minimum":1,"default":1},"strict":{"title":"Strict check","type":"boolean","default":false}}}]},
  "textlint-rule-no-dropping-the-ra": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-no-mix-dearu-desumasu": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-no-start-duplicated-conjunction": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"interval":{"title":"Interval of sentences","type":"integer","minimum":1,"default":2}}}]},
  "textlint-rule-no-todo": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-preset-japanese": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"max-ten":{"type":"object","properties":{"max":{"title":"Maximum number of \"、\" allowed in a sentence","type":"integer","minimum":1,"default":3},"strict":{"title":"Strict check","type":"boolean","default":false}}},"no-double-negative-ja":{"type":"boolean","default":false},"no-doubled-joshi":{"type":"object","properties":{"min_interval":{"title":"Minimum interval of joshi","type":"integer","minimum":1,"default":1},"strict":{"title":"Strict check","type":"boolean","default":false}}},"sentence-length":{"type":"object","properties":{"max":{"title":"Maximum length of a sentence","type":"integer","minimum":1,"default":100}}},"no-start-duplicated-conjunction":{"type":"object","properties":{"interval":{"title":"Interval of sentences","type":"integer","minimum":1,"default":2}}},"spellcheck-tech-word":{"type":"boolean","default":false},"no-mix-dearu-desumasu":{"type":"boolean","default":false}}}]},
  "textlint-rule-preset-jtf-style": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"1.1.1.本文":{"type":"boolean","default":true},"1.1.2.見出し":{"type":"boolean","default":true},"1.1.3.箇条書き":{"type":"boolean","default":true},"1.1.5.図表のキャプション":{"type":"boolean","default":true},"1.2.1.句点(。)と読点(、)":{"type":"boolean","default":true},"1.2.2.ピリオド(.)とカンマ(,)":{"type":"boolean","default":true},"2.1.2.漢字":{"type":"boolean","default":false},"2.1.5.カタカナ":{"type":"boolean","default":false},"2.1.6.カタカナの長音":{"type":"boolean","default":false},"2.1.8.算用数字":{"type":"boolean","default":true},"2.1.9.アルファベット":{"type":"boolean","default":true},"2.1.10.算用数字の位取りの表記":{"type":"boolean","default":true},"2.2.1.ひらがなと漢字の使い分け":{"type":"boolean","default":false},"2.2.2.算用数字と漢数字の使い分け":{"type":"boolean","default":true},"2.2.3.一部の助数詞の表記":{"type":"boolean","default":true},"3.1.1.全角文字と半角文字の間":{"type":"boolean","default":true},"3.1.2.全角文字どうし":{"type":"boolean","default":true},"3.2.カタカナ語間のスペースの有無":{"type":"boolean","default":true},"3.3.かっこ類と隣接する文字の間のスペースの有無":{"type":"boolean","default":true},"4.1.1.句点(。)":{"type":"boolean","default":true},"4.1.3.ピリオド(.)、カンマ(,)":{"type":"boolean","default":true},"4.2.1.感嘆符(！)":{"type":"boolean","default":true},"4.2.2.疑問符(？)":{"type":"boolean","default":true},"4.2.4.中黒(・)":{"type":"boolean","default":true},"4.2.5.波線(〜)":{"type":"boolean","default":true},"4.2.6.ハイフン(-)":{"type":"boolean","default":true},"4.2.7.コロン(：)":{"type":"boolean","default":true},"4.2.8.セミコロン(;)":{"type":"boolean","default":true},"4.2.9.ダッシュ(-)":{"type":"boolean","default":true},"4.3.1.丸かっこ（）":{"type":"boolean","default":true},"4.3.2.大かっこ［］":{"type":"boolean","default":true},"4.3.3.かぎかっこ「」":{"type":"boolean","default":true},"4.3.4.二重かぎかっこ『』":{"type":"boolean","default":true},"4.3.5.二重引用符":{"type":"boolean","default":true},"4.3.6.中かっこ{ }":{"type":"boolean","default":true},"4.3.7.山かっこ<>":{"type":"boolean","default":true},"4.3.8.一重引用符":{"type":"boolean","default":true}}}]},
  "textlint-rule-prh": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"rulePaths":{"title":"Path to YAML files","type":"array","items":{"type":"string","minLength":1},"uniqueItems":true}}}]},
  "textlint-rule-rousseau": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"showLevels":{"title":"Level of importance","type":"array","items":{"type":"string","enum":["suggestion","warning","error"]},"uniqueItems":true},"ignoreTypes":{"title":"Ignoring type of check","type":"array","items":{"type":"string","enum":["passive","lexical-illusion","so","adverbs","readibility","simplicity","weasel","sentence:start","sentence:end","sentence:uppercase"]},"uniqueItems":true}}}]},
  "textlint-rule-sentence-length": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"max":{"title":"Maximum length of a sentence","type":"integer","minimum":1,"default":100}}}]},
  "textlint-rule-sjsj": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"distance":{"title":"Maximum edit distance from correct spelling","type":"integer","minimum":1,"default":1}}}]},
  "textlint-rule-spellcheck-tech-word": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false},
  "textlint-rule-unexpanded-acronym": {"$schema":"http://json-schema.org/draft-04/schema#","oneOf":[{"title":"Enable this rule with default options","type":"boolean"},{"type":"object","properties":{"min_acronym_len":{"title":"Minimum size for the acronym","type":"integer","minimum":1,"default":3},"max_acronym_len":{"title":"Maximum size for the acronym","type":"integer","minimum":1,"default":5},"ignore_acronyms":{"title":"Ignoring acronym list","type":"array","items":{"type":"string","minLength":1},"uniqueItems":true}}}]},
  "textlint-rule-web-plus-db": {"$schema":"http://json-schema.org/draft-04/schema#","title":"Enable this rule","type":"boolean","default":false}
}