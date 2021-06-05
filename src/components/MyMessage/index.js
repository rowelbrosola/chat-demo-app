import parse from 'html-react-parser'

const MyMessage = ({ message }) => {
    if (message?.attachments?.length > 0) {
        return (
            <img
                src={message.attachments[0].file}
                alt="message-attachment"
                className="message-image"
                style={{ float: 'right' }}
            />
        )
    }
    return (
        <div className="message" style={{ float: 'right', marginRight: '18px', color: '#fff', backgroundColor: '#3B2A50', padding: '10px', borderRadius: '20px' }}>
            {parse(message.text)}
        </div>
    )
}

export default MyMessage
