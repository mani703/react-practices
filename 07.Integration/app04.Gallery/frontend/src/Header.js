import React, { Fragment , useState, useRef } from 'react';
import Modal from "react-modal";
import styles from './assets/scss/modal.scss'
Modal.setAppElement('body');

export default function Header({ modifyed }) {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [comment, setComment] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const refForm = useRef(null);

    const handleSubmit = function(e) {
        try {
            e.preventDefault();

            setComment(e.target.comment.value);
            setSelectedFile(e.target.selectedFile.value);

            modifyed.add(comment, selectedFile);

        } catch (err) {
            console.error(err);
        }
    }

    return (
        <Fragment>
            <button onClick={ () => setModalIsOpen(true) }>upload</button>
            <br/><br/>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={ () => setModalIsOpen(false) }
                shouldCloseOnOverlayClick={ true }
                className={ styles.Modal }
                overlayClassName={ styles.Overlay }
                style={ {content: {width: 350}} }
                contentLabel="modal05 example">
                <h1>비밀번호입력</h1>
                <div>
                    <form
                        onSubmit={ handleSubmit }
                        ref={ refForm }>
                        <label>코멘트</label>
                        <br/>
                        <input
                            type={ 'text' }
                            name={ 'comment' }
                            placeholder={ '코멘트를 입력하세요' }/>
                        <br/><br/>
                        <label>이미지</label>
                        <br/>
                        <input
                            type={ 'file' }
                            name={ 'selectedFile' } />                   
                    </form>
                </div>
                <div className={ styles['modal-dialog-buttons'] }>
                    <button onClick={ () => {
                        refForm.current.dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
                    } }>확인</button>
                    <button onClick={ () => setModalIsOpen(false) }>취소</button>
                </div>
            </Modal>
        </Fragment>
    );
}