import { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

const ProfileDataContext = createContext();
const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({
    pageProfile: { results: [] }, // We will use this variable later
    popularProfiles: { results: [] },
  });

  const currentUser = useCurrentUser();

  const handleFollow = async (clickedProfile) => {
    try {
      const { data } = await axiosRes.post("/api/followers/", {
        followed: clickedProfile.id,
      });
      setProfileData((prevState) => ({
        ...prevState,
        pageProfile: {results: prevState.pageProfiles.results.map((profile) => {
            return profile.id === clickedProfile.id
              ? {
                  // Profile clicked on. Update its follows count, set following id
                  ...profile,
                  follower_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile.is_owner
              ? {
                  // Profile of logged in user. Update their following count
                  ...profile,
                  following_count: profile.followers_count + 1,
                }
              : {
                  // This is the other profiles in the array, return unchanged.
                  profile,
                };
            }),
        },
        popularProfiles: {
          ...prevState.popularProfiles,
          results: prevState.popularProfiles.results.map((profile) => {
            return profile.id === clickedProfile.id
              ? {
                  // Profile clicked on. Update its follows count, set following id
                  ...profile,
                  follower_count: profile.followers_count + 1,
                  following_id: data.id,
                }
              : profile.is_owner
              ? {
                  // Profile of logged in user. Update their following count
                  ...profile,
                  following_count: profile.followers_count + 1,
                }
              : {
                  // This is the other profiles in the array, return unchanged.
                  profile,
                };
          }),
        },
      }));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleMount = async () => {
      try {
        const { data } = await axiosReq.get(
          "/api/profiles/?ordering=-followers_count"
        );
        setProfileData((prevState) => ({
          ...prevState,
          popularProfiles: data,
        }));
      } catch (err) {
        console.log(err);
      }
    };
    handleMount();
  }, [currentUser]);

  return (
    <ProfileDataContext.Provider value={profileData}>
      <SetProfileDataContext.Provider value={{ setProfileData, handleFollow }}>
        {children}
      </SetProfileDataContext.Provider>
    </ProfileDataContext.Provider>
  );
};
