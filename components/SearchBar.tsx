import { View, TextInput, Image, TextInputProps } from "react-native";
import React, { forwardRef } from "react";
import { icons } from "@/constants/icons";

interface Props {
  placeholder: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onPress?: () => void;
}

interface Props extends TextInputProps {
  placeholder: string;
}

const SearchBar = forwardRef<TextInput, Props>(
  ({ placeholder, value, onChangeText, onPress }, ref) => {
    return (
      <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
        <Image
          source={icons.search}
          className="w-5 h-5"
          resizeMode="contain"
          tintColor="#AB8BFF"
        />
        <TextInput
          ref={ref}
          onPress={onPress}
          placeholder={placeholder}
          value={value}
          onChangeText={onChangeText}
          className="flex-1 ml-2 text-white"
          placeholderTextColor="#A8B5DB"
        />
      </View>
    );
  }
);

export default SearchBar;
