module.exports = {
  "/user/sing-up": {
    post: {
      tags: ["User"],
      summary: "사용자 회원가입",
      description: "사용자 회원가입(email, password, phone)",
      requestBody: {
        content: {
          "application/json": {
            schema: {
              properties: {
                email: {
                  type: "string",
                  description: "사용자 이메일",
                  example: "aaa@example.com",
                },
                phone: {
                  type: "string",
                  description: "사용자 전화번호",
                  example: "000-0000-0000",
                },
                password: {
                  type: "string",
                  description: "사용자 패스워드",
                  example: "123456789",
                },
              },
            },
          },
        },
      },
      responses: {
        201: {
          description: "사용자 회원가입 성공",
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  result: {
                    type: "object",
                    properties: {
                      code: {
                        type: "number",
                        description: "code",
                        example: 201,
                      },
                      message: {
                        type: "string",
                        description: "성공 메시지",
                        example: "success",
                      },
                      data: {
                        type: "array",
                        description: "data",
                        example: [],
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
};
