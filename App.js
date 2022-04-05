import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Home from "./src/screens/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import Navigation from "./src/navigation";

const queryclient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

export default function App() {
  return (
    <QueryClientProvider client={queryclient}>
      <Navigation />
      <StatusBar style="auto" />
    </QueryClientProvider>
  );
}
