const swaggerOpenApiVersion = "3.0.0";

const swaggerInfo = {
  title: "Swagger-Hanlder",
  version: "0.0.1",
  description: "",
};

const swaggerTags = [
  {
    name: "User",
    description: "사용자 API",
  },
];

const swaggerSchemes = ["http", "https"];

const swaggerSecurityDefinitions = {
  ApiKeyAuth: {
    type: "apiKey",
    name: "Authorization",
    in: "header",
  },
};

const swaggerProduces = ["application/json"];

const swaggerServers = [
  {
    url: "http://localhost:3000",
    description: "로컬 서버",
  },
];

const swaggerSecurityScheme = {
  bearerAuth: {
    type: "http",
    scheme: "bearer",
    bearerFormat: "Token",
    name: "Authorization",
    description: "인증 토큰 값을 넣어주세요.",
    in: "header",
  },
};

const swaggerComponents = {
  JWT_ERROR: {
    description: "jwt token Error",
    type: "object",
    properties: {
      401: {
        type: "Error token 변조 에러",
      },
    },
  },
  SERVER_ERROR: {
    description: "SERVER ERROR",
    type: "object",
    properties: {
      500: {
        type: "Internal Error",
        code: 800,
      },
    },
  },
  DB_ERROR: {
    description: "SERVER DB ERROR",
    type: "object",
    properties: {
      500: {
        type: "DB ERROR",
        code: 500,
      },
    },
  },
};

class Swagger {
  static #uniqueSwaggerInstance;
  #paths = [{}];
  #option = {};
  #setUpOption = {};

  /**
   *
   * @returns {Swagger}
   */
  constructor() {
    if (!Swagger.#uniqueSwaggerInstance) {
      this.#init();
      Swagger.#uniqueSwaggerInstance = this;
    }

    return Swagger.#uniqueSwaggerInstance;
  }

  #init() {
    this.#option = {
      definition: {
        openapi: swaggerOpenApiVersion,
        info: swaggerInfo,
        servers: swaggerServers,
        schemes: swaggerSchemes,
        securityDefinitions: swaggerSecurityDefinitions,

        /* open api 3.0.0 version option */
        produces: swaggerProduces,
        components: {
          securitySchemes: swaggerSecurityScheme,
          schemas: swaggerComponents,
        },
        tags: swaggerTags,
      },
      apis: [],
    };
    this.#setUpOption = {
      // search
      explorer: true,
    };
  }

  addAPI(api) {
    this.#paths.push(api);
  }

  #processAPI() {
    const path = {};

    for (let i = 0; i < this.#paths.length; i += 1) {
      for (const [key, value] of Object.entries(this.#paths[i])) {
        path[key] = value;
      }
    }

    return path;
  }

  getOption() {
    const path = this.#processAPI();
    this.#option.definition.paths = path;

    return {
      apiOption: this.#option,
      setUpOption: this.#setUpOption,
    };
  }
}

module.exports = Swagger;
