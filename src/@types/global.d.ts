/*
The User object in the backend, minus the ID field.
Used for creating users in the API, and logging them in
*/
declare interface User {
    Username: string
    Password: string
}

/*
The Username field in an object.
Returned by /people route from backend
*/
declare interface Username {
    Username: string
}

/*
Request body for all messages between two people
*/
declare interface MessageRequestBody {
	RequesterUsername:    string  // the username of the person requesting the message log
	CounterpartyUsername: string  // the username of the other person in the chat
	RequesterAuthKey:     string  // the auth key for the requester
}

/**
Message represents a message sent over the platform. They are timestamped so they can
be arranged in-order.
**/
declare interface Message {
	ID:       string  // the ObjectId
	Text:     string  // the text of the message
	// approval can only be updated by Reciever
	Approval: int     // -1 for dislike; 0 for neutral, 1 for like
	Time:     int     // milliseconds from the Unix epoch
}

/**
 * Message hydrated with the person who sent it
 */
declare interface MessageHydrated {
	ID:       string  // the ObjectId
	Text:     string  // the text of the message
	// approval can only be updated by Reciever
	Approval: int     // -1 for dislike; 0 for neutral, 1 for like
	Time:     int     // milliseconds from the Unix epoch
    SenderUsername: string // the person who sent the message
}

/**
 * The response from the GetMessages route.
 */
declare interface GetMessagesResponse {
    my_msgs:  Message[] | null     // messages that I sent
    their_msgs: Message[] | null   // messages that my counterparty sent
}

/*
The body for the /message POST route
*/
declare interface PostMessageBody {
	// the username of the person sending the message
	SenderUsername: string
	// the username of the person recieving the message
	RecipientUsername: string
	// the text in the message
	Text: string
	// the auth key for the sender
	SenderAuthKey: string
}

/*
The body for the /vote POST route 
*/
declare interface PostVoteBody {
	// the ObjectId of the message to find
	MessageId: string
	// the auth key for the voter
	VoterAuthKey: string
	// the amount (1, or -1) to increment the message
	Vote: int
}