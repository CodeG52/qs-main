import { Text, View, Image, Pressable } from "react-native";
import React from "react";
import { images } from "../constants";

const CourseCard = ({
  tag,
  title,
  subtitle,
  courseImage,
  Author,
  authorImage,
  Date,
}) => {
  return (
    <View className="w-60 h-108 bg-[#5b5b7c] rounded-lg overflow-hidden shadow-md p-4 mr-4">
      <Image source={courseImage} className="w-full h-36 object-cover" />
      <View className="p-4">
        <Text className="text-xs text-[#FFD700] font-bold text-left">
          {tag}
        </Text>
        <Text className="text-xl font-semibold my-2 text-[#FFD700] text-center">
          {title}
        </Text>
        <Text className="text-[#FFD700] font-light mb-4 ">{subtitle}</Text>
        <View className="flex-row items-center">
          <Image source={authorImage} className="w-10 h-10 rounded-full" />
          <View className="ml-2 flex items-baseline">
            <Text className="text-sm font-medium text-[#FFD700]">{Author}</Text>
            <Text className="text-xs text-[#FFD700]">{Date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CourseCard;
