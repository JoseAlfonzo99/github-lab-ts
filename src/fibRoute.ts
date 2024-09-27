import { Request, Response } from "express";
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
    const { num } = req.params as { num: string }; // Definir que `num` es un string
    const fibN = fibonacci(parseInt(num)); // `fibN` es un número
    let result = `fibonacci(${num}) is ${fibN}`; // `fibN` es numérico

    if (fibN < 0) {
        result = `fibonacci(${num}) is undefined`;
    }

    res.send(result);
};
