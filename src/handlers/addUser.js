import AWS from 'aws-sdk'
import uuid from 'uuid/v4'

const client = new AWS.DynamoDB.DocumentClient()

export default async (event) => {
    const Item = {
        id: uuid(),
        ...JSON.parse(event.body)
    }

    await client.put({
        TableName: process.env.USERS_TABLE,
        Item
    }).promise()

    return {
        statusCode: 200,
        body: JSON.stringify(Item)
    }
}
