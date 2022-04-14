import s from './ModalProjectCard.module.scss';
import Modal from '../../../components/Modal/Modal';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useModal } from '../../../hooks/modalHook';
import { PROJECTS } from '../../../constants/projects';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const ModalProjectCard = () => {
  const { id } = useParams();
  const { image, title, technologies } = PROJECTS.find(
    (p) => id === p.id,
  );
  const { isVisible, toggleModal } = useModal();

  useEffect(() => {
    toggleModal();
  });

  return (
    <Modal show={isVisible} onClose={toggleModal}>
      <div className={s.cardWrapper}>
        <LazyLoadImage
          alt="project-img"
          src={image.src}
          effect="blur"
          width="100%"
          wrapperClassName={s.image}
          placeholderSrc={image.placeholderSrc}
        />

        <div className={s.cardBody}>
          <h3 className={s.title}>{title}</h3>

          <div className={s.technologies}>
            {technologies.map((tech) => (
              <span>{tech}</span>
            ))}
          </div>
        </div>       
      </div>
    </Modal>
  );
};

export default ModalProjectCard;
