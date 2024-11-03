import { session, Markup } from 'telegraf'
import { store } from './db/session'
import { bot } from './token'
import stage from './stage'
import './env'
import { sharedComposer } from './sharedPart/composer'
import { usersComposer } from './usersPart/composer'



// CONNECT SESSION
bot.use(session(
	{
		store,
		getSessionKey: ctx => {
			if (!ctx.from?.id) return
			return ctx.from.id.toString() 
		}
	}
));
bot.use(stage.middleware());



// CONNECT APP PARTS
bot.use(usersComposer)
bot.use(sharedComposer)




// HANDLING UNHANDLED UPDATES
bot.use(async ctx => ctx.reply('Извините, но я не понимаю что нужно сделать...', Markup.removeKeyboard()))

// LOG UNHANDLED ERRORS
bot.catch((e: any) => console.log(e.stack))

// LAUNCH THE BOT
bot.launch({ dropPendingUpdates: true });
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));