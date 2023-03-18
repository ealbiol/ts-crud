import { Modal } from "semantic-ui-react";

export default function BasicModal(props:any) {
    const {show, close, title, children} = props;
    return (
        <Modal closeIcon open={show} onClose={close}>
            {title && <Modal.Header>{title}</Modal.Header>}
            <Modal.Content>{children}</Modal.Content>
        </Modal>
    )
}

