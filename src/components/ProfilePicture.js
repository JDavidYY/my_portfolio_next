import Image from 'next/image';

const ProfilePicture = () => {
  return (
    <Image
      src="/profile.png"
      alt="Profile"
      width={300}
      height={200}
      className="rounded"
      priority
    />
  );
};

export default ProfilePicture;
