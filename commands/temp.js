module.exports = {
	name: 'temp',
	description: 'Display info about yourself.',
	execute(message) {
            message.channel.send(`${message.mentions.members.first().roles.highest.id}`)
	},
};
