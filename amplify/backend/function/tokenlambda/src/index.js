const { IvschatClient, CreateChatTokenCommand } =  require("@aws-sdk/client-ivschat");

/* Amplify Params - DO NOT EDIT
	ENV
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */
exports.handler = async (event) => {
    const requestBody = JSON.parse(event.body);

    const tokenConfig = {
        capabilities: requestBody.capabilities,
        roomIdentifier: requestBody.arn,
        userId: requestBody.userId
    }

    const client = new IvschatClient({ region: "us-east-1" });
    const command = new CreateChatTokenCommand(tokenConfig);
    const response = await client.send(command);

    const apiResponse = JSON.stringify({
        token: response.token,
        sessionExpirationTime: response.sessionExpirationTime,
        tokenExpirationTime: response.tokenExpirationTime
    })

    return {
        statusCode: 200,
        body: apiResponse
    };
};
