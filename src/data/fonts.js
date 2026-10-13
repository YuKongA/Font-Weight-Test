export const weightDefinitions = [
  { weight: 100, name: '淡体', english: 'Thin', alias: 'Hairline' },
  { weight: 200, name: '特细', english: 'ExtraLight', alias: 'UltraLight' },
  { weight: 300, name: '细体', english: 'Light' },
  { weight: 350, name: '次细', english: 'DemiLight', alias: 'SemiLight' },
  { weight: 400, name: '常规', english: 'Regular', alias: 'Normal' },
  { weight: 500, name: '适中', english: 'Medium' },
  { weight: 600, name: '次粗', english: 'SemiBold', alias: 'DemiBold' },
  { weight: 700, name: '粗体', english: 'Bold' },
  { weight: 800, name: '特粗', english: 'ExtraBold', alias: 'UltraBold' },
  { weight: 900, name: '浓体', english: 'Black', alias: 'Heavy' },
  { weight: 950, name: '特浓', english: 'ExtraBlack', alias: 'UltraBlack' },
];
export const weights = weightDefinitions.map(item => item.weight);
export const sampleText = '永 の A a 6';
export const fullSampleText = '这是示例 ABCD abcd 0123';
export const comparisonSamples = {
  han: { label: '汉字', text: '永' },
  kana: { label: '假名', text: 'あ' },
  latin: { label: '字母', text: 'Ag' },
  digits: { label: '数字', text: '06' },
};
export const fontOptions = [
  { value: 'sans-serif', label: '无衬线' },
  { value: 'serif', label: '衬线' },
  { value: 'monospace', label: '等宽' },
  { value: 'MiSans', label: 'MiSans', detail: '参考' },
];
export const languageOptions = [
  { value: 'en', label: '默认（en）' },
  { value: 'zh-Hans', label: '简体中文' },
  { value: 'zh-CN', label: '中国大陆' },
  { value: 'zh-SG', label: '新加坡' },
  { value: 'zh-MY', label: '马来西亚' },
  { value: 'zh-Hant', label: '繁体中文' },
  { value: 'zh-TW', label: '中国台湾' },
  { value: 'zh-HK', label: '中国香港' },
  { value: 'zh-MO', label: '中国澳门' },
  { value: 'ja', label: '日本语' },
  { value: 'ko', label: '朝鲜语' },
  { value: 'ko-KR', label: '韩国语' },
  { value: 'vi', label: '越南语' },
];
export const glyphColumns = [
  { label: '默认', lang: 'en' },
  { label: '简中', lang: 'zh-Hans' },
  { label: '台湾', lang: 'zh-TW' },
  { label: '香港', lang: 'zh-HK' },
  { label: '日文', lang: 'ja' },
  { label: '韩文', lang: 'ko-KR' },
];
export const glyphCharacters = ['扇', '复', '直', '迷'];
export function codepoint(character) {
  return 'U+' + character.codePointAt(0).toString(16).toUpperCase().padStart(4, '0');
}
