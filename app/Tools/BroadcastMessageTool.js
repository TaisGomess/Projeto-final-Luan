// app/Tools/broadcastMessage.js

import { z } from "zod";
import FirstJob from "../Jobs/FirstJob.js";

export function broadcastMessage(server) {
    server.registerTool(
        {
            name: "broadcastMessage",
            description: "Envia uma mensagem para todos os clientes conectados.",
            // Aqui é Zod, não JSON Schema
            inputSchema: z.object({
                name: z.string().optional(),
                text: z.string(),
            }),
        },
        async (args, ctx) => {
            const { name = "anonymous", text } = args;

            await FirstJob.dispatchSocket({
                type: "message",
                name,
                text,
            });

            return {
                content: [
                    {
                        type: "text",
                        text: `Mensagem enviada para "${name}": ${text}`,
                    },
                ],
            };
        }
    );
}
