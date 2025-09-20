import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import styles from "../styles/styles";

export default function Onboard() {
  const router = useRouter();
  const [step, setStep] = useState<0 | 1>(0);
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = 0;
    progress.value = withTiming(1, { duration: 500 });
  }, [progress, step]);

  const fadeIn = useAnimatedStyle(() => ({
    opacity: progress.value,
    transform: [{ translateY: interpolate(progress.value, [0, 1], [20, 0]) }],
  }));

  const gradients: [string, string, string, string][] = [
    ["#576eb2", "#3b82f6", "#244cc2", "#131216"],
    ["#ea580c", "#f09b51", "#b91c1c", "#131216"],
  ];

  const titleParts = [
    { before: "Own Your Money, Shape ", highlight: "Your Life", highlightColor: "#60a5fa" },
    { before: "Build Wealth with ", highlight: "Confidence", highlightColor: "#FF6A00" },
  ];

  const subtitles = [
    "From saving smart to spending wise, your financial goals begin to rise.",
    "Track your spending, grow your savings, and achieve your goals—effortlessly.",
  ];

  const handlePress = () => {
    if (step === 0) {
      setStep(1);
    } else {
      router.push("/home");
    }
  };

  return (
    <SafeAreaView style={styles["onboarding__container"]}>
      <StatusBar barStyle="light-content" translucent backgroundColor="transparent" />

      <LinearGradient
        colors={gradients[step]}
        style={styles["onboarding__background"]}
        start={[0.3, 0]}
        end={[0.5, 0.7]}
      />
      <BlurView intensity={100} />
      <Animated.View style={[styles["onboarding__content"], fadeIn]}>
        <Text style={styles["onboarding__logo"]}>⌘ Zentra</Text>
        <Text style={styles["onboarding__title"]}>
          {titleParts[step].before}
          <Text style={[styles["onboarding__title--highlight"], { color: titleParts[step].highlightColor }]}>
            {titleParts[step].highlight}
          </Text>
        </Text>
        <Text style={styles["onboarding__subtitle"]}>{subtitles[step]}</Text>
      </Animated.View>

      <View style={styles["onboarding__footer"]}>
        <View style={styles["onboarding__dots"]}>
          {[0, 1].map((i) => (
            <View 
              key={i} 
              style={[
                styles["onboarding__dot"], 
                i === step && {
                  ...styles["onboarding__dot--active"],
                  backgroundColor: gradients[step][1]
                }
              ]} 
            />
          ))}
        </View>

        <View style={styles["onboarding__action"]}>
          <TouchableOpacity
            style={[styles["onboarding__button"], { backgroundColor: step === 0 ? "#2F6FFF" : "#FF6A00" }]}
            onPress={handlePress}
          >
            <Text style={styles["onboarding__button-text"]}>{step === 0 ? "Next" : "Start Planning"}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
