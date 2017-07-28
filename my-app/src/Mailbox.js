import React from 'react';

function Mailbox(props) {
	const unreadMessage = props.unreadMessage;

	return (
		<div>
			<h1>Hello sir!</h1>
			{unreadMessage.length > 0 &&
				<h2>
					You have {unreadMessage.length} unread message.
				</h2>
			}
		</div>
	);
}

export default Mailbox;