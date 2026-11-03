import { ScrollView, View } from "react-native";
import {
  Button,
  Card,
  Header,
  ListRow,
  Text,
  ThemeProvider,
  spacing,
  useTheme,
} from "@eco/ui";

function Demo() {
  const { colors, mode, setMode } = useTheme();
  return (
    <View style={{ flex: 1, backgroundColor: colors.bg }}>
      <Header
        title="Transactions"
        subtitle={`Theme: ${mode}`}
        icon="receipt-outline"
        topInset={40}
        right={
          <Text
            color={colors.primary}
            onPress={() => setMode(mode === "dark" ? "light" : "dark")}
          >
            Toggle
          </Text>
        }
      />
      <ScrollView
        contentContainerStyle={{ padding: spacing.lg, gap: spacing.md }}
      >
        <Card>
          <Text variant="small" muted>
            This month
          </Text>
          <Text variant="h1">₹12,450</Text>
        </Card>
        <Card style={{ padding: 0, overflow: "hidden" }}>
          <ListRow
            icon="restaurant-outline"
            iconColor="#f97316"
            title="Swiggy"
            subtitle="Food · HDFC Card"
            right="-₹450"
            rightColor={colors.expense}
            onPress={() => {}}
          />
          <ListRow
            icon="wallet-outline"
            iconColor="#16a34a"
            title="Salary"
            subtitle="Income · SBI"
            right="+₹40,000"
            rightColor={colors.income}
            onPress={() => {}}
            divider={false}
          />
        </Card>
        <Button title="Save" onPress={() => {}} />
        <Button title="Saving..." loading onPress={() => {}} />
        <Button title="Disabled" disabled onPress={() => {}} />
        <Button title="Delete" variant="danger" onPress={() => {}} />
      </ScrollView>
    </View>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Demo />
    </ThemeProvider>
  );
}
