const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 🐐 | GoatBot V2 ]";

module.exports = {
	config: {
		name: "help 2",
		version: "1.17",
		author: "NTKhang", // orginal author Kshitiz
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "View command usage",
		},
		longDescription: {
			en: "View command usage and list all commands directly",
		},
		category: "info",
		guide: {
			en: "{pn} / help cmdName ",
		},
		priority: 1,
	},

	onStart: async function ({ message, args, event, threadsData, role }) {
	const { threadID } = event;
	const threadData = await threadsData.get(threadID);
	const prefix = getPrefix(threadID);

	if (args.length === 0) {
			const categories = {};
			let msg = "";

			msg += `\n.   /)    /)\n  (｡•ㅅ•｡)\n╭∪━∪━━━━━━━━━❮✿\n│🌿𝐯𝐨𝐫𝐭𝐞𝐱 𝐛𝐨𝐭🌿\n├━━━━━━━━━━━•❖\n│𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐜𝐦𝐝𝐬\n╰━━━━━━━━━━━•❖`;

			for (const [name, value] of commands) {
					if (value.config.role > 1 && role < value.config.role) continue;

					const category = value.config.category || "Uncategorized";
					categories[category] = categories[category] || { commands: [] };
					categories[category].commands.push(name);
			}
8
			Object.keys(categories).forEach(category => {
					if (category !== "info") {
							msg += `\n╭━━━━━━━━━━━•❖\n│𖠸{${category.toUpperCase()} }𖠸`;

€cmd install help2.js const fs = require("fs-extra");
const axios = require("axios");
const path = require("path");
const { getPrefix } = global.utils;
const { commands, aliases } = global.GoatBot;
const doNotDelete = "[ 🐐 | GoatBot V2 ]";

module.exports = {
	config: {
		name: "help 2",
		version: "1.17",
		author: "NTKhang", // orginal author Kshitiz
		countDown: 5,
		role: 0,
		shortDescription: {
			en: "View command usage",
		},
		longDescription: {
			en: "View command usage and list all commands directly",
		},
		category: "info",
		guide: {
			en: "{pn} / help cmdName ",
		},
		priority: 1,
	},

	onStart: async function ({ message, args, event, threadsData, role }) {
	const { threadID } = event;
	const threadData = await threadsData.get(threadID);
	const prefix = getPrefix(threadID);

	if (args.length === 0) {
			const categories = {};
			let msg = "";

			msg += `\n.   /)    /)\n  (｡•ㅅ•｡)\n╭∪━∪━━━━━━━━━❮✿\n│🌿𝐯𝐨𝐫𝐭𝐞𝐱 𝐛𝐨𝐭🌿\n├━━━━━━━━━━━•❖\n│𝐋𝐢𝐬𝐭𝐞 𝐝𝐞𝐬 𝐜𝐦𝐝𝐬\n╰━━━━━━━━━━━•❖`;

			for (const [name, value] of commands) {
					if (value.config.role > 1 && role < value.config.role) continue;

					const category = value.config.category || "Uncategorized";
					categories[category] = categories[category] || { commands: [] };
					categories[category].commands.push(name);
			}
8
			Object.keys(categories).forEach(category => {
					if (category !== "info") {
							msg += `\n╭━━━━━━━━━━━•❖\n│𖠸{${category.toUpperCase()} }𖠸`;

							const names = categories[category].commands.sort();
							for (let i = 0; i < names.length; i += 1) {
									const cmds = names.slice(i, i + 1).map(item => `│➫${item}`);
									msg += `\n│${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
							}

							msg += `\n╰━━━━━━━━━━━•❖`;
					}
			});

			const totalCommands = commands.size;
			msg += `\n│╭━━━━━━━━━━━•❖\n│𝐈𝐍𝐅𝐎 \n│𝐒𝐔𝐏𝐏𝐋𝐄́𝐌𝐄𝐍𝐓𝐀𝐈𝐑𝐄\n├━━━━━━━━━━━•❖\n│𝐣'𝐚𝐢 ${totalCommands} 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬\n│𝐞𝐧 𝐦𝐚 𝐩𝐨𝐬𝐬𝐞𝐬𝐬𝐢𝐨𝐧 \n├━━━━━━━━━━━•❖`;
			msg += `\n│𝗲́𝗰𝗿𝗶𝘁 ${prefix} 𝗵𝗲𝗹𝗽 + 𝗻𝗼𝗺 𝗱𝗲 𝗹𝗮\n│𝗰𝗺𝗱, 𝐩𝐨𝐮𝐫 𝐞𝐧 𝐬𝐚𝐯𝐨𝐢𝐫\n│ 𝐝'𝐚𝐯𝐚𝐧𝐭𝐚𝐠𝐞\n╰━━━━━━━━━━━•❖`;
			msg += `═════════╗\n╔ ╗╔ ╦ ═╦ ╗╔ ═╣\n║ ╚╝ ║ ═╣ ║║ ║║\n║ ╔╗ ║ ═╣ ╚╣ ╔╝\n╚ ╝╚ ╩ ═╩ ═╩ ╩╗   ═════════╝`;


			const helpListImages = [
				"https://i.ibb.co/jHRcKvV/image.jpg"
			];


			const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];


			await message.reply({
					body: msg,
					attachment: await global.utils.getStreamFromURL(helpListImage)
			});
	} else {
			const commandName = args[0].toLowerCase();
			const command = commands.get(commandName) || commands.get(aliases.get(commandName));

			if (!command) {
				await message.reply(`Command "${commandName}" not found.`);
			} else {
				const configCommand = command.config;
				const roleText = roleTextToString(configCommand.role);
				const author = configCommand.author || "Unknown";

				const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

				const guideBody = configCommand.guide?.en || "No guide available.";
				const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

				const response = `╭── NAME ────⭓
	│ ${configCommand.name}
	├── INFO
	│ Description: ${longDescription}
	│ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
	│ Other names in your group: Do not have
	│ Version: ${configCommand.version || "1.0"}
	│ Role: ${roleText}
	│ Time per command: ${configCommand.countDown || 1}s
	│ Author: ${author}
	├── Usage
	│ ${usage}
	├── Notes
	│ The content inside <XXXXX> can be changed
	│ The content inside [a|b|c] is a or b or c
	╰━━━━━━━❖`;

				await message.reply(response);
			}
		}
	},
};

function roleTextToString(roleText) {
	switch (roleText) {
		case 0:
			return "0 (All users)";
		case 1:
			return "1 (Group administrators)";
		case 2:
			return "2 (Admin bot)";
		default:
			return "Unknown role";
	}
}￼Enter							const names = categories[category].commands.sort();
							for (let i = 0; i < names.length; i += 1) {
									const cmds = names.slice(i, i + 1).map(item => `│➫${item}`);
									msg += `\n│${cmds.join(" ".repeat(Math.max(0, 5 - cmds.join("").length)))}`;
							}

							msg += `\n╰━━━━━━━━━━━•❖`;
					}
			});

			const totalCommands = commands.size;
			msg += `\n│╭━━━━━━━━━━━•❖\n│𝐈𝐍𝐅𝐎 \n│𝐒𝐔𝐏𝐏𝐋𝐄́𝐌𝐄𝐍𝐓𝐀𝐈𝐑𝐄\n├━━━━━━━━━━━•❖\n│𝐣'𝐚𝐢 ${totalCommands} 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬\n│𝐞𝐧 𝐦𝐚 𝐩𝐨𝐬𝐬𝐞𝐬𝐬𝐢𝐨𝐧 \n├━━━━━━━━━━━•❖`;
			msg += `\n│𝗲́𝗰𝗿𝗶𝘁 ${prefix} 𝗵𝗲𝗹𝗽 + 𝗻𝗼𝗺 𝗱𝗲 𝗹𝗮\n│𝗰𝗺𝗱, 𝐩𝐨𝐮𝐫 𝐞𝐧 𝐬𝐚𝐯𝐨𝐢𝐫\n│ 𝐝'𝐚𝐯𝐚𝐧𝐭𝐚𝐠𝐞\n╰━━━━━━━━━━━•❖`;
			msg += `═════════╗\n╔ ╗╔ ╦ ═╦ ╗╔ ═╣\n║ ╚╝ ║ ═╣ ║║ ║║\n║ ╔╗ ║ ═╣ ╚╣ ╔╝\n╚ ╝╚ ╩ ═╩ ═╩ ╩╗   ═════════╝`;


			const helpListImages = [
				"https://i.ibb.co/jHRcKvV/image.jpg"
			];


			const helpListImage = helpListImages[Math.floor(Math.random() * helpListImages.length)];


			await message.reply({
					body: msg,
ttachment: await global.utils.getStreamFromURL(helpListImage)
			});
	} else {
			const commandName = args[0].toLowerCase();
			const command = commands.get(commandName) || commands.get(aliases.get(commandName));

			if (!command) {
				await message.reply(`Command "${commandName}" not found.`);
			} else {
				const configCommand = command.config;
				const roleText = roleTextToString(configCommand.role);
				const author = configCommand.author || "Unknown";

				const longDescription = configCommand.longDescription ? configCommand.longDescription.en || "No description" : "No description";

				const guideBody = configCommand.guide?.en || "No guide available.";
				const usage = guideBody.replace(/{p}/g, prefix).replace(/{n}/g, configCommand.name);

				const response = `╭── NAME ────⭓
	│ ${configCommand.name}
	├── INFO
	│ Description: ${longDescription}
	│ Other names: ${configCommand.aliases ? configCommand.aliases.join(", ") : "Do not have"}
	│ Other names in your group: Do not have
	│ Version: ${configCommand.version || "1.0"}
	│ Role: ${roleText}
