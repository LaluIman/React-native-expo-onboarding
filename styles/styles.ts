import { Dimensions, StyleSheet } from "react-native";
const { width, height } = Dimensions.get("window");

export default StyleSheet.create({
    "onboarding__container": {
        flex: 1,
        backgroundColor: "#000",
    },
    "onboarding__background": {
        position: "absolute",
        width: width,
        height: height,
        top: 0,
        left: 0,
    },
    "onboarding__logo": {
        color: "#fff",
        fontSize: 18,
        fontWeight: "600",
        paddingVertical: 10,
    },
    "onboarding__content": {
        flex: 1,
        justifyContent: "flex-end",
        textAlign: "left",
        paddingHorizontal: 24,
    },
    "onboarding__title": {
        color: "#fff",
        fontSize: 36,
        lineHeight: 44,
        fontWeight: "700",
        marginBottom: 16,
    },
    "onboarding__title--highlight": {
        fontWeight: "500",
    },
    "onboarding__subtitle": {
        color: "#fff",
        fontSize: 16,
        lineHeight: 22,
        marginBottom: 40,
    },
    "onboarding__footer": {
        padding: 24,
        paddingBottom: 40,
    },
    "onboarding__dots": {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 32,
    },
    "onboarding__dot": {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "#404044",
        marginRight: 12,
    },
    "onboarding__dot--active": {
        backgroundColor: "#fff",
        width: 30,
    },
    "onboarding__action": {
        alignItems: "center",
    },
    "onboarding__button": {
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius: 12,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    "onboarding__button-text": {
        color: "#fff",
        fontWeight: "700",
        fontSize: 16,
    },
});
