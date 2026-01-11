import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { generateAvatar } from "../../utils/GenerateAvatar";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UpdateProfile() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [avatars, setAvatars] = useState([]);
  const [selectedAvatar, setSelectedAvatar] = useState();
  const [loading, setLoading] = useState(false);

  const { currentUser, updateUserProfile, setError } = useAuth();

  useEffect(() => {
    setAvatars(generateAvatar());
  }, []);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (selectedAvatar === undefined) {
      return setError("Please select an avatar");
    }

    try {
      setError("");
      setLoading(true);

      const profile = {
        displayName: username,
        photoURL: avatars[selectedAvatar],
      };

      await updateUserProfile(currentUser, profile);
      navigate("/profile"); // 🔥 back to profile
    } catch (e) {
      setError("Failed to update profile");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-full flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-8">
        <h2 className="text-3xl text-center dark:text-white">
          Pick an avatar
        </h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-wrap">
            {avatars.map((avatar, index) => (
              <img
                key={index}
                src={avatar}
                onClick={() => setSelectedAvatar(index)}
                className={classNames(
                  index === selectedAvatar
                    ? "border-4 border-blue-700"
                    : "hover:border-4 hover:border-blue-400",
                  "w-24 h-24 rounded-full cursor-pointer m-2"
                )}
                alt=""
              />
            ))}
          </div>

          <input
            type="text"
            placeholder="Enter display name"
            defaultValue={currentUser.displayName || ""}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full px-3 py-2 border rounded"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white py-2 rounded"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
}
