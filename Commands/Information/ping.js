const { Client, ChatInputCommandInteraction } = require("discord.js")
const EditReply = require("../../Systems/EditReply")

module.exports = {
    name: "ping",
    description: "Displays the bot's current latency",
    category: "Information",

    /**
     * @param {Client} client
     * @param {ChatInputCommandInteraction} interaction
     */
    async execute(interaction, client) {

        await interaction.deferReply()

        return EditReply(interaction, "✅", `The current Websocket Lantency is: \`${client.ws.ping} ms\``)

    }

}