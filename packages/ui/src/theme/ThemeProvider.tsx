import {
  createContext,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { useColorScheme } from "react-native";
import { dark, light, type Colors } from "../tokens";

export type Mode = "light" | "dark" | "system";
type ThemeValue = {
  colors: Colors;
  mode: Mode;
  isDark: boolean;
  setMode: (m: Mode) => void;
};

const ThemeCtx = createContext<ThemeValue | null>(null);

type Props = {
  children: ReactNode;
  mode?: Mode; // controlled: the app owns the value (e.g. from its Settings)
  initialMode?: Mode; // uncontrolled: the library keeps the value itself
};

export function ThemeProvider({
  children,
  mode: controlled,
  initialMode = "system",
}: Props) {
  const system = useColorScheme();
  const [inner, setInner] = useState<Mode>(initialMode);
  const mode = controlled ?? inner; // if the app passes a mode, it wins

  const isDark = (mode === "system" ? (system ?? "light") : mode) === "dark";
  // useMemo: only rebuild the object when something changed, so children don't re-render for nothing
  const value = useMemo<ThemeValue>(
    () => ({ colors: isDark ? dark : light, mode, isDark, setMode: setInner }),
    [isDark, mode],
  );
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>;
}

export function useTheme(): ThemeValue {
  const v = useContext(ThemeCtx);
  if (!v) throw new Error("useTheme must be used inside <ThemeProvider>");
  return v;
}
