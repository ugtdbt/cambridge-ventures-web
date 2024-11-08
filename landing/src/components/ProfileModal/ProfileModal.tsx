import React from 'react';
import { Modal } from 'antd';
import styles from './ProfileModal.module.css';

interface ProfileModalProps {
    visible: boolean;
    onClose: () => void;
    name: string;
    title: string;
    description: string;
    photoUrl: string;
}

const ProfileModal: React.FC<ProfileModalProps> = ({
    visible,
    onClose,
    name,
    title,
    description,
    photoUrl,
}) => {
    return (
        <Modal
            open={visible}
            onCancel={onClose}
            footer={null}
            width={window.innerWidth < 768 ? '100%' : '50%'}
            centered
            className={styles.profileModal}
        >
            <div className={styles.profileContent}>

                <div className={styles.profileImageWrapper}>

                    <img src={photoUrl} alt={name} className={styles.profileImage} />

                    <div className={styles.nametitle}>
                        <div className={styles.profileName}>{name}</div>
                        <div className={styles.profileTitle}>{title}</div>
                    </div>

                </div>

                <div className={styles.profileDetails}>

                    <p className={styles.profileDescription}>{description}</p>
                    
                </div>
            </div>
        </Modal>
    );
};

export default ProfileModal;
