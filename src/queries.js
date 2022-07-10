import {gql} from '@apollo/client'

export const GET_FOLLOWING_AMOUNT = gql`
query countFollowingUser($userId: String!){
    getFollowingAmount(userId: $userId)
}
`

export const GET_FOLLOWER_AMOUNT = gql`
query countFollowerUser($userId: String!){
    getFollowerAmount(userId: $userId)
}
`

export const FOLLOW_USER = gql`
mutation addToFollowList($userId: String!, $followedUserId: String!){
    followUser(userId: $userId, followedUserId: $followedUserId){
        firstName
        lastName
    }
}
`

