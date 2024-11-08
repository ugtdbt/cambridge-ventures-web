import React, { useState } from 'react';
import { Modal } from 'antd';
import styles from './ImageSlide.module.css';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


interface AdditionalImagesModalProps {
  visible: boolean;
  onClose: () => void;
  imagePaths: string[];
}

const ImageSlide: React.FC<AdditionalImagesModalProps> = ({ visible, onClose, imagePaths }) => {

  return (
    <>
      <Modal 
         open={visible}
         onCancel={onClose}
         width={window.innerWidth < 768 ? '100%' : '60%'}
         centered
        footer={null}
        className={styles.fullScreenDrawer}
      >

         <div className={styles.name}> Eminent Residences </div>        
         <div className={styles.city}> Seeduwa </div>

         <div className={styles.paragraph}>Our co-founder Dr. Arosha Gunasekera was a Director of Eminent Developments, which initiated,structured and developed the project “Eminent Residences” in Seeduwa</div>




        <Box className={styles.drawerContent}>
          <ImageList variant="masonry" cols={3} gap={5}>
            {imagePaths.map((photo, index) => (
              <ImageListItem key={index} className={styles.imageItem}>
                <img
                  srcSet={`${photo}?w=161&fit=crop&auto=format&dpr=2 2x`}
                  src={`${photo}?w=248&fit=crop&auto=format`}
                  alt={`Image ${index + 1}`}
                  loading="lazy"

                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>

      </Modal>

      

    </>
  );
};

export default ImageSlide;
