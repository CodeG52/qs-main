import React, { useState, useRef } from "react";
import { Button, StatusBar, View } from "react-native";
import { Video } from "expo-av";

const CourseDetails = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  const videoStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    height: 250,
  };

  return (
    <View style={{ flex: 1 }}>
      <Video
        source={{
          uri: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
        }}
        ref={video}
        style={videoStyle}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      <View style={{ margin: 20 }}>
        {/* <Button
          title="Play from 5s"
          onPress={() => video.current.playFromPositionAsync(5000)}
        />
        <Button
          title={status.isLooping ? "Set to not loop" : "Set to loop"}
          onPress={() => video.current.setIsLoopingAsync(!status.isLooping)}
        /> */}
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

export default CourseDetails;
