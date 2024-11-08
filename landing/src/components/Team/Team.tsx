import React, { useState } from 'react';
import ProfileModal from '../ProfileModal/ProfileModal';
import styles from './Team.module.css';
import classNames from 'classnames';
import img1 from '../../assets/team/jayamin.png';
import img2 from '../../assets/team/arosha.png';

interface Leader {
  name: string;
  title: string;
  image: string;
  bio: string;
  moreText: string; // Additional text for hover
}

const leaders: Leader[] = [
  {
    name: 'Jayamin Pelpola',
    title: 'Cofounder and Executive Chairman',
    image: img1,
    bio: 'Bio or additional information about Jayamin Pelpola.',
    moreText: 'Cofounder and Executive Chairmanxt ever since the 1500s, when an unknown printer took ...',
  },
  {
    name: 'Dr. Arosha Gunasekera',
    title: 'Co-founder and Managing Director',
    image: img2,
    bio: 'Bio or additional information about Dr. Arosha Gunasekera.',
    moreText: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry...',
  },
];

const Team: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedLeader, setSelectedLeader] = useState<Leader | null>(null);

  const showModal = (leader: Leader) => {
    setSelectedLeader(leader);
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setSelectedLeader(null);
  };

  return (
    <div className={styles.leadershipTeamContainer}>

<div className={styles.titleWrapper}>
<div className={styles.mainTitle}>Leadership Team</div>
<div className={styles.subTitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
</div>
     



      {leaders.map((leader) => (
        <div
          key={leader.name}
          className={styles.card}
          onClick={() => showModal(leader)}
        >
          <img src={leader.image} alt={leader.name} className={styles.image} />
          <div className={styles.overlay}>
            <h3 className={classNames(styles.name,'text-primary')}>{leader.name}</h3>
            <p className={styles.title}>{leader.title}</p>
            <p className={styles.moreText}>{leader.moreText}</p>
            <p className={styles.readMore}>Read More...</p>
          </div>
        </div>
      ))}


      <ProfileModal
        visible={isModalVisible}
        onClose={handleCancel}
        name={selectedLeader?.name || ""}
        title={selectedLeader?.title || ""}
        description="
        What is Lorem Ipsum?
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        
        Why do we use it?
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
        "
        photoUrl={selectedLeader?.image||""}
      />



    </div>
  );
};

export default Team;
