import { Pressable, View } from 'react-native';
import { radius, spacing } from '../tokens';
import { useTheme } from '../theme/ThemeProvider';
import { Icon, type IconName } from '../primitives/Icon';
import { Text } from '../primitives/Text';

// Same props as the money manager's ListRow.
type Props = {
  title: string;
  subtitle?: string;
  subtitleNumberOfLines?: number;
  right?: string;       // main value, e.g. "-₹450"
  rightColor?: string;  // e.g. colors.expense
  rightSub?: string;    // small text under the value
  icon?: IconName;
  iconColor?: string;   // e.g. the category color
  onPress?: () => void;
  divider?: boolean;
};

export function ListRow(p: Props) {
  const { colors } = useTheme();
  const tint = p.iconColor ?? colors.primary;
  return (
    <Pressable
      onPress={p.onPress}
      disabled={!p.onPress}
      android_ripple={p.onPress ? { color: colors.line } : undefined}
      style={({ pressed }) => ({
        flexDirection: 'row', alignItems: 'center', paddingVertical: spacing.md, paddingHorizontal: spacing.md,
        backgroundColor: pressed ? colors.bg : colors.surface,
        borderBottomWidth: p.divider === false ? 0 : 1, borderBottomColor: colors.line,
      })}
    >
      {p.icon ? (
        // Tinted circle. tint + '22' adds ~13% alpha. It only works with #rrggbb colors.
        <View style={{ width: 36, height: 36, borderRadius: radius.pill, backgroundColor: tint + '22',
                       alignItems: 'center', justifyContent: 'center', marginRight: spacing.md }}>
          <Icon name={p.icon} color={tint} />
        </View>
      ) : null}

      <View style={{ flex: 1 }}>
        <Text numberOfLines={1}>{p.title}</Text>
        {p.subtitle ? <Text variant="small" muted numberOfLines={p.subtitleNumberOfLines}>{p.subtitle}</Text> : null}
      </View>

      {p.right ? (
        <View style={{ alignItems: 'flex-end', flexShrink: 0, marginLeft: spacing.sm }}>
          <Text color={p.rightColor} style={{ fontWeight: '600' }}>{p.right}</Text>
          {p.rightSub ? <Text variant="small" muted>{p.rightSub}</Text> : null}
        </View>
      ) : null}
      {p.onPress && !p.right ? <Icon name="chevron-forward" size={18} /> : null}
    </Pressable>
  );
}