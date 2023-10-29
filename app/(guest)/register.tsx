import { Image } from "expo-image";
import { router } from "expo-router";
import { Pressable } from "react-native";

import { Container } from "@/components/container";
import { Metadata } from "@/components/metadata";
import { Text, View } from "@/components/themed";
import { colors } from "@/constants/colors";
import { layouts } from "@/constants/layouts";
import { courses } from "@/content/courses";
import { getCommonTranslation } from "@/content/translations";
import { useBreakpoint } from "@/context/breakpoints";
import { useCourse } from "@/context/course";
import { useLanguageCode } from "@/context/language";
import { useTheme } from "@/context/theme";

export default function Register() {
  const { border, accent, background, mutedForeground } = useTheme();
  const breakpoint = useBreakpoint();
  const { languageCode: language } = useLanguageCode();
  const { setCourseId } = useCourse();

  return (
    <>
      <Metadata title="Register" />
      <View style={{ flex: 1 }}>
        <Container
          style={{
            padding:
              breakpoint === "sm" ? layouts.padding : layouts.padding * 2,
            paddingTop: 0,
          }}
        >
          <View
            style={{ gap: layouts.padding * 2, marginTop: layouts.padding * 2 }}
          >
            <Text
              style={{ fontSize: 32, fontWeight: "800", textAlign: "center" }}
            >
              {getCommonTranslation("iWantToLearn", language)}
            </Text>
            <View
              style={{
                flexDirection: "row",
                gap: layouts.padding,
                flexWrap: "wrap",
              }}
            >
              {courses
                .filter(({ id }) => id !== language)
                .map((course, index) => (
                  <Pressable
                    key={index}
                    style={{
                      width: breakpoint == "sm" ? "48%" : "24%",
                    }}
                    onPress={() => {
                      setCourseId(course.id);
                      router.push("/learn");
                    }}
                  >
                    {({ pressed, hovered }) => (
                      <View
                        style={{
                          padding: layouts.padding,
                          borderWidth: layouts.borderWidth,
                          borderColor: border,
                          alignItems: "center",
                          borderRadius: layouts.padding,
                          gap: layouts.padding,
                          backgroundColor:
                            hovered || pressed ? accent : background,
                        }}
                      >
                        <View
                          style={{
                            width: 100,
                            aspectRatio: 4 / 3,
                            overflow: "hidden",
                            borderRadius: 6,
                            backgroundColor: colors.transparent,
                          }}
                        >
                          <Image
                            source={course.image}
                            style={{ width: "100%", height: "100%" }}
                          />
                        </View>
                        <Text
                          style={{
                            fontSize: 18,
                            fontWeight: "bold",
                            color: mutedForeground,
                          }}
                        >
                          {course.name}
                        </Text>
                      </View>
                    )}
                  </Pressable>
                ))}
            </View>
          </View>
        </Container>
      </View>
    </>
  );
}
