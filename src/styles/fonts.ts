import ProductSansRegular from '@assets/font/ProductSans-Regular.woff'
import ProductSansItalic from '@assets/font/ProductSans-Italic.woff'
import ProductSansThin from '@assets/font/ProductSans-Thin.woff'
import ProductSansLight from '@assets/font/ProductSans-Light.woff'
import ProductSansMedium from '@assets/font/ProductSans-Medium.woff'
import ProductSansBlack from '@assets/font/ProductSans-Black.woff'
import ProductSansThinItalic from '@assets/font/ProductSans-ThinItalic.woff'
import ProductSansLightItalic from '@assets/font/ProductSans-LightItalic.woff'
import ProductSansMediumItalic from '@assets/font/ProductSans-MediumItalic.woff'
import ProductSansBold from '@assets/font/ProductSans-Bold.woff'
import ProductSansBoldItalic from '@assets/font/ProductSans-BoldItalic.woff'
import ProductSansBlackItalic from '@assets/font/ProductSans-BlackItalic.woff'

import { css } from '@emotion/react'

const fontSizing = [12, 14, 16, 18, 20, 24, 30, 36, 48, 64]

const weightSize = [...Array.from({ length: 10 }).map((e, i) => i * 100).filter(e => !!e)]

export type FontWeightType = JSX.IntrinsicElements["span"]["style"]["fontWeight"] | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

export type FontSizingType = 12 | 14 | 16 | 18 | 20 | 24 | 30 | 36 | 48 | 64

export const optionsWeigth = (): FontWeightType[] => {
  return ["bold", 'bolder', 'lighter', 'normal', ...Font.weightSize]
}

export const productSansFont = css`
@font-face {
    font-family: 'Product Sans Regular';
    src: local('Product Sans Regular'), url('${ProductSansRegular}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Italic';
    src: local('Product Sans Italic'), url('${ProductSansItalic}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Thin Regular';
    src: local('Product Sans Thin Regular'), url('${ProductSansThin}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Light Regular';
    src: local('Product Sans Light Regular'), url('${ProductSansLight}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Medium Regular';
    src: local('Product Sans Medium Regular'), url('${ProductSansMedium}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Black Regular';
    src: local('Product Sans Black Regular'), url('${ProductSansBlack}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Thin Italic';
    src: local('Product Sans Thin Italic'), url('${ProductSansThinItalic}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Light Italic';
    src: local('Product Sans Light Italic'), url('${ProductSansLightItalic}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Medium Italic';
    src: local('Product Sans Medium Italic'), url('${ProductSansMediumItalic}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Bold';
    src: local('Product Sans Bold'), url('${ProductSansBold}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Bold Italic';
    src: local('Product Sans Bold Italic'), url('${ProductSansBoldItalic}') format('woff');
    }
    

    @font-face {
    font-family: 'Product Sans Black Italic';
    src: local('Product Sans Black Italic'), url('${ProductSansBlackItalic}') format('woff');
    }

    font-family:'Product Sans Regular';
`;

const Font = {
  fontSizing, weightSize
}

export default Font