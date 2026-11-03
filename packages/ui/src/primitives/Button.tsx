import {
  ActivityIndicator,
  Pressable,
  type StyleProp,
  type ViewStyle,
} from "react-native";
import { radius } from "../tokens";
import { useTheme } from "../theme/ThemeProvider";
import { Text } from "./Text";

type Variant = "primary" | "ghost" | "danger";
type Props = {
  title: string;
  onPress: () => void;
  variant?: Variant;
  loading?: boolean;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>; // parent decides margins
};

export function Button({
  title,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style,
}: Props) {
  const { colors } = useTheme();
  // Lookup tables instead of if/else chains: add a variant by adding one line each.
  const bg = {
    primary: colors.primary,
    ghost: "transparent",
    danger: "transparent",
  }[variant];
  const fg = {
    primary: colors.onPrimary,
    ghost: colors.primary,
    danger: colors.expense,
  }[variant];
  const off = disabled || loading;

  return (
    <Pressable
      onPress={onPress}
      disabled={off}
      accessibilityRole="button"
      accessibilityState={{ disabled: off, busy: loading }}
      style={({ pressed }) => [
        {
          height: 48,
          borderRadius: radius.md,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: bg,
          opacity: off ? 0.5 : pressed ? 0.8 : 1,
        },
        style,
      ]}
    >
      {loading ? (
        <ActivityIndicator color={fg} />
      ) : (
        <Text color={fg} style={{ fontWeight: "600" }}>
          {title}
        </Text>
      )}
    </Pressable>
  );
}
