import React,{useState} from 'react';
import styles from './ProjectCard.module.css';
import classNames from 'classnames';
import { Divider, Flex, Tag } from 'antd';
import ImageSlide from '../ImageSlide/ImageSlide';

interface props{
    city:string;
    name:string;
    status:string;
    image:string;
    additionalImages: string[];
}


const ProjectCard: React.FC<props> = ({city, name, status ,image,additionalImages}) => {


    const [isDrawerVisible, setIsDrawerVisible] = useState(false);

    const showDrawer = () => {
      setIsDrawerVisible(true);
    };
  
    const closeDrawer = () => {
      setIsDrawerVisible(false);
    };

  return (

    <div className={classNames(styles.card,'flex')} >

      <img src={image} alt={name} className={classNames(styles.cardimage)} />

      <div className={styles.tagHold}>
      <Tag className={styles.tag}>completed</Tag>
      </div>

      <div className={classNames(styles.cardoverlay)}>
      <div className={classNames(styles.cardtown)}>{city}</div>
        <div className={classNames(styles.title)}>{name}</div>
        <button className={styles.viewBtn} onClick={showDrawer}>View Project</button>
      </div>
      <ImageSlide visible={isDrawerVisible} onClose={closeDrawer} imagePaths={additionalImages} />
    </div>
  );
};

export default ProjectCard;
