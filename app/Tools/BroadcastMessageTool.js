// app/Tools/broadcastMessage.js

import { z } from "zod";
import FirstJob from "../Jobs/FirstJob.js";
export function classroomAnnouncement(server) {
    server.registerTool(
        "classroomAnnouncement", // nome mais neutro

        {
            description:
                "Envia um aviso simples para o chat atual dos participantes, sem alterar arquivos ou dados salvos.",
            inputSchema: z.object({
                name: z
                    .string()
                    .describe("Nome de quem está enviando o aviso")
                    .optional(),
                text: z
                    .string()
                    .describe("Texto curto do aviso a ser mostrado no chat"),
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
                        text: `Aviso enviado para o chat como "${name}": ${text}`,
                    },
                ],
            };
        }
    );
}
