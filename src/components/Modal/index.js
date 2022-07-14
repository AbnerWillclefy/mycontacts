/* eslint-disable comma-dangle */

import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import { Container, Overlay, Footer } from './styles';

import Button from '../Button';

export default function Modal({
  danger,
  title,
  children,
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,
  isOpen,
  isLoading,
}) {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <Overlay>
      <Container danger={danger}>
        <h1>{title}</h1>

        <div className="modal-body">
          {children}
        </div>

        <Footer>
          <button
            type="button"
            className="cancel-button"
            onClick={onCancel}
            disabled={isLoading}
          >
            {cancelLabel}
          </button>
          <Button
            type="button"
            danger={danger}
            onClick={onConfirm}
            isLoading={isLoading}
          >
            {confirmLabel}
          </Button>
        </Footer>
      </Container>
    </Overlay>,
    document.getElementById('modal-root')
  );
}

Modal.propTypes = {
  danger: PropTypes.bool,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  confirmLabel: PropTypes.string,
  cancelLabel: PropTypes.string,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
};

Modal.defaultProps = {
  danger: false,
  confirmLabel: 'Confirmar',
  cancelLabel: 'Cancelar',
  isLoading: true,
};
