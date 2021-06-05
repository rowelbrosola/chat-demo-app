import parse from 'html-react-parser'

const TheirMessage = ({ message, lastMessage }) => {
    const isFirstMessageByUser = !lastMessage || lastMessage.sender.username !== message.sender.username
    console.log(message, lastMessage)

    return (
        <div className="message-row">
            {isFirstMessageByUser && (
                <div
                    className="avatar"
                    style={{ backgroundImage: `url(${message?.sender?.avatar})` }}
                />
            )}
            {message?.attachments?.length > 0
                ? (
                    <img
                        src={message.attachments[0].file}
                        alt="message-attachment"
                        className="message-image"
                        style={{ marginLeft: isFirstMessageByUser ? '4px' : '48px' }}
                    />
                ) : (
                    <div className="message" style={{ float: 'left', backgroundColor: '#CABCDC', marginLeft: isFirstMessageByUser ? '4px' : '48px', padding: '10px', borderRadius: '20px' }}>
                        {parse(message.text)}
                    </div>
                )
            }

        </div>
    )
}

export default TheirMessage
