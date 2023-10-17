import { Dimensions, PixelRatio, Platform } from 'react-native'

const { width } = Dimensions.get('window')

const GUIDELINE_BASE_WIDTH = 375 //standard width which will be used as base for calculating the scale.

// FONT FAMILY
const FONT_FAMILY_EXTRALIGHT = 'Aileron-UltraLight'
const FONT_FAMILY_LIGHT = 'Aileron-Light'
const FONT_FAMILY_REGULAR = 'Aileron-Regular'
const FONT_FAMILY_BOLD = 'Aileron-Bold'
const FONT_FAMILY_SEMIBOLD = 'Aileron-SemiBold'

const getSizeStyle = (size, upper = false) => {
    const scaledSize = size

    const ratio = Platform.OS === 'android' || upper ? 1.3 : 1.3

    return {
        fontSize: scaledSize,
        height: scaledSize * 1.2,
        lineHeight:
            Platform.OS === 'ios' ? scaledSize * ratio : scaledSize * ratio,
    }
}

const getScale = () => {
    const scaleWidth = width / GUIDELINE_BASE_WIDTH
    return scaleWidth
}

const getScaledFontStyle = (size, lineHeight) => {
    const scale = getScale()
    const scaledFontSize = {
        includeFontPadding: false,
        fontSize: size * scale,
        ...(!!lineHeight && { lineHeight: lineHeight * scale }),
    }
    return scaledFontSize
}

const getButtonScaledFontStyle = (size) => {
    const scale = getScale()
    const scaledFontSize = {
        includeFontPadding: false,
        fontSize: size * scale,
        lineHeight: size * scale * 1.333,
        height: size * scale * 1.333,
    }
    return scaledFontSize
}

const normalize = (size) => {
    const ratio = PixelRatio.get()

    return ratio >= 3 ? size * 1.15 : size
}

const typography = {
    FONT_FAMILY_EXTRALIGHT,
    FONT_FAMILY_LIGHT,
    FONT_FAMILY_REGULAR,
    FONT_FAMILY_BOLD,
    FONT_FAMILY_SEMIBOLD,
    getSizeStyle,
    getScale,
    getScaledFontStyle,
    getButtonScaledFontStyle,
    normalize,
}

export default typography
