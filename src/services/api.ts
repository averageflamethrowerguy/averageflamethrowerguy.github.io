import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {RootState} from "../app/store";
import currentApp from "../appConfiguration";

/**
 * Creates the api messaging service. The following routes are offered
 * 
 * loginUser ==> POST /login : log in the user with username and password
 * createUser ==> POST /create-account : create an account with username and password
 * getPeople ==> GET /people : get a list of all usernames of people on this service
 * getMessages ==> POST /get-messages : get a list of all messages sent between self and counterparty
 * postMessage ==> POST /message : write a new message to a user
 * postVote ==> POST /vote : upvote or downvote a message
 */
export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: currentApp.baseApiUrl,
    prepareHeaders: (headers, { getState }) => {
      return headers
    },
  }),
  tagTypes: ['PEOPLE', 'MESSAGE'],
  endpoints: (builder) => ({

    /* ============= BEGIN USER ROUTES ============== */
    
    /*
    loginUser: Given a username and a password, logs the user in
    Parameters: 
        - User (User): the User to log in
    Returns: 
        - Token (string): the token to provide to autheticate future messages
    */
    loginUser: builder.mutation<string, User>({
      query: (user: User)=> ({
        url: `login`,
        method: 'POST',
        body: user
      }),
    }),

    /*
    createUser: Given a username and a password, creates a new user
    Parameters: 
        - User (User): the User to create
    */
    createUser: builder.mutation<any, User>({
      query: (user: User) => ({
        url: `create-account`,
        method: 'POST',
        body: user
      }),
      invalidatesTags: []
    }),

    /*
    getPeople: gets a list of people 
    Returns:
        People (Username[]): a list of the usernames of people on the app
    */
    getPeople: builder.query<Username[], void>({
        query: ()=> ({
          url: `people`,
          method: 'GET',
        }),
        providesTags: ['PEOPLE']
      }),
    /* ============= END USER ROUTES ============== */

    /* ============= BEGIN CONVERSATION ROUTES ============== */
    /*
    getMessages: given a couterparty, get a list of messages with that counterparty
    Parameters:
      MessageRequestBody: the body of the message to send
    Returns:
      GetMessagesResponse: an object with separate arrays of messages depending on who sent them
    */
    getMessages: builder.query<GetMessagesResponse, MessageRequestBody>({
      query: (request_body)=> ({
        url: `get-messages`,
        method: 'POST',
        body: request_body
      }),
      providesTags: (result, error, arg) => [
        {type: "MESSAGE", id: arg.CounterpartyUsername}
      ],
    }),

    /*
    postMessages: send a message to someone else
    Parameters:
        PostMessageBody: the message to post
    */
    postMessage: builder.mutation<any, PostMessageBody>({
      query: (body) => ({
        url: 'message',
        method: 'POST',
        body
      }),
      invalidatesTags: (result, error, arg) => [
        {type: "MESSAGE", id: arg.RecipientUsername}
      ]
    }),

    /*
    postVote: either upvote or downvote a message
    Parameters:
        PostVoteBody: the body of the vote to post
    */
    postVote: builder.mutation<any, PostVoteBody>({
        query: (body) => ({
          url: 'vote',
          method: 'POST',
          body
        }),
        // in a production environment, would return the username to invalidate from the route
        invalidatesTags: ['MESSAGE']
      }),
    /* ============= END CONVERSATION ROUTES ============== */
  }),

})

export const {
    // user information
    useLoginUserMutation,
    useCreateUserMutation,
    useGetPeopleQuery,

    // message information
    useGetMessagesQuery,
    usePostMessageMutation,
    usePostVoteMutation,
} = api