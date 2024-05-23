import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ScrollView,
  Image,
  FlatList,
  Text,
  View,
  Pressable,
} from "react-native";

import { images } from "../../../constants";
import { SearchInput } from "../../../components";
import CourseCard from "../../../components/CourseCard";
import { Link } from "expo-router";
import CourseDetails from "./detail";

const Home = () => {
  const [courses, setCourses] = useState([
    {
      id: "1",
      title: "Jump Preparation",
      data: [
        {
          tag: "Members Only",
          title: "I AM Meditation",
          courseImage: images.qs,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Qi Gong",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Visualization",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
      ],
    },
    {
      id: "2",
      title: "Time",
      data: [
        {
          tag: "Members Only",
          title: "Past",
          courseImage: images.qs,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Present",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Future",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
      ],
    },
    {
      id: "3",
      title: "Integration Exercises",
      data: [
        {
          tag: "Members Only",
          title: "Ancestral healing jump",
          courseImage: images.qs,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Emotional blocks clearing",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
        {
          tag: "Members Only",
          title: "Manifesting your ideal life",
          courseImage: images.shift,
          subtitle:
            "Unlock the power within with I AM Meditation, a transformative journey into quantum jumping.",
          Author: "Craig Khan",
          authorImage: images.qs,
          Date: "Aug 18",
        },
      ],
    },
  ]);

  const renderItem = ({ item }) => (
    <View>
      <Text className="text-lg font-pregular mb-3 mt-4 text-[#FFD700]">
        {item.title}
      </Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {item.data.map((course, index) => (
          <View className="mr-3">
            <Link href="/home/detail">
              <CourseCard
                key={index}
                tag={course.tag}
                title={course.title}
                courseImage={course.courseImage}
                subtitle={course.subtitle}
                Author={course.Author}
                authorImage={course.authorImage}
                Date={course.Date}
              />
            </Link>
          </View>
        ))}
      </ScrollView>
    </View>
  );

  return (
    <SafeAreaView className="bg-primary flex-1">
      <View className="bg-primary flex-1 my-6 px-4 space-y-6">
        <View className="flex justify-between items-start flex-row mb-6">
          <View>
            <Text className="font-pmedium text-sm text-[#FFD700]">
              Welcome Back
            </Text>
            <Text className="text-2xl font-psemibold text-[#FFD700]">Will</Text>
          </View>
          <View className="mt-1.5">
            <Image
              source={images.logoSmall}
              className="w-9 h-10"
              resizeMode="contain"
            />
          </View>
        </View>
        <SearchInput placeholder="Search a course" />
        <FlatList
          data={courses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          className="pb-192"
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
