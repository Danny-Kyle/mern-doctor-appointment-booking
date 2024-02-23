import * as jwt from "jsonwebtoken";

// Define the types for req and res parameters
interface Request {
  headers: {
    authorization: string;
  };
  body: {
    userId?: string;
  };
}

interface Response {
  status: (status: number) => {
    send: (body: object) => Response;
  };
}

// The next function type is defined as a function that takes no arguments and returns void
type NextFunction = () => void;

// Export the middleware function with proper types
module.exports = async (res: Response, req: Request, next: NextFunction) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded: any) => {
      if (err) {
        return res.status(401).send({
          message: "Authentication failed",
          success: false,
        });
      } else {
        req.body.userId = decoded.id;
        next();
      }
    });
  } catch (error) {
    return res.status(401).send({
      message: "Auth Failed",
      success: false,
    });
  }
};
