// react
import { useState } from "react";

// redux
import { useDispatch } from "react-redux";
import { updateProfileAvatarId } from "../../../features/auth/registerSlice";
import { registerGenerationTokenApi } from "../../../services/authApi";

// cartoonAvatars
import cartoonAvatars from "../../../assets/cartoonAvatars";

// utils
import { goToErrorPage } from "@/lib/utils";

interface UserRegistrationData {
  name: string;
  email: string;
  password: string;
  profession: string;
  phoneNumber: string;
  profileAvatarId: number;
}

export const useChooseAvatar = (userData: UserRegistrationData) => {
  const dispatch = useDispatch();
  const [selectedAvatar, setSelectedAvatar] = useState(cartoonAvatars[0]);
  const [currentSection, setCurrentSection] = useState(1);

  const avatarLimiterDisplayedStart = currentSection === 1 ? 0 : 6;
  const avatarLimiterDisplayedEnd = currentSection === 1 ? 6 : 12;

  const handleRegisterApi = async () => {
    try {
      await registerGenerationTokenApi(userData);
    } catch (error) {
      goToErrorPage(error);
    }
  };

  const handleSave = async () => {
    dispatch(updateProfileAvatarId({ profileAvatarId: selectedAvatar.id }));
    await handleRegisterApi();
  };

  const handleSurpriseMe = () => {
    const n = 12;
    const randomNum = Math.floor(Math.random() * n);
    setSelectedAvatar(cartoonAvatars[randomNum]);
    setCurrentSection(randomNum > 5 ? 2 : 1);
  };

  return {
    selectedAvatar,
    setSelectedAvatar,
    currentSection,
    setCurrentSection,
    avatarLimiterDisplayedStart,
    avatarLimiterDisplayedEnd,
    handleSave,
    handleSurpriseMe,
  };
};
