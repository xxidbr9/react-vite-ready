const fontSizing = [12, 14, 16, 18, 20, 24, 30, 36, 48, 64]


const weightSize = [...Array.from({ length: 10 }).map((e, i) => i * 100).filter(e => !!e)]

export type FontWeightType = JSX.IntrinsicElements["span"]["style"]["fontWeight"] | typeof weightSize

export type FontSizingType = typeof fontSizing

const Font = {
  fontSizing, weightSize
}

export default Font