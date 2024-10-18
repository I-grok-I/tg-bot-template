import { session, Markup } from 'telegraf'
import { store } from './connections/session'
import { bot } from './connections/token'
import { stage } from './scenes/stage'
import './connections/env'
import { exampleComposer } from './examplePart/handlers'


bot.use(session({
	store,
	getSessionKey: ctx => {
		if (!ctx.from?.id) return
		return ctx.from.id.toString() 
	}
}))
bot.use(stage.middleware())




bot.use(exampleComposer)


bot.use(async ctx => ctx.reply('Извините, но я не понимаю что нужно сделать...', Markup.removeKeyboard()))

bot.catch((e: any) => console.log(e.stack))

bot.launch({ dropPendingUpdates: true });
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));