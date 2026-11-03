import { Pressable, View } from 'react-native';
import type { ReactNode } from 'react';
import { radius, spacing } from '../tokens';
import { useTheme } from '../theme/ThemeProvider';
import { Icon, type IconName } from '../primitives/Icon';
import { Text } from '../primitives/Text';

type Props = {
  title: string;
  subtitle?: string;
  icon?: IconName;
  onBack?: () => void;   // shows a back arrow when given
  right?: ReactNode;     // any buttons/menu on the right
  topInset?: number;     // pass useSafeAreaInsets().top so it clears the status bar
};

export function Header({ title, subtitle, icon, onBack, right, topInset = 0 }: Props) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: spacing.md, paddingTop: topInset + spacing.md,
                   paddingBottom: spacing.md, paddingHorizontal: spacing.md, backgroundColor: colors.surface,
                   borderBottomWidth: 1, borderBottomColor: colors.line }}>
      {onBack ? (
        <Pressable onPress={onBack} hitSlop={12} accessibilityRole="button" accessibilityLabel="Go back">
          <Icon name="chevron-back" size={24} color={colors.ink} />
        </Pressable>
      ) : null}
      {icon ? (
        <View style={{ width: 38, height: 38, borderRadius: radius.md, backgroundColor: colors.primarySoft,
                       alignItems: 'center', justifyContent: 'center' }}>
          <Icon name={icon} color={colors.primary} />
        </View>
      ) : null}
      <View style={{ flex: 1 }}>
        <Text variant="title" numberOfLines={1} accessibilityRole="header">{title}</Text>
        {subtitle ? <Text variant="small" muted numberOfLines={1}>{subtitle}</Text> : null}
      </View>
      {right}
    </View>
  );
}