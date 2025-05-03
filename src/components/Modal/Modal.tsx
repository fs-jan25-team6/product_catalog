import React, { useEffect, useState } from 'react';
import styles from './Modal.module.scss';
import ReactDOM from 'react-dom';
import { CloseIcon } from '../../assets/icons/close-icon';
import { Icon } from '../../assets/icons/Icon/Icon';
import classNames from 'classnames';
import { Typography } from '../atoms/Typography';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
}: ModalProps) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsLoading(true);
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 400);

      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('modal--open');
    } else {
      document.body.classList.remove('modal--open');
    }

    return () => {
      document.body.classList.remove('modal--open');
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    onClose();
  };

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className={styles.modal} onClick={handleBackdropClick}>
      <div className={styles.modal__content} onClick={handleModalClick}>
        {isLoading ? (
          <div className={styles.modal__loader}>
            <div className={styles.spinner}></div>
          </div>
        ) : (
          <>
            <button className={styles.modal__close} onClick={onClose}>
              <Icon>
                <CloseIcon />
              </Icon>
            </button>
            <img
              className={styles.modal__image}
              src="/src/assets/images/checkout-cart.png"
              alt="Modal illustration"
            />
            <Typography
              tag="h2"
              variant="h2"
              color="primary"
              className={styles.modal__text}
            >
              Checkout is not implemented yet. <br></br> Do you want to clear
              the Cart?
            </Typography>
            <div className={styles.modal__actions}>
              <button
                className={classNames(
                  styles.modal__button,
                  styles['modal__button--yes'],
                )}
                onClick={onConfirm}
              >
                Yes
              </button>

              <button
                className={classNames(
                  styles.modal__button,
                  styles['modal__button--cancel'],
                )}
                onClick={onClose}
              >
                Cancel
              </button>
            </div>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
};
