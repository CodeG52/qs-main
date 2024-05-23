import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SearchInput, BlogCard } from "../../components";
import { images } from "../../constants";

const Bookmark = () => {
  return (
    <SafeAreaView className="px-4 my-6 bg-primary h-full">
      <Text className="text-2xl text-[#FFD700] font-psemibold mb-6">Blogs</Text>
      
      <SearchInput
        placeholder="Search blogs"
      
      />

      <BlogCard
      title="What is Quantum Shifting?"
      image={images.qs}     
      />
      <BlogCard
      title="What’s in the Quantum Shift app?"  
      image={images.shift}   
      />
      
    </SafeAreaView>
  );
};

export default Bookmark;
