import ProfileCard from './ProfileCard';

const profiles = [
    {
      name: "Ana Silva",
      title: "Desenvolvedora Frontend",
      imageUrl: "https://i.pravatar.cc/150?img=1",
      id: 2,
    },
    {
      name: "Carlos Souza",
      title: "Engenheiro de Software",
      imageUrl: "https://i.pravatar.cc/150?img=2",
      id: 3,
    },
    {
      name: "Maria Oliveira",
      title: "UX Designer",
      imageUrl: "https://i.pravatar.cc/150?img=3",
      id: 4,
    },
  ];

function ProfileList() {
  return (
    <>
      {profiles.map((profile) => (
        <ProfileCard
          key={profile.id}
          name={profile.name}
          title={profile.title}
          imageUrl={profile.imageUrl}
        />
      ))}
    </>
  );
}

export default ProfileList;
