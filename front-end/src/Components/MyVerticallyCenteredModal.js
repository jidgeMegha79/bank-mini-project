import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {CheckCircleOutlineOutlined} from '@mui/icons-material'

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className='modal-body'>
        <CheckCircleOutlineOutlined className='check-circle'/>
        <h3>Congratulations</h3>
        <p>Your changes have been successfully saved</p>
        
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className='w-25'>Ok</Button>
      </Modal.Footer>
    </Modal>
  );
}
export default MyVerticallyCenteredModal;