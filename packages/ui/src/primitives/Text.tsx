import { Text as RNText, type TextProps } from 'react-native';
import { font } from '../tokens';
import { useTheme } from '../theme/ThemeProvider';

// "keyof typeof font" = the keys of the font object: 'small' | 'body' | 'title' | 'h1'.
// Add a size to tokens and this type updates by itself.
type Variant = keyof typeof font;
type Props = TextProps & { variant?: Variant; color?: string; muted?: boolean };

export function Text({ variant = 'body', color, muted = false, style, ...rest }: Props) {
  const { colors } = useTheme();
  const bold = variant === 'h1' || variant === 'title';
  return (
    <RNText
      {...rest}
      style={[
        { fontSize: font[variant], fontWeight: bold ? '700' : '400', color: color ?? (muted ? colors.muted : colors.ink) },
        style, // caller's style last, so it can override
      ]}
    />
  );
}
