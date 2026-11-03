import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { useTheme } from "../theme/ThemeProvider";

// Borrow the exact icon-name type from Ionicons, so a typo like "chevron-fowrard" is an error.
export type IconName = ComponentProps<typeof Ionicons>["name"];

type Props = { name: IconName; size?: number; color?: string };

export function Icon({ name, size = 20, color }: Props) {
  const { colors } = useTheme();
  return <Ionicons name={name} size={size} color={color ?? colors.muted} />;
}
