import { SafeAreaView, Text } from "react-native";

export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "#000", alignItems: "center", justifyContent: "center" }}>
            <Text style={{ color: "#fff", fontSize: 18 }}>Welcome</Text>
        </SafeAreaView>
    );
}
